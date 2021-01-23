const User = require('../models/user');
const QuestionShort = require('../models/questionShort');
const mongoose = require('mongoose');
const moment = require('moment');


module.exports.postGuestGame = async (req, res, next) => {
  const capitalize = (string) => {
    const strArr = string.toLowerCase().split(' ')
    const x = strArr.map(str => str[0].toUpperCase() + str.slice(1))
    return x.join(' ')
  }

  const { name } = req.body;
  if (!req.session.user) {
    const guestUser = new User({ name: capitalize(name) })
    await guestUser.save()
    req.session.user = guestUser
    req.session.save((err) => {
      if (err) console.log(err);
      res.redirect('/game/prepare');
    })
  } else res.redirect('/game/prepare');
}

module.exports.getPrepareGame = async (req, res, next) => {
  if (req.session.currentGame.gameInProgress) {
    return res.redirect('/game/finish?finished=true');
  }
  req.session.currentGame.canplay = true;
  req.session.currentGame.questionsToAnswer = 11;
  req.session.currentGame.gameStartTime = null;
  req.session.save((err) => {
    if (err) console.log(err)
    res.render('game/PrepareGameView', {
      title: 'The Quiz Game - preparing ...',
    })
  })
}

module.exports.getPlayGame = async (req, res, next) => {
  try {
    const [message] = await req.consumeFlash('info');
    req.session.currentGame.canplay = false;
    req.session.currentGame.gameInProgress = true;
    req.session.currentGame.questionStartTime = Date.now()
    if (!req.session.currentGame.gameStartTime) req.session.currentGame.gameStartTime = Date.now()
    req.session.currentGame.questionsToAnswer--
    req.session.save(async (err) => {
      if (err) console.log(err)
      if (req.session.currentGame.questionsToAnswer === 0) {
        req.session.currentGame.winner = true;
        await req.flash('info', 'Grat Job! You WON!');
        req.session.save((err) => {
          if (err) console.log(err)
          res.redirect('/game/finish')
        })
      } else {
        const [questionObj] = await QuestionShort.aggregate([
          { $match: { _id: { $nin: req.session.user.questionsAnswered } } },
          { $sample: { size: 1 } }
        ]).exec()
        const { _id, question, content: answers } = questionObj
        const { maxScoreIfNotWin, bestWinTime } = req.session.user
        const bestWinFormatedTime = moment(bestWinTime, "x").format("mm:ss")
        res.render('game/PlayGameView', {
          title: 'The Quiz Game - play ...',
          message,
          gameData: {
            question,
            answers,
            id: _id.toString(),
          },
          currentGame: req.session.currentGame,
          userScore: {
            maxScoreIfNotWin,
            bestWinFormatedTime,
          },
        })
      }
    })

  } catch (err) {
    console.log(err)
  }
}

module.exports.postPlayGameAnswer = async (req, res, next) => {
  const answerDate = Date.now()
  const { answerNumber, questionId } = req.body;
  try {
    const currentQuestion = await QuestionShort.findById(questionId).exec()

    if (answerDate - req.session.currentGame.questionStartTime > 60000) {
      req.session.currentGame.canplay = false;
      await req.flash('info', 'Answer after real time checked by server!');
      req.session.save((err) => {
        if (err) console.log(err)
        res.redirect('/game/finish');
      })

    } else if (currentQuestion.correct.toString() === answerNumber.toString()) {
      req.session.currentGame.canplay = true;
      await req.flash('info', 'Good Answer!');
      req.session.save(async (err) => {
        if (err) console.log(err)
        let answeredArr = [...req.session.user.questionsAnswered]
        const questionsTotalQty = await QuestionShort.countDocuments()
        if (answeredArr.length === questionsTotalQty - 1) {
          answeredArr = []
        } else {
          answeredArr.push(mongoose.Types.ObjectId(questionId))
        }
        await User.findOneAndUpdate({ _id: req.session.user._id }, { questionsAnswered: answeredArr }, { useFindAndModify: false }).exec()
        res.redirect('/game/play')
      })

    } else {
      req.session.currentGame.canplay = false;
      await req.flash('info', 'Wrong answer... try again.');
      req.session.save((err) => {
        if (err) console.log(err)
        res.redirect('/game/finish');
      })
    }

  } catch (err) {
    console.log(err)
  }
}

module.exports.getFinishGame = async (req, res, next) => {
  if (!req.session.currentGame.gameInProgress) {
    res.redirect('/');
    return
  }
  try {
    const { timeout, finished } = req.query
    let [message] = await req.consumeFlash('info');
    if (timeout) message = 'Time out! Try again...'
    if (finished) message = 'So you wanted to escape? As to your previous game, let\'s finish it...'
    const stats = {
      pointsInCurrentGame: 10 - req.session.currentGame.questionsToAnswer,
      currentGameTime: Date.now() - req.session.currentGame.gameStartTime,
      currentGameFormatedTime: moment((Date.now() - req.session.currentGame.gameStartTime), "x").format("mm:ss"),
      winner: req.session.currentGame.winner,
    }
    const user = req.session.user;
    if (stats.winner) {
      user.winnerQty++
      if (user.bestWinTime === 0) user.bestWinTime = stats.currentGameTime;
      if (stats.currentGameTime < user.bestWinTime) user.bestWinTime = stats.currentGameTime;
    }
    if (user.maxScoreIfNotWin < stats.pointsInCurrentGame) user.maxScoreIfNotWin = stats.pointsInCurrentGame
    user.gamesPlaied++;
    user.totalScore = user.totalScore + stats.pointsInCurrentGame;
    user.avarageScore = user.totalScore / user.gamesPlaied;
    await User.findOneAndUpdate({ _id: req.session.user._id }, user, { useFindAndModify: false }).exec()
    req.session.currentGame.questionsToAnswer = null;
    req.session.currentGame.gameStartTime = null;
    req.session.currentGame.winner = null;
    req.session.currentGame.gameInProgress = false;
    req.session.save((err) => {
      if (err) console.log(err)
      res.render('game/FinishGameView', {
        title: 'The Quiz Game',
        message,
        stats,
      })
    })
  } catch (err) {
    console.log(err)
  }
}