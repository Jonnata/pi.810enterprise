const Joi = require('joi');
 
const validandoCadastroSchema = Joi.object({
    username: Joi.string()
        .required() 
        .alphanum()
        .min(3)
        .max(30)
        .messages({
            'string.alphanum': 'O Primeiro Nome deve ser alfanumérico',
            'alphanum': 'O campo PRIMEIRO NOME deve conter apenas letras e números',
            'string.empty': 'O campo PRIMEIRO NOME é obrigatório',
            'string.min': 'O campo PRIMEIRO NOME deve ter no mínimo 3 caracteres',
            'string.max': 'O campo PRIMEIRO NOME deve ter no máximo 30 caracteres',
        }),
 
    password: Joi.string()
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
        .required()
        .messages({
            'string.empty': 'O campo SENHA é obrigatório',
            'string.pattern.base': 'O campo SENHA deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial',
            'any.required': 'O campo SENHA é obrigatório',
        }),
 
    date: Joi.date()
        .required() 
        .max('2005-01-01')
        .min('1900-01-01')
        .messages({
            'date.base': 'O campo DATA DE NASCIMENTO é obrigatório',
            'date.max': 'O campo nascimento deve ser menor ou igual a 2005-01-01',
            'date.min': 'O campo nascimento deve ser maior ou igual a 1900-01-01',
        }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
        .required()
        .pattern(new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'))
        .messages({
            'string.empty': 'O campo EMAIL é obrigatório',
            'string.email': 'O campo email deve ser um email válido',
            'string.min': 'O campo email deve ter no mínimo 2 domínios',
            'any.required': 'O campo email é obrigatório',
        }),

    image: Joi.string()
        .required()
        .messages({
            'string.empty': 'A foto do perfil é obrigatória',
            'any.required': 'A foto do perfil é obrigatória',
        })

})
 
module.exports = validandoCadastroSchema