var express = require('express');
var router = express.Router();

const produtoInternoController = require('../controllers/produtoInternoController');
const multerConfigProduct = require('../utils/multerConfigProduct');




router.get('/produtoInterno/:id', produtoInternoController.renderProdutoInterno);
router.get('/productToCreate', produtoInternoController.renderCreateProduct );
router.post('/productToCreate', multerConfigProduct.single("imagem"), produtoInternoController.createProduct);
router.get('/productToEdit/:id', produtoInternoController.editProduct );
router.put('/productToEdit/:id', multerConfigProduct.single("imagem"), produtoInternoController.updateProduct);
router.get('/productToDelete/:id', produtoInternoController.deleteProduct);
router.post('/productToDelete/:id', produtoInternoController.destroyProduct);

module.exports = router;