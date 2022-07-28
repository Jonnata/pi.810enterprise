const Joi = require('joi');
 
const validandoCadastroSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            'alphanum': 'O campo username deve conter apenas letras e números',
            'string.min': 'O campo username deve ter no mínimo 3 caracteres',
            'string.max': 'O campo username deve ter no máximo 30 caracteres',
            'any.required': 'O campo username é obrigatório',
        }),
 
    password: Joi.string()
        .pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$'))
        .required()
        .messages({
            'string.pattern.base': 'O campo password deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial',
            'any.required': 'O campo password é obrigatório',
        }),
 
    nascimento: Joi.number()
        .integer()
        .min(1900)
        .max(31-12-2002)
        .required()
        .messages({
            'number.integer': 'O campo nascimento deve ser um número inteiro',
            'number.min': 'O campo nascimento deve ser no mínimo 01/01/1900',
            'number.max': 'O campo nascimento deve ser no máximo 31/12/2002',
            'any.required': 'O campo nascimento é obrigatório',
        }),
 
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'O campo email deve ser um email válido',
            'string.min': 'O campo email deve ter no mínimo 2 domínios',
            'any.required': 'O campo email é obrigatório',
        }),
})
 
module.exports = validandoCadastroSchema