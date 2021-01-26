const User = require('../models/user');
const moment = require('moment');
const RESULTS_PER_PAGE = 25;

module.exports.getStart = async (req, res, next) => {
  const [message] = await req.consumeFlash('authInfo');
  let winners = await User
    .find({ winnerQty: { $gt: 0 } })
    .sort({
      bestWinTime: 1,
    }
    )
    .limit(3)
    .lean()
    .exec()
  const restPlayers = await User
    .find({ winnerQty: 0, maxScoreIfNotWin: { $gt: 0 } })
    .sort({
      maxScoreIfNotWin: -1,
      avarageScore: -1,
    }
    )
    .limit(3)
    .lean()
    .exec()
  if (winners.length > 0) {
    winners = winners.map(winner => ({ ...winner, ...{ bestWinFormatedTime: moment(winner.bestWinTime, "x").format("mm:ss") } }))
  }

  const getUsersQty = User.countDocuments().exec();
  const getWinnersQty = User.countDocuments({winnerQty: {$gt: 0}}).exec();
  const getUserMaxWinQty = User.find({winnerQty: {$gt: 0}}).sort({winnerQty: -1}).limit(1).exec();
  const getUserBestTime = User.find({winnerQty: {$gt: 0}}).sort({bestWinTime: 1}).limit(1).exec();
  
  const DBsearchResults = await Promise.all([getUsersQty, getWinnersQty, getUserMaxWinQty, getUserBestTime])
  const usersQty = DBsearchResults[0]
  const winnersQty = DBsearchResults[1]
  const maxWinQty = DBsearchResults[2][0].winnerQty;
  const inQtyGames = DBsearchResults[3][0].gamesPlaied;
  const bestTime = DBsearchResults[3][0].bestWinTime;
  const bestFormatedTime = moment(bestTime, "x").format("mm:ss");


  res.render('index', {
    title: 'The Quiz Game',
    resultsTables: {
      winners,
      restPlayers,
    },
    message,
    mainStats: {
      usersQty,
      winnersQty,
      maxWinQty,
      inQtyGames,
      bestFormatedTime,
    },
  })
}

module.exports.getResults = async (req, res, next) => {
  const { page = 1 } = req.query
  let results = await User
    .find({ maxScoreIfNotWin: { $gt: 0 } })
    .sort({
      winnerQty: -1,
      bestWinTime: 1,
      maxScoreIfNotWin: -1,
      avarageScore: -1,
    }
    )
    .limit(RESULTS_PER_PAGE * page)
    .lean()
    .exec()
  const resultsQty = await User
    .find({ maxScoreIfNotWin: { $gt: 0 } })
    .countDocuments()
    .exec()
  const isLoadingDisabled = (page * RESULTS_PER_PAGE) >= resultsQty;
  
  if (results.length > 0) {
    results = results.map(user => ({ ...user, ...{ bestWinFormatedTime: moment(user.bestWinTime, "x").format("mm:ss") } }))
  }

  res.render('ResultsView', {
    title: 'The Quiz Game - results',
    page,
    results,
    isLoadingDisabled,
  })
}