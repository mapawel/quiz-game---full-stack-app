const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const quitIfSignedUp = require('../middlewares/quitIfSignedUp');
const quitIfNotSessionUser = require('../middlewares/quitIfNotSessionUser');
const quitIfNotLoggedIn = require('../middlewares/quitIfNotLogged');
const quitIfLoggedIn = require('../middlewares/quitIfLogged');


router.get('/', authController.getCheckAccount);

router.get('/signup/:signUpToken', quitIfSignedUp, authController.getConfirmSignUp);

router.get('/signup', quitIfSignedUp, authController.getSignUp);

router.get('/signuptransfer', quitIfSignedUp, quitIfNotSessionUser, authController.getSignUpTransfer);

router.post('/signup', quitIfSignedUp, authController.postSignUp);

router.get('/login', quitIfLoggedIn, authController.getLogIn);

router.post('/login', quitIfLoggedIn, authController.postLogIn);

router.get('/logout', quitIfNotLoggedIn, authController.getLogOut);

router.get('/resetpass/:resetToken', authController.getResetPassConfirm);

router.get('/resetpass', authController.getResetPass);

router.post('/resetpass', authController.postResetPass);

router.post('/newpass', authController.postNewPass);

module.exports = router;

