var express = require('express');
var router = express.Router();
const cadastroController = require('../controllers/cadastroController')

router.get('/cadastro', cadastroController.renderCadastro);

module.exports = router;
