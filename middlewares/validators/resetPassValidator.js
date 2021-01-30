const { body } = require('express-validator');

module.exports = [
  body('email', 'Use a valid e-mail address format')
  .normalizeEmail()
  .trim()
  .isEmail(),
 ]