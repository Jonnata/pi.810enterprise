const { Produtos, Users} = require('../database/models')
const createProductSchema = require('../Schemas/createProductSchema')
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

const produtosController = {
<<<<<<< HEAD
  list: (req, res) => {
    Produtos.findAll({
      include: {
        model: Users,
        attributes: ['username', 'id', 'email']
      },
      where: {
        user_id: user.id
      }
    })
      .then(produtos => {
        res.render('produtos', {produtos})
      })
      .catch(error => console.log(error));
    
},
  details: (req,res)=> {
    const {id} = req.params;
    Produtos.findByPk(id)
        .then(produto=>{
          res.render('produtoInterno', {produtos})
        })
  },
  add: (req,res)=> {
    res.render('productToCreate')
  },
  create: (req,res)=>{
    console.log(req.body)
    const { nome, preco, categoria, descricao } = req.body;
  
    const { error } = createProductSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário
            
    if (error) {
      return res.render('productToCreate', { errors: error.details });
    }
    const { filename } = req.file;
    
    const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

    if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
      return res.render('productToCreate', { extensionError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
=======
    renderProdutos: (req, res) => {
        res.render('produtos', { produtos });
        },

    adicionarProduto: (req, res) => {
        const { nome, descricao, preco } = req.body;
        const novoProduto = {
            id: produtos.length + 1,
            nome,
            descricao,
            preco
        };
        produtos.push(novoProduto);
        fs.writeFileSync(pathProdutosJSON, JSON.stringify(produtos));
        res.redirect("/produtos");
    },

>>>>>>> 5f7fc2c771279a1ccf5ee3fd8eaf5cd9c2600933
    }

    Produtos.create({
      nome,
      preco,
      categoria,
      descricao,
      imagem: filename,
    }).then(()=> {
      return res.redirect('/produtos')
    }).catch(error => res.send(error))
  },
}
  

    module.exports = produtosController;