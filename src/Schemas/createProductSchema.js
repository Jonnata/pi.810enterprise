const Joi = require('joi');

const createProductSchema = Joi.object({
  nome: Joi.string()
  .required()
  .min(3)
  .messages({
    "string.empty": `O nome precisa ser preenchido`,
    "string.min": `O nome precisa ter 3 ou mais caracteres`,
  }),
  preco: Joi.number()
  .required()
  .min(1)
  .messages({
    "number.empty": `O preço precisa ser preenchido`,
    "number.min": `O preço precisa ser maior do que zero`,
    "number.base": `O preço precisa ser um número`,
  }),
  categoria: Joi.string()
  .max(200)
  .required()
  .messages({
    "string.empty": `Você precisa selecionar uma categoria`,
    "string.max": "A categoria deve ter no máximo 200 caracteres"
  }),
  descricao: Joi.string()
  .max(200)
  .required()
  .messages({
    "string.empty": `A descrição precisa ser preenchida`,
    "string.max": `A descrição deve ter no máximo 200 caracteres`,
  }),
  imagem: Joi.string()
  .messages({
            'string.empty': 'A foto do produto é obrigatória',
        }),
})


module.exports = createProductSchema
