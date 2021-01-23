const User = require('../models/user');
const bcrypt = require('bcryptjs');


module.exports.getCheckAccount = async (req, res, next) => {
  res.render('auth/CheckAccountView', {
    title: 'The Quiz Game',
  })
}

module.exports.getSignOn = async (req, res, next) => {
  const [message] = await req.consumeFlash('authInfo');
  res.render('auth/SignOnView.js', {
    title: 'The Quiz Game - sign on',
    message,
    inputValues: { name: '', email: '', password: '', confirmpassword: '' },
  })
}

module.exports.postSignOn = async (req, res, next) => {
  let message;
  const { name, email, password, confirmpassword } = req.body;
  const isMailInDB = await User.find({ email });
  if (isMailInDB.length > 0) {
    message = 'This e-mail address exists in our base. Please Log In using it or Sign On using another e-mail address.'
    return res.render('auth/SignOnView.js', {
      title: 'The Quiz Game - sign on',
      message,
      inputValues: { name, email, password, confirmpassword },
    })
  }
  const salt = await bcrypt.genSalt(12);
  const encryptedPass = await bcrypt.hash(password, salt);
  await User.findOneAndUpdate({ _id: req.session.user._id }, {
    name,
    email,
    password: encryptedPass,
    isSignedUp: true,
    isLoggedIn: true,
  }, { useFindAndModify: false }).exec()
  await req.flash('authInfo', 'Your account created!');
  res.redirect('/auth/signon');
}

module.exports.getLogIn = async (req, res, next) => {
  const [message] = await req.consumeFlash('authInfo');
  res.render('auth/LogInView.js', {
    title: 'The Quiz Game - sign on',
    message,
    inputValues: { email: '' }
  })
}

module.exports.postLogIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec()
  if (!user) {
    await req.flash('authInfo', 'We don\'t have this e-mail address in the base. Type a correct one or Sign On for a new account.');
    return res.redirect('/auth/login')
  }
  const isPassMatching = await bcrypt.compare(password, user.password);
  if (isPassMatching) {
    const newLoggedUser = await User.findOneAndUpdate({ email }, {
      isLoggedIn: true,
    }, { useFindAndModify: false }).exec()
    req.session.user = newLoggedUser;
    req.session.save((err) => {
      if (err) console.log(err)
      res.redirect('/')
    })
  } else {
    await req.flash('authInfo', 'Wrong password ... Try again or reset password or Sign On for a new account.');
    res.redirect('/auth/login')
  }
}

module.exports.getLogOut = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect('/')
  })
}