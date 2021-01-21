const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController');

router.get('/', rootController.getStart);

router.get('/results', rootController.getResults);

module.exports = router;

