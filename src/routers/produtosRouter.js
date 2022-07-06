var express = require('express');
var router = express.Router();
const multerConfig = require("../utils/multerConfig");
const produtosController = require('../controllers/produtosController');


router.get('/produtos', produtosController.renderProdutos);

module.exports = router;
