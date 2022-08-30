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

    }

    module.exports = produtosController;