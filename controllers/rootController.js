const User = require('../models/user');

module.exports.getStart = async (req, res, next) => {
  res.render('index', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}