const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/prepare', gameController.postGuestGame);

router.get('/prepare', gameController.getPrepareGame);

router.get('/play', gameController.getPlayGame);

router.post('/play', gameController.postPlayGameAnswer);

router.get('/finish', gameController.getFinishGame);

module.exports = router;