const produtoInternoController = {
    renderProdutoInterno: (req, res) => {
        res.render('produtoInterno', { title: 'produto' });
        }
    }

    module.exports = produtoInternoController;