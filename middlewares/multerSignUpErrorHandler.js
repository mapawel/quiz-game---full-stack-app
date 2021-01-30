const multer = require('multer');

module.exports = (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    req.multerError = 'Avatar file too big: 300KM max allowed'
  } else if (error.type === 'multer-format') {
    req.multerError = 'Avatar file has to be an image'
  }
  next()
}