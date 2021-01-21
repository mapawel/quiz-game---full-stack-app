const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const canPlayMiddleware = require('../middlewares/canPlay');

router.post('/prepare', gameController.postGuestGame);

router.get('/prepare', gameController.getPrepareGame);

router.get('/play', canPlayMiddleware, gameController.getPlayGame);

router.post('/play', gameController.postPlayGameAnswer);

router.get('/finish', gameController.getFinishGame);

module.exports = router;