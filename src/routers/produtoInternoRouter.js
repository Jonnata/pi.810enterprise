var express = require('express');
var router = express.Router();

const produtoInternoController = require('../controllers/produtoInternoController');


router.get('/produtointerno', produtoInternoController.renderProdutoInterno);
// router.get('/edit',produtoInternoController.edit )
// router.post('/edit', produtoInternoController.edit)
// router.get('/create',produtoInternoController.create )
// router.post('/create', produtoInternoController.create)


module.exports = router;