const models = require('../database/models');
const Users = models.Users;

function cookie(req, res, next) {
  const cookies = req.cookies.remember;
  let userIsLoggedBySession = req.session.user

  if (Boolean(cookies) || Boolean(userIsLoggedBySession)) {
    const userFound = Users.findO(user => user.email === cookies || user.email === userIsLoggedBySession);
    userIsLoggedBySession = userFound
    req.user = userIsLoggedBySession
  }

  return next()
}

module.exports = cookie