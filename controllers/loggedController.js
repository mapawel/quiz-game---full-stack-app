const dotenv = require('dotenv').config();
const fs = require('fs');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { capitalize } = require('../helpers/capitalize');
const { generateToken } = require('../helpers/generateToken');
const { validateUnique } = require('../helpers/validateUnique');
const nodemailer = require('nodemailer');


if (dotenv.error) {
  throw dotenv.error
  console.log(dotenv.error)
}


let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
})



module.exports.getSettings = async (req, res, next) => {
  const [message = []] = await req.consumeFlash('authInfo');
  const { name, email } = await User.findById(req.session.user._id).exec()
  res.render('logged/settingsview', {
    title: 'The Quiz Game - settings',
    inputValues: {
      name,
      email,
    },
    message: message.join(','),
  })
}

module.exports.getChangeMailToken = async (req, res, next) => {
  let message = [];
  const { changMailToken } = req.params;
  const updatingUser = await User.findOne({ _id: req.session.user._id, changMailToken, changMailTokenExpiration: { $gt: Date.now() } }).exec();
  if (!updatingUser) {
    message = ['-> Somethig wrong - try again']
  } else {
    const updatedUser = await User.findOneAndUpdate({ _id: updatingUser._id }, {
      email: updatingUser.newEmail,
      changMailToken: null,
      changMailTokenExpiration: null,
    }, { useFindAndModify: false }).exec();
    message = ['-> e-mail address updated']
  }

  await req.flash('authInfo', message);
  res.redirect('/logged/settings')
}



module.exports.postDataUpdate = async (req, res, next) => {
  const { name, email } = req.body;
  let updatedUser;
  req.message = [];
  req.avatarChanged = req.file ? req.file.path : null;
  req.updatingUser = await User.findById(req.session.user._id).exec()

  if (capitalize(name) != req.updatingUser.name) {
    if (!(await validateUnique('name', capitalize(name)))) {
      req.message = [...req.message, `"${name}" exists in the base - please choose the other name`];
    } else {
      updatedUser = await User.findOneAndUpdate({ _id: req.updatingUser._id }, {
        name: capitalize(name),
      }, { useFindAndModify: false }).exec();
      req.message = [...req.message, ' -> Your name updated'];
    }
  }

  if (email !== req.updatingUser.email) {
    if (!(await validateUnique('email', email))) {
      req.message = [...req.message, `"${email}" exists in the base - please choose the other e-mail`];
    } else {
      const changMailToken = await generateToken();
      updatedUser = await User.findOneAndUpdate({ _id: req.updatingUser._id }, {
        changMailToken,
        changMailTokenExpiration: Date.now() + 3600000,
        newEmail: email,
      }, { useFindAndModify: false }).exec();
      req.message = [...req.message, ' -> To compleat e-mail change please confirm it via your new e-mail (check also SPAM folder)']
      transporter.sendMail({
        from: '"QUIZ GAME" <test@test.pl>',
        to: email,
        subject: "e-mail change confirmation",
        html: `
      <p> You requested to change an e-mail address in QUIZ GAME to: ${email}</p>
      <p><a href="http://localhost:8000/logged/changemail/${changMailToken}">Click this link to confirm</a></p>
      <p>If it\'s someone\'s mistake and you don\'t intend it, just ignore this req.message, we won\'t use your e-mail address.</p>`,
      })
    }
  }
  next()
}


module.exports.changeAvatar = async (req, res, next) => {
  const deleteAvatar = (link) => fs.unlink(link, (err) => {
    if (err) console.log(err)
  });

  if (req.avatarChanged) {
    if (req.updatingUser.avatar) deleteAvatar(req.updatingUser.avatar);
    await User.findOneAndUpdate({ _id: req.updatingUser._id }, {
      avatar: req.avatarChanged,
    }, { useFindAndModify: false }).exec();
    req.message = [...req.message, ' -> Your avatar updated'];
  }
  if (req.query.delete && req.session.user.avatar) {
    const updatedUser = await User.findOneAndUpdate({ _id: req.session.user._id }, {
      avatar: null,
    }, { useFindAndModify: false }).exec();
    req.message = [' -> Your avatar REMOVED'];
    deleteAvatar(updatedUser.avatar)
  }
  next()
}


module.exports.postChangePassword = async (req, res, next) => {
  const { oldpassword, password, confirmpassword } = req.body;
  const isPassMatching = await bcrypt.compare(oldpassword, req.session.user.password);
  if (isPassMatching) {
    const salt = await bcrypt.genSalt(12);
    const encryptedPass = await bcrypt.hash(password, salt);
    await User.findOneAndUpdate({ _id: req.session.user._id }, {
      password: encryptedPass,
    }, { useFindAndModify: false }).exec()
    req.message = ['Your password changed'];
  } else {
    req.message = ['Your current password incorect!'];
  };
  next();
}

module.exports.updateMessage = async (req, res, next) => {
  req.message = req.message || []
  if (req.message.length === 0) req.message = ['No changes']
  await req.flash('authInfo', req.message);
  req.session.save((err) => {
    if (err) console.log(err)
    res.redirect('/logged/settings')
  })
}

module.exports.getRemoveAccount = async (req, res, next) => {
  const { name, email } = req.session.user;
  res.render('logged/settingsview', {
    title: 'The Quiz Game - settings',
    inputValues: {
      name,
      email,
    },
    deleteConfirmForm: true,
    message: 'Confirm below by password to delete this account',
  })
}

module.exports.postRemoveAccount = async (req, res, next) => {
  const { name, email } = req.session.user;
  const { password } = req.body;
  const isPassMatching = await bcrypt.compare(password, req.session.user.password);
  if (isPassMatching) {
    await User.findOneAndDelete({ _id: req.session.user._id })
    req.session.user = null;
    await req.flash('authInfo', 'Account deleted, good bye...');
    req.session.save((err) => {
      if (err) console.log(err);
      res.redirect('/')
    })
  } else {
    res.render('logged/settingsview', {
      title: 'The Quiz Game - settings',
      inputValues: {
        name,
        email,
      },
      deleteConfirmForm: true,
      message: 'Password incorrect - try again',
    })
  }
}

module.exports.getMyStat = async (req, res, next) => {
  console.log('go')
}
