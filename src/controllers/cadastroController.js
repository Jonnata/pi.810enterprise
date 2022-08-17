const { Users } = require('../database/models');
const bcrypt = require('bcrypt');
const validandoCadastroSchema = require('../Schemas/validandoCadastroSchema');

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
            
            
              const user = await Users.findOne({ where: { email } });

              const { error } = validandoCadastroSchema.validate(req.body, { abortEarly: false });

              if (error) {
                return res.render('cadastro', { errors: error.details });
              }
        
              const body = {
                username,
                date,
                email,
                password: bcrypt.hashSync(password, 10)
              }
        
              const newUser = await Users.create(body).then(() => {
                res.redirect('/login');
              }).catch(error => res.render('cadastro', { errors: error.errors}));
          }
    }

    module.exports = cadastroController;