module.exports = (req, res, next) => {
  const checkedSession = req.session.user || {};
  if (checkedSession.isLoggedIn) res.redirect('/');
  else next();
};
