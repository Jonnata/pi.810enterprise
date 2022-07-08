var express = require('express');
var router = express.Router();
const painelUsuarioController = require('../controllers/painelUsuarioController')

router.get('/painelUsuario', painelUsuarioController.renderPainelUsuario);

module.exports = router;
