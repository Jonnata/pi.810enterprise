const { Users } = require('../database/models');

function checkCookies(req, res, next) {
  const username = req.cookies.user || req.session.username; 

  if (Boolean(username)) {
    const userFound = Users.findOne({ where: { username } });
    req.user = userFound
  }

  return next()
}

module.exports = checkCookies