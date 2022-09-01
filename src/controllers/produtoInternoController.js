const { Produtos } = require('../database/models');
const createProductSchema = require('../Schemas/createProductSchema');



const produtoInternoController = {
  renderProdutoInterno: (req, res) => {
    
    const { id } = req.params;
    Produtos.findByPk(id).then(produto => {
      res.render('produtoInterno', { produto: produto })
    })
  },
  renderCreateProduct: (req,res)=> {
      res.render('productToCreate')
},
  createProduct: async (req, res) => {
  const { nome, preco, categoria, descricao } = req.body;
  const produto = Produtos.findOne({ where: { nome } });

const { error } = createProductSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário

if (error) {
  return res.render('productToCreate', { errors: error.details });
}
const { filename } = req.file

const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
  return res.render('productToCreate', { createProductError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
}
  Produtos.create({
    nome, 
    preco,
    categoria,
    descricao,
    imagem: filename
  }).then(response=> {
    res.redirect('/produtos');
  }).catch(error => console.log(error));
},
editProduct: (req, res) => {
  const productId = req.params.id;

  Produtos.findByPk(productId)
    .then(produto => {
      res.render('productToEdit', { produto })
    })
    .catch(error => res.send(error))
  },
  updateProduct: (req,res) => {
    const productId = req.params.id;
    const { nome, preco, categoria, descricao} = req.body;
    const { filename } = req.file;

    const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

    if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
    return res.render('productToCreate', { createProductError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
}

    Produtos.update({
      nome,
      preco,
      categoria,
      descricao,
      imagem: filename
      }, {
      where: { id: productId }
    })
      .then(response => {
        return res.redirect('/produtos')
      })
      .catch(error => res.send(error))
  },
  deleteProduct: (req, res) => {
    const productId = req.params.id;

    Produtos.findByPk(productId)
      .then(produto => {
        res.render('productToDelete', { produto })
      })
      .catch(error => res.send(error))
  },
  destroyProduct: (req,res) => {
    const productId = req.params.id;
    Produtos
        .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/produtos')})
        .catch(error => res.send(error)) 
  }
}



module.exports = produtoInternoController;