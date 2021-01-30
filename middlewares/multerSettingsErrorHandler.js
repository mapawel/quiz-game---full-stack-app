const multer = require('multer');

module.exports = async (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    await req.flash('authInfo', ['Avtar file is too big - max 300KB']);
    res.redirect('/logged/settings')
  } else if (error.type === 'multer-format') {
    await req.flash('authInfo', ['Wrong avatar file format: only images allowed']);
    res.redirect('/logged/settings')
  } else {
    next()
  }
}