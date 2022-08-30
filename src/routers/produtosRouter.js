var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController');
const multerConfigProduct = require('../utils/multerConfigProduct');

router.get('/produtos', produtosController.list);
router.get('/produtos/details/:id', produtosController.details);

router.get('/produtos/add', produtosController.add)
router.post('/produtos/create', multerConfigProduct.single('image'), produtosController.create);

module.exports = router;
