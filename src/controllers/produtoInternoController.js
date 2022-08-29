const { Produtos } = require('../database/models')
const createProductSchema = require('../Schemas/createProductSchema')
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const multerConfig = require('../utils/multerConfig');


const produtoInternoController = {
    renderProdutoInterno: (req, res) => {
        res.render('produtoInterno');
        },
    edit: (req, res) => {
        res.render('productToEdit');
      },
    create: async (req, res) => {
      const { nome, preco, categoria, descricao} = req.body
      
      const produto = Produtos.findByPk(req.params.id);
      
      const { error } = createProductSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário
      
      if (error) {
        return res.render('productToCreate', { errors: error.details });
      }
      const { filename } = req.file;
      
      const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

      if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
        return res.render('productToCreate', { extensionError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
      }

        const body = {
          nome,
          preco,
          categoria,
          image: filename,
          descricao,
        }
  
        const newProduct = await Produtos.create(body)
        
        .then(() => {
          res.redirect('produtos');
        })
        .catch(error => res.render('productToCreate', { errors: error.errors}));
      
    }
    }

    module.exports = produtoInternoController;