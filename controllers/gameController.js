const User = require('../models/user');
const QuestionShort = require('../models/questionShort');
const mongoose = require('mongoose')

module.exports.postGuestGame = async (req, res, next) => {
  const { name } = req.body
  const capitalize = (string) => {
    const strArr = string.toLowerCase().split(' ')
    const x = strArr.map(str => str[0].toUpperCase() + str.slice(1))
    return x.join(' ')
  }
  await User.findOneAndUpdate({ _id: req.session.user._id }, { name: capitalize(name) }, { useFindAndModify: false }).exec()
  res.redirect('/game/prepare')
}

module.exports.getPrepareGame = async (req, res, next) => {
  req.session.canplay = true
  res.render('preparegame', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}

module.exports.getPlayGame = async (req, res, next) => {
  try {
    const [message] = await req.consumeFlash('info');
    if (req.session.canplay) {
      console.log(message)
      req.session.canplay = false
      req.session.currentQuestionStartTime = Date.now()
      const [questionObj] = await QuestionShort.aggregate([
        { $match: { _id: { $nin: req.session.user.questionsAnswered } } },
        { $sample: { size: 1 } }
      ]).exec()
      const { _id, question, content: answers } = questionObj
      res.render('playgame', {
        title: 'The Quiz Game',
        userName: req.session.user.name,
        message,
        gameData: {
          question,
          answers,
          id: _id.toString(),
        }
      })
    } else {
      console.log(message)
      res.redirect('/')
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports.postPlayGameAnswer = async (req, res, next) => {
  const { answerNumber, questionId } = req.body;
  try {
    const currentQuestion = await QuestionShort.findById(questionId).exec()
    if (Date.now() - req.session.currentQuestionStartTime > 5000000){
      req.session.canplay = false;
      await req.flash('info', 'Answer after real time checked by server!');
      res.redirect('/game/play');
    } else if (currentQuestion.correct.toString() === answerNumber.toString()) {
      req.session.canplay = true;
      let answeredArr = [...req.session.user.questionsAnswered]
      const questionsTotalQty = await QuestionShort.countDocuments()
      if (answeredArr.length === questionsTotalQty - 1) {
        answeredArr = []
      } else {
        answeredArr.push(mongoose.Types.ObjectId(questionId))
      }
      await User.findOneAndUpdate({ _id: req.session.user._id }, {questionsAnswered: answeredArr}, { useFindAndModify: false }).exec()
      await req.flash('info', 'Good Answer!');
      res.redirect('/game/play')
    } else {
      req.session.canplay = false;
      await req.flash('info', 'Wrong answer... try again.');
      res.redirect('/game/play');
    }
  } catch (err) {
    console.log(err)
  }
}