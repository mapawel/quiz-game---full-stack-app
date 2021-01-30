const { body } = require('express-validator');

module.exports = [
  body('name')
  .trim()
  .isString()
  .withMessage('Name: type in a nick-name...')
  .isLength({ min: 3, max: 12})
  .withMessage('Name: type in more than 2 signs, no more than 12'),
  body('email', 'Use a valid e-mail address format')
  .normalizeEmail()
  .trim()
  .isEmail(),
]