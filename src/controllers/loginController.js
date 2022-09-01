const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const loginController = {
    renderLogin: (req, res) => {
        res.render('login');
        },
    
    loginUser: (req, res) => {
    const { email, password, remember } = req.body;
    const toRemember = Boolean(remember)

    const user = Users.findOne({ where: { email } })
    
    .then(user => {

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render('login', {
          loginError: 'Usuário ou senha incorretos!'
        });
      }

      if (toRemember || !toRemember) {
        res.cookie('user', JSON.stringify({ 
          id: user.id, 
          username: user.username, 
          email: user.email,
          image: user.image
        }), { maxAge: 1000 * 60 * 60 * 24 * 7 }); // se o usuário marcar para manter logado, o cookie fica ativo por 7 dias

        res.render('home', { user });
      }

      res.render('login');
    }).catch(error => console.log(error));
  },
    
}

    module.exports = loginController;