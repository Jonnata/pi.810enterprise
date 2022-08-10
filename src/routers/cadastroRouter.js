const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const validandoCadastroMiddleare = require('../middlewares/validandoCadastroMiddleare')

router.get('/cadastro', cadastroController.renderCadastro);
router.post('/cadastro', validandoCadastroMiddleare,cadastroController.create)


module.exports = router;
