const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const quitIfSignedUp = require('../middlewares/quitIfSignedUp');


router.get('/', authController.getCheckAccount);

router.get('/signup/:signUpToken', quitIfSignedUp, authController.getConfirmSignUp);

router.get('/signup', quitIfSignedUp, authController.getSignUp);

router.post('/signup', authController.postSignUp);

router.get('/login', authController.getLogIn);

router.post('/login', authController.postLogIn);

router.get('/logout', authController.getLogOut);

module.exports = router;

