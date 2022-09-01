var express = require('express');
var router = express.Router();
const painelUsuarioController = require('../controllers/painelUsuarioController')

router.get('/painelUsuario', painelUsuarioController.renderPainelUsuario);

router.get('/meuCadastro', painelUsuarioController.renderMeuCadastro);
//router.post('/meuCadastro/update/:id', moviesController.update);

router.get('/user/delete/:id', painelUsuarioController.viewDeletarConta);
router.delete('/user/delete/:id', painelUsuarioController.deletarContaDoUsuario);

module.exports = router;
