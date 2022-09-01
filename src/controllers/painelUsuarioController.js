const db = require('../database/models');

const Usuarios = db.User;

const painelUsuarioController = {
    renderPainelUsuario: (req, res) => {
        const userJSON = JSON.parse(req.cookies.user); 
        res.render('painelUsuario', { user: userJSON });
        },
        
    renderMeuCadastro: (req, res) => {
        const userJSON = JSON.parse(req.cookies.user);
        res.render('meuCadastro', { user: userJSON });
        },
        
    viewDeletarConta: function (req,res) {
        const idJSON = JSON.parse(req.params.id);
        console.log(idJSON);
            Usuarios
            .findByPk(idJSON)
            .then(User => {
                return res.render('certezaDeletarConta', { user: idJSON });
            })
            .catch(error => res.send(error))
        },

    deletarContaDoUsuario:  function (req, res) {
            let userId = req.params.id; // pega o id do usuário que está na url
            Usuarios
            .destroy({where: {id: userId}, force: true}) // force: true é necessário para usar o destroy
            .then(()=>{
                return res.redirect('/cadastro')})
            .catch(error => res.send(error)) 
        },
    }

    module.exports = painelUsuarioController;