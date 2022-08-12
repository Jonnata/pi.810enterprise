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
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
        .required()
        .messages({
            'string.pattern.base': 'O campo password deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial',
            'any.required': 'O campo password é obrigatório',
        }),
 
    date: Joi.date()
        .max('2005-01-01')
        .min('1900-01-01')
        .iso()
        .required()
        .messages({
            'date.max': 'O campo nascimento deve ser menor ou igual a 2005-01-01',
            'date.min': 'O campo nascimento deve ser maior ou igual a 1900-01-01',
            'date.iso': 'O campo nascimento deve ser uma data válida',
            'any.required': 'O campo nascimento é obrigatório',
        }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
        .required()
        .pattern(new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'))
        .messages({
            'string.email': 'O campo email deve ser um email válido',
            'string.min': 'O campo email deve ter no mínimo 2 domínios',
            'any.required': 'O campo email é obrigatório',
        }),
})
 
module.exports = validandoCadastroSchema