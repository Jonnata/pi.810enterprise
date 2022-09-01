const { Produtos } = require('../database/models');
const createProductSchema = require('../Schemas/createProductSchema');




const produtoInternoController = {
  renderProdutoInterno: (req, res) => {
    
    const { id } = req.params;
    Produtos.findByPk(id).then(produto => {
      res.render('produtoInterno', { produto: produto })
    })
  }
}
//   renderCreateProduct: (req,res)=> {
//   res.render('productToCreate')
// },
//   createProduct: async (req, res) => {
//     const { nome, preco, categoria, descricao } = req.body

//     const produto = Produtos.findOne({ where: { nome } });

//     const { error } = createProductSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário

//     if (error) {
//       return res.render('productToCreate', { errors: error.details });
//     }
//     const { filename } = req.file;

//     const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

//     if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
//       return res.render('productToCreate', { createProductError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
//     }

//       const body = {
//         nome,
//         preco,
//         categoria,
//         descricao,
//         imagem: filename,
//       }

//       const newProduct = await Produtos.create(body)

//       .then(() => {
//         res.redirect('/produtos');
//       })
//       .catch(error => res.render('productToCreate', { errors: error.errors}));
//   },
//   editProduct: (req, res) => {
//     const productId = req.params.id;

//     Produtos.findByPk(productId)
//       .then(produto => {
//         res.render('productToEdit', { produto })
//       })
//       .catch(error => res.send(error))
//   }








module.exports = produtoInternoController;