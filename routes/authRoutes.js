const express = require('express');
const router = express.Router();
const multer  = require('multer');
const authController = require('../controllers/authController');
const quitIfSignedUp = require('../middlewares/quitIfSignedUp');
const quitIfNotLoggedIn = require('../middlewares/quitIfNotLogged');
const quitIfLoggedIn = require('../middlewares/quitIfLogged');
const logInValidator = require('../middlewares/validators/logInValidator');
const signUpValidator = require('../middlewares/validators/signUpValidator');
const resetPassValidator = require('../middlewares/validators/resetPassValidator');
const newPassValidator = require('../middlewares/validators/newPassValidator');
const multerSignUpErrorHandler = require('../middlewares/multerSignUpErrorHandler');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}.${file.originalname.split('.')[1]}`)
  }
})


const fileFilter = (req, file, cb) => {
  const [fileType] = file.mimetype.split('/')
  if (fileType !== 'image') {
    const error = new Error('Wrong avatar file format')
    error.type = 'multer-format'
    cb(error)
  } else {
    cb(null, true)
  }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 308000 } });

router.get('/', authController.getCheckAccount);

router.get('/signup/:signUpToken', quitIfSignedUp, authController.getConfirmSignUp);

router.get('/signup', quitIfSignedUp, authController.getSignUp);

router.post('/signup', quitIfSignedUp, upload.single('avatar'), multerSignUpErrorHandler, signUpValidator, authController.postSignUp);

router.get('/login', quitIfLoggedIn, authController.getLogIn);

router.post('/login', quitIfLoggedIn, logInValidator, authController.postLogIn);

router.get('/logout', quitIfNotLoggedIn, authController.getLogOut);

router.get('/resetpass/:resetToken', authController.getResetPassConfirm);

router.get('/resetpass', authController.getResetPass);

router.post('/resetpass', resetPassValidator, authController.postResetPass);

router.post('/newpass', newPassValidator, authController.postNewPass);

module.exports = router;

