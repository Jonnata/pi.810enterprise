var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController');
const multerConfigProduct = require('../utils/multerConfigProduct');
const verifyIfUserIsLoggedIn = require('../middlewares/verifyIfUserIsLoggedIn')

router.get('/produtos', verifyIfUserIsLoggedIn, produtosController.renderListAllProdutos);


module.exports = router;
