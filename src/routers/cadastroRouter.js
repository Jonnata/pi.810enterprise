const express = require('express');
const cadastroController = require('../controllers/cadastroController')
const router = express.Router();
const validandoCadastroSchema = require('../Schemas/validandoCadastroSchema')

const validationMiddleware = (request, response, next) => {
    const { error } = validandoCadastroSchema.validate(request.body)
    const valid = error == null; 
   
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
   
      console.log("error", message); 
      response.status(422).json({ error: message })
    } 
  }

router.get('/cadastro', cadastroController.renderCadastro);
router.post('/cadastro', validationMiddleware,cadastroController.create)


module.exports = router;
