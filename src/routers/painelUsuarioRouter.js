var express = require('express');
var router = express.Router();
const painelUsuarioController = require('../controllers/painelUsuarioController')

router.get('/painelUsuario', painelUsuarioController.renderPainelUsuario);

router.get('/meuCadastro', painelUsuarioController.renderMeuCadastro);
//router.get('/meuCadastro/:id', painelUsuarioController.editMeuCadastro);

router.put('/meuCadastro/:id', painelUsuarioController.updateCadastroUsuario);

router.get('/deleteUser', painelUsuarioController.viewDeletarConta);
router.delete('/deleteUser/:id', painelUsuarioController.deletarContaDoUsuario);

module.exports = router;
