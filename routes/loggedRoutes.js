const express = require('express');
const router = express.Router();
const multer = require('multer');
const loggedController = require('../controllers/loggedController');
const quitIfNotLogged = require('../middlewares/quitIfNotLogged');
const changePassValidator = require('../middlewares/validators/changePassValidator');
const dataUpdateValidator = require('../middlewares/validators/dataUpdateValidator');
const multerSettingsErrorHandler = require('../middlewares/multerSettingsErrorHandler');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname.split('.')[0]}${Date.now()}.${file.originalname.split('.')[1]}`)
  }
})

const fileFilter = (req, file, cb) => {
  const [fileType] = file.mimetype.split('/')
  console.log('FILETYPE: ', fileType)
  if (fileType !== 'image') {
    const error = new Error('Wrong avatar file format')
    error.type = 'multer-format'
    console.log(error.type)
    cb(error)
  } else {
    cb(null, true)
  }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 308000 } });

router.all('*', quitIfNotLogged);

router.get('/settings', loggedController.getSettings);

router.post('/dataupdate', upload.single('avatarChange'), multerSettingsErrorHandler, dataUpdateValidator, loggedController.postDataUpdate, loggedController.changeAvatar, loggedController.updateMessage);

router.get('/changemail/:changMailToken', loggedController.getChangeMailToken);

router.get('/removeavatar', loggedController.changeAvatar, loggedController.updateMessage);

router.post('/changepassword', changePassValidator, loggedController.postChangePassword, loggedController.updateMessage);

router.get('/removeaccount', loggedController.getRemoveAccount);

router.post('/removeaccount', loggedController.postRemoveAccount);

module.exports = router;

