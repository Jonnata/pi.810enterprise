var express = require('express');
var router = express.Router();

const produtoInternoController = require('../controllers/produtoInternoController');


router.get('/produtointerno', produtoInternoController.renderProdutoInterno);

module.exports = router;