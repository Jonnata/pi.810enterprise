var express = require('express');
var router = express.Router();
//const multerConfigCadastroUser = require('')
const produtosController = require('../controllers/produtosController');


router.get('/produtos', produtosController.renderListAllProdutos);

module.exports = router;
