var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController');
const multerConfigProduct = require('../utils/multerConfigProduct');

router.get('/produtos', produtosController.renderListAllProdutos);


module.exports = router;
