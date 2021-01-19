const User = require('../models/user');

module.exports.postGuestGame = async (req, res, next) => {
  const { name } = req.body
  const capitalize = (string) => {
    const strArr = string.toLowerCase().split(' ')
    const x = strArr.map(str => str[0].toUpperCase() + str.slice(1))
    return x.join(' ')
  }
  await User.findOneAndUpdate({_id: req.session.user._id}, {name: capitalize(name)}, {useFindAndModify: false}).exec()
  res.redirect('/game/prepare')
}

module.exports.getPrepareGame = async (req, res, next) => {
  res.render('preparegame', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}

module.exports.getPlayGame = async (req, res, next) => {
  res.render('playgame', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}