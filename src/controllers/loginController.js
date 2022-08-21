const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const loginController = {
    renderLogin: (req, res) => {
        res.render('login');
        },
    
    loginUser: (req, res) => {
    const { email, password } = req.body;

    Users.findOne({ email: email,}).then(user => {

      if (!email) {
        //alert('User does not exist')
        res.redirect('/cadastro');
      }

      if (bcrypt.compareSync(password, user.password)) {
        res.cookie('user', JSON.stringify({ id: user.id, name: user.name, type: user.type }));

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