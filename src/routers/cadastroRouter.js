const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const multerConfigCadastroUser = require('../utils/multerConfigCadastroUser')

router.get('/cadastro', cadastroController.renderCadastro);

router.post('/cadastro', 
multerConfigCadastroUser.single('image'),
cadastroController.createUser);


module.exports = router;
