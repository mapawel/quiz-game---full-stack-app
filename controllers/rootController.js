const User = require('../models/user');
const moment = require('moment');

module.exports.getStart = async (req, res, next) => {
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
  console.log('winners: ', winners)
  console.log('rest: ', restPlayers)
  res.render('index', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
    resultsTables: {
      winners,
      restPlayers
    }
  })
}