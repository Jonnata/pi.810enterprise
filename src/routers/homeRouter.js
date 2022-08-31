var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController')
const auth = require('../middlewares/auth')


//router.use(verifyIfUserIsLoggedIn)
router.get('/', homeController.renderHome)
router.get('/home', homeController.renderHome)

module.exports = router;
