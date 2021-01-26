const express = require('express');
const router = express.Router();
const multer  = require('multer');
const authController = require('../controllers/authController');
const quitIfSignedUp = require('../middlewares/quitIfSignedUp');
const quitIfNotSessionUser = require('../middlewares/quitIfNotSessionUser');
const quitIfNotLoggedIn = require('../middlewares/quitIfNotLogged');
const quitIfLoggedIn = require('../middlewares/quitIfLogged');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}.${file.originalname.split('.')[1]}`)
  }
})
const upload = multer({ storage });

router.get('/', authController.getCheckAccount);

// router.get('/signup/:signUpToken', quitIfSignedUp, authController.getConfirmSignUp);
router.get('/signup/:signUpToken', authController.getConfirmSignUp);

router.get('/signup', quitIfSignedUp, authController.getSignUp);

router.get('/signuptransfer', quitIfSignedUp, quitIfNotSessionUser, authController.getSignUpTransfer);

router.post('/signup', quitIfSignedUp, upload.single('avatar'), authController.postSignUp);

router.get('/login', quitIfLoggedIn, authController.getLogIn);

router.post('/login', quitIfLoggedIn, authController.postLogIn);

router.get('/logout', quitIfNotLoggedIn, authController.getLogOut);

router.get('/resetpass/:resetToken', authController.getResetPassConfirm);

router.get('/resetpass', authController.getResetPass);

router.post('/resetpass', authController.postResetPass);

router.post('/newpass', authController.postNewPass);

module.exports = router;

