const User = require('../models/user');

module.exports.validateUnique = async (key, param) => {
  const notUnique = await User.findOne({ [key]: `${param}` })
  return (notUnique) ? false : true;
};