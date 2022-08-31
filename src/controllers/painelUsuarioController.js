const database = require('../database/models');

const painelUsuarioController = {
    renderPainelUsuario: (req, res) => {
        const userJSON = JSON.parse(req.cookies.user);
        res.render('painelUsuario', { user: userJSON });
        }
    }

    module.exports = painelUsuarioController;