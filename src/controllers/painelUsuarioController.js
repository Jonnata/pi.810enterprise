const db = require('../database/models');
const path = require('path');

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
        //const idJSON = JSON.parse(req.cookies.user).id
        //console.log(idJSON);
        const userJSON = JSON.parse(req.cookies.user);
        res.render('certezaDeletarConta', { user: userJSON });
        },

    deletarContaDoUsuario:  (req, res) => {
        db.Users
        .destroy({
            where: {
                id: req.params.id
            },
            force: true
        }).then(() => {
            return res.redirect('/cadastro');
        }).catch(error => res.send(error))
        }
    }

    module.exports = painelUsuarioController;