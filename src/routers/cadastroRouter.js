const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();

router.get('/cadastro', cadastroController.renderCadastro);
router.post('/cadastro', cadastroController.create)


module.exports = router;
