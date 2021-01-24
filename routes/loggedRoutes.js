const express = require('express');
const router = express.Router();
const loggedController = require('../controllers/loggedController');

router.get('/settings', loggedController.getSettings);

module.exports = router;

