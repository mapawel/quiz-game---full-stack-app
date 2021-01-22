const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.getCheckAccount);

router.get('/signon', authController.getSignOn);

router.post('/signon', authController.postSignOn);

router.get('/login', authController.getLogIn);

router.post('/login', authController.postLogIn);

router.get('/logout', authController.getLogOut);

module.exports = router;

