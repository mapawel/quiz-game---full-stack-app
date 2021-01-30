const { body } = require('express-validator');

module.exports = [
  body('name')
  .trim()
  .isString()
  .withMessage('Name: type in a nick-name...')
  .isLength({ min: 3, max: 12})
  .withMessage('Name: type in more than 2 signs, no more than 12.'),
  body('email', 'Use a valid e-mail address format')
  .normalizeEmail()
  .trim()
  .isEmail(),
  body('password')
  .trim()
  .notEmpty()
  .withMessage('Type in a password')
  .custom((value) => {
    const passwordScheme = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if (passwordScheme.test(value)) return true
    else throw new Error('Password has to contain at least: 1 lowercase chaacter, 1 uppercase character, 1 numeric character, 1 special character and has to be at least 6 characters long')
  }),
  body('confirmpassword')
  .trim()
  .notEmpty()
  .withMessage('Confirm password...')
  .custom((value, {req}) => {
    if (value !== req.body.password) throw new Error('Password confirmation is not the same as a password')
    return true
  }),
]