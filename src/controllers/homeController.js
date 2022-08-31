const homeController = {
    renderHome: (req, res) => {
        const userJSON = JSON.parse(req.cookies.user); // transforma o cookie em um objeto
        res.render('home', { user: userJSON }); // renderiza a página home com o usuário logado
        }
    }

    module.exports = homeController;