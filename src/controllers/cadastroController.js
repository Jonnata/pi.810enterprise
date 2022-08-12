const { User } = require('../database/models');
const bcrypt = require('bcrypt');


/*const pathUsersJSON = path.join(
  __dirname,
  "..",
  "database",
  "usuarios.json"
);*/

const cadastroController = {
    renderCadastro: (req, res) => {
        res.render('cadastro');
        },
    
    createUser: async (req, res) => {
            const { username, date, email, password } = req.body
            
            
              const user = await User.findOne({ where: { email } });
        
              if (user) {
                return res.status(400).json({ error: 'Usuário já existe!' });
              }
        
              const body = {
                username,
                date,
                email,
                password: bcrypt.hashSync(password, 10)
              }
        
              const newUser = await User.create(body).then(() => {
                res.redirect('/login');
              }).catch(error => res.send(error))
          }
    }

    module.exports = cadastroController;