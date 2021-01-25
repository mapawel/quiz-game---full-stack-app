const express = require('express');
const router = express.Router();
const multer  = require('multer');
const loggedController = require('../controllers/loggedController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}.${file.originalname.split('.')[1]}`)
  }
})
const upload = multer({ storage });

router.get('/settings', loggedController.getSettings);

router.post('/dataupdate', upload.single('avatarChange'), loggedController.postDataUpdate, loggedController.changeAvatar, loggedController.updateMessage);

router.get('/changemail/:changMailToken', loggedController.getChangeMailToken);

router.get('/removeavatar', loggedController.changeAvatar, loggedController.updateMessage);

router.post('/changepassword', loggedController.getChangePassword);

router.get('/removeaccount', loggedController.getRemoveAccount);

module.exports = router;

