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

  const usersQty = User.countDocuments().exec();
  const winnersQty = User.countDocuments({ winnerQty: { $gt: 0 } }).exec();
  const userWithMaxWinQty = User.findOne({ winnerQty: { $gt: 0 } }).sort({ winnerQty: -1 }).limit(1).exec();
  const userBestTime = User.findOne({ winnerQty: { $gt: 0 } }).sort({ bestWinTime: 1 }).limit(1).exec();

  let promisesWithResults = {
    names: [usersQty, winnersQty, userWithMaxWinQty, userBestTime],
    values: [0, 0, {}, { bestWinTime: 0 }],
  }

  const DBsearchResults = await Promise.all(promisesWithResults.names)
  promisesWithResults.values = DBsearchResults.map((result, index) => result ? result : promisesWithResults.values[index])

  const bestFormatedTime = moment(promisesWithResults.values[3].bestWinTime, "x").format("mm:ss");

  res.render('index', {
    title: 'The Quiz Game',
    resultsTables: {
      winners,
      restPlayers,
    },
    message,
    mainStats: {
      usersQty: promisesWithResults.values[0],
      winnersQty: promisesWithResults.values[1],
      maxWinQty: promisesWithResults.values[2].winnerQty,
      inQtyGames: promisesWithResults.values[2].gamesPlaied,
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

module.exports.getMyStat = async (req, res, next) => {
  const currentUser = req.session.user || {};
  if (!currentUser.isLoggedIn) {
    await req.flash('authInfo', 'Please log in to see stats section.');
    return res.redirect('/')
  }
  const { totalScore = 0, avarageScore = 0, winnerQty = 0, gamesPlaied = 0, bestWinTime = 0 } = currentUser;
  const bestFormatedTime = moment(bestWinTime, "x").format("mm:ss");

  const avgAllGamesPlaied = User.aggregate([{ $group: { _id: null, avarage: { $avg: "$gamesPlaied" } } }]).exec()
  const avgAllScore = User.aggregate([{ $group: { _id: null, avarage: { $avg: "$avarageScore" } } }]).exec()
  const avgWinTime = User.aggregate([
    { $match: { winnerQty: { $gt: 0 } } },
    { $group: { _id: null, avarage: { $avg: "$bestWinTime" } } }]).exec()

  let promisesWithResults = {
    names: [avgAllGamesPlaied, avgAllScore, avgWinTime],
    values: [0, 0, 0],
  }

  const DBsearchResults = await Promise.all(promisesWithResults.names)
  promisesWithResults.values = DBsearchResults.map((result, index) => result[0] ? result[0].avarage : promisesWithResults.values[index])

  const avgWinFormatedTime = moment(promisesWithResults.values[2], "x").format("mm:ss");

  res.render('myStatView', {
    title: 'The Quiz Game',
    mainStats: {
      totalScore,
      avarageScore: avarageScore.toFixed(1),
      winnerQty,
      gamesPlaied,
      bestFormatedTime,
      avgAllGamesPlaied: promisesWithResults.values[0].toFixed(1),
      avgAllScore: promisesWithResults.values[1].toFixed(1),
      avgWinFormatedTime,
    },
  })
}