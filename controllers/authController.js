const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { capitalize } = require('../helpers/capitalize');
const crypto = require('crypto');
const { generateToken } = require('../helpers/generateToken');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "michalpawlowski2020@gmail.com",
    pass: "" // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  },
  tls: {
    rejectUnauthorized: false
  }
})


module.exports.getCheckAccount = async (req, res, next) => {
  if (req.session.user) {
    res.redirect('/game/prepare')
  } else {
    const [message] = await req.consumeFlash('authInfo');
    res.render('auth/CheckAccountView', {
      title: 'The Quiz Game - guest',
      message,
    })
  }
}

module.exports.getSignUp = async (req, res, next) => {
  const [message] = await req.consumeFlash('authInfo');
  res.render('auth/SignUpView.js', {
    title: 'The Quiz Game - sign up',
    message,
    inputValues: { name: '', email: '', password: '', confirmpassword: '' },
  })
}

module.exports.getConfirmSignUp = async (req, res, next) => {
  const { signUpToken } = req.params;
  const confirmedUser = await User.findOneAndUpdate({ signUpToken, signUpTokenExpiration: { $gt: Date.now() } }, { isSignedUp: true, isLoggedIn: true }, { useFindAndModify: false }).exec()
  if (!confirmedUser) {
    req.flash('authInfo', 'Something went wrong, try again or please sign up for a new account.');
    return res.redirect('/auth/signup');
  }
  req.session.user = confirmedUser;
  await req.flash('authInfo', 'Your account created!');
  req.session.save((err) => {
    if (err) console.log(err);
    res.redirect('/');
  })
}

module.exports.postSignUp = async (req, res, next) => {
  let message = [];
  const { name, email, password, confirmpassword } = req.body;
  const isMailInDB = await User.findOne({ email }).exec();
  const isNameInDB = await User.findOne({ name: capitalize(name) }).exec();
  if (isMailInDB || isNameInDB) {
    if (isMailInDB) message = [...message, 'This e-mail address exists in our base. Please Log In using it or Sign Up using another e-mail address'];
    if (isNameInDB) message = [...message, 'User with this name exists in our base. Please chose the other nick-name for more clear score tables'];
    return res.render('auth/SignUpView.js', {
      title: 'The Quiz Game - sign up',
      message: message.join(',  '),
      inputValues: { name, email, password, confirmpassword },
    })
  }
  const salt = await bcrypt.genSalt(12);
  const encryptedPass = await bcrypt.hash(password, salt);
  const signUpToken = await generateToken()

  const userData = {
    name: capitalize(name),
    email,
    password: encryptedPass,
    isSignedUp: false,
    isLoggedIn: false,
    signUpToken,
    signUpTokenExpiration: Date.now() + 3600000,
  }

  if (!req.session.user) {
    const newUser = new User(userData)
    await newUser.save()
    await req.flash('authInfo', 'Please check your mail (also SPAM foldel) and click the link there to confirm your address.');
    req.session.save((err) => {
      if (err) console.log(err);
      res.redirect('/auth/login');
    })
  } else {
    const user = await User.findOneAndUpdate({ _id: req.session.user._id }, userData, { useFindAndModify: false }).exec()
    if (!user) {
      req.session.destroy((err) => {
        if (err) console.log(err);
        return res.redirect('/auth/signup')
      })
    }
    await req.flash('authInfo', 'Please check your mail (also SPAM foldel) and click the link there to confirm your address.');
    res.redirect('/auth/login');
  }
  transporter.sendMail({
    from: '"QUIZ GAME" <test@test.pl>',
    to: email,
    subject: "e-mail address confirmation",
    html: `
    <p> You requested to sign up for a new account in QUIZ GAME using this e-mail address: ${email}</p>
    <p><a href="http://localhost:8000/auth/signup/${signUpToken}">Click this link to confirm</a></p>
    <p>If it\'s someone\'s mistake and you don\'t intend to sign up in QUIZ GAME, just ignore this message, we won\'t use your e-mail address.</p>`,
  })


}

module.exports.getLogIn = async (req, res, next) => {
  const [message] = await req.consumeFlash('authInfo');
  res.render('auth/LogInView.js', {
    title: 'The Quiz Game - log in',
    message,
    inputValues: { email: '' }
  })
}

module.exports.postLogIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec()
  if (!user) {
    await req.flash('authInfo', 'We don\'t have this e-mail address in the base. Type a correct one or Sign Up for a new account.');
    return res.redirect('/auth/login');
  } else {
    if (!user.isSignedUp) {
      await req.flash('authInfo', 'This account\'s e-mail address is not confirmed. Please check your mail (also SPAM foldel) and click the link there to confirm your address.');
      return res.redirect('/auth/login');
    }
  }
  const isPassMatching = await bcrypt.compare(password, user.password);
  if (isPassMatching) {
    const newLoggedUser = await User.findOneAndUpdate({ email }, {
      isLoggedIn: true,
    }, { useFindAndModify: false }).exec()
    req.session.user = newLoggedUser;
    req.session.save(async (err) => {
      if (err) console.log(err)
      await req.flash('authInfo', 'Successfully logged in.');
      res.redirect('/')
    })
  } else {
    await req.flash('authInfo', 'Wrong password ... Try again or reset password or Sign Up for a new account.');
    res.redirect('/auth/login')
  }
}

module.exports.getLogOut = async (req, res, next) => {
  await User.findOneAndUpdate({ _id: req.session.user._id }, {
    isLoggedIn: false,
  }, { useFindAndModify: false }).exec()
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect('/')
  })
}