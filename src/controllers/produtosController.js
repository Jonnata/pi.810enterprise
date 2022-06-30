const fs = require("fs");
const path = require("path");
const getInfoDatabase = require("../utils/getInfoDatabase");

const produtos = getInfoDatabase("produtos");
const pathProdutosJSON = path.join(
    __dirname,
    "..",
    "database",
    "produtos.json"
  );

const produtosController = {
    renderProdutos: (req, res) => {
        res.render('produtos', { produtos });
        }
    }

    module.exports = produtosController;