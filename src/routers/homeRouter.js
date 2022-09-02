var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController')
const verifyIfUserIsLoggedIn = require('../middlewares/verifyIfUserIsLoggedIn')

//router.use(verifyIfUserIsLoggedIn)
router.get('/', verifyIfUserIsLoggedIn, homeController.renderHome)
router.get('/home',verifyIfUserIsLoggedIn, homeController.renderHome)

module.exports = router;
