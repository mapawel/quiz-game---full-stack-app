const User = require('../models/user');

module.exports.getSettings = async (req, res, next) => {
  const { name, email } = await User.findById(req.session.user._id).exec()
  res.render('logged/settingsview', {
    title: 'The Quiz Game - settings',
    inputValues: {
      name,
      email,
      
    }
  })
}