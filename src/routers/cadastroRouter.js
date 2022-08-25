const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const fileUpload = require('../utils/fileUpload');

router.get('/cadastro', cadastroController.renderCadastro);

router.post('/cadastro', fileUpload.single('image'), cadastroController.createUser);


module.exports = router;
