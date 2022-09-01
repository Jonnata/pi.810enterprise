var express = require('express');
var router = express.Router();

const produtoInternoController = require('../controllers/produtoInternoController');
const multerConfigProduct = require('../utils/multerConfigProduct');




router.get('/produtoInterno/:id', produtoInternoController.renderProdutoInterno);
// router.get('/productToCreate', produtoInternoController.renderCreateProduct );
// router.post('/productToCreate', multerConfigProduct.single("imagem"), produtoInternoController.createProduct);
// router.get('/productToEdit', produtoInternoController.editProduct )


module.exports = router;