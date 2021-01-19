const User = require('../models/user');

module.exports.getStart = async (req, res, next) => {


  console.log(req.session.user)
  res.render('index', {
    title: 'The Quiz Game',
    userName: req.session.user.name,
  })
}