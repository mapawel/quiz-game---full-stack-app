const express = require('express');
const router = express.Router();
const multer  = require('multer');
const loggedController = require('../controllers/loggedController');
const quitIfNotLogged = require('../middlewares/quitIfNotLogged');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}.${file.originalname.split('.')[1]}`)
  }
})
const upload = multer({ storage });

router.all('*', quitIfNotLogged);

router.get('/settings', loggedController.getSettings);

router.post('/dataupdate', upload.single('avatarChange'), loggedController.postDataUpdate, loggedController.changeAvatar, loggedController.updateMessage);

router.get('/changemail/:changMailToken', loggedController.getChangeMailToken);

router.get('/removeavatar', loggedController.changeAvatar, loggedController.updateMessage);

router.post('/changepassword', loggedController.postChangePassword, loggedController.updateMessage);

router.get('/removeaccount', loggedController.getRemoveAccount);

router.post('/removeaccount', loggedController.postRemoveAccount);

router.get('/mystat', loggedController.getMyStat);

module.exports = router;

