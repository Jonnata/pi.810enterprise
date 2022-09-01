const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const multerConfig = require('../utils/multerConfig')

router.get('/cadastro', cadastroController.renderCadastro);

router.post('/cadastro', multerConfig.single('image'), cadastroController.createUser);

module.exports = router;
