module.exports = (req, res, next) => {
  const checkedSession = req.session.user || {};
  if (checkedSession.isSignedUp) res.redirect('/');
  else next();
};
