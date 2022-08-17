const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const validandoCadastroMiddleare = require('../middlewares/validandoCadastroMiddleare')
const cookieMiddleare = require('../middlewares/cookie')

router.use(cookieMiddleare)
router.get('/cadastro', cadastroController.renderCadastro);
router.post('/cadastro', cadastroController.createUser);


module.exports = router;
