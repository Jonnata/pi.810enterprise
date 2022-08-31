const fs = require("fs");
const path = require("path");
const database = require('../database/models');
//const getInfoDatabase = require("../utils/getInfoDatabase");

/*const produtos = getInfoDatabase("produtos");
const pathProdutosJSON = path.join(
    __dirname,
    "..",
    "database",
    "produtos.json"
  );*/

const produtosController = {
    renderListAllProdutos: (req, res) => {
        const userJSON = JSON.parse(req.cookies.user); // transforma o cookie em um objeto

        database.Produtos.findAll().then(produtos => {
          res.render('produtos', { user: userJSON, produtos: produtos }); 
        })
    },
}
  

    module.exports = produtosController;