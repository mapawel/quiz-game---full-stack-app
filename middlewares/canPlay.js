module.exports = (req, res, next) => {
  if (req.session.currentGame.canplay) next();
  else if (!req.session.currentGame.canplay && req.session.currentGame.gameStartTime) res.redirect('/game/finish?finished=true');
  else res.redirect('/');
}