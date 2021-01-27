const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController');

router.get('/', rootController.getStart);

router.get('/results', rootController.getResults);

router.get('/mystat', rootController.getMyStat);

module.exports = router;

