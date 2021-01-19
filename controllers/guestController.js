const User = require('../models/user');

module.exports.getBeforeGuestGame = async (req, res, next) => {
  res.render('GuestView', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}