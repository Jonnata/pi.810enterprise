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
            const { username, date, email, image, password } = req.body

              const user = await Users.findOne({ where: { email } });

              const { error } = validandoCadastroSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário

              if (error) {
                return res.render('cadastro', { errors: error.details }); //renderiza a página de cadastro com os erros de validação
              }
              
              /*const { fieldname } = req.file; 

              const extensionFile = filename.split(".")[1].toLowerCase(); //Pega a extensão do arquivo

              if (extensionFile !== "jpg" && extensionFile !== "png") {
                return res.render('cadastro', {
                  errors: [ { msg: "O arquivo deve ser uma imagem" } ] 
                }) //renderiza a página de cadastro com os erros de validação
              }*/
        
              const body = {
                username,
                date,
                email,
                image,
                password: bcrypt.hashSync(password, 10)
              }
        
              const newUser = await Users.create(body).then(() => {
                res.redirect('/login');
              }).catch(error => res.render('cadastro', { errors: error.errors}));
          }
    }

    module.exports = cadastroController;