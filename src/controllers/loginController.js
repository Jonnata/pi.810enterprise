const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const loginController = {
    renderLogin: (req, res) => {
        res.render('login');
        },
    
    loginUser: (req, res) => {
    const { email, password } = req.body;

    const user = Users.findOne({ where: { email } })
    
    .then(user => {

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render('login', {
          loginError: 'Usuário ou senha incorretos!'
        });
      }

      if (bcrypt.compareSync(password, user.password)) {
        res.cookie('user', JSON.stringify({ id: user.id, name: user.name, email: user.email }));

        res.redirect('/');
      }

      res.render('login');
    }).catch(error => console.log(error));
  },
  
  logoutUser: (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
  },
    
}

    module.exports = loginController;