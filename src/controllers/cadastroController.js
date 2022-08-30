const { Users } = require('../database/models');
const bcrypt = require('bcrypt');
const validandoCadastroSchema = require('../Schemas/validandoCadastroSchema');
const path = require('path');
const fs = require('fs');
const multerConfig = require('../utils/multerConfig');

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
            
            const user = Users.findOne({ where: { email } });
            
            const { error } = validandoCadastroSchema.validate(req.body, { abortEarly: false }); // abortEarly: false para validar todos os campos do formulário
            
            if (error) {
              return res.render('cadastro', { errors: error.details });
            }
            const { filename } = req.file;
            
            const extensionFile = filename.split('.')[1] // pega a extensão do arquivo

            if (extensionFile != 'jpg' && extensionFile != 'png' && extensionFile != 'jpeg') {
              return res.render('cadastro', { extensionError: 'Somente arquivos PNG, JPG e JPEG são permitidos!' });
            }

              const body = {
                username,
                date,
                email,
                image: filename,
                password: bcrypt.hashSync(password, 10)
              }
        
              const newUser = await Users.create(body)
              
              .then(() => {
                res.redirect('/login');
              })
              .catch(error => res.render('cadastro', { errors: error.errors}));
            
          },
          // Entrar na pasta dos avatar
          // Deletar todas os arquivos que não tem a extensão que você quer

          fsRemovePDFAndOthersInPublicImagesAvatarUsusarios: () => {
            fs.unlink('*pdf', (err) => {
              if (err) console.log(err);
              else console.log('Arquivo deletado com sucesso!');
           });
          },

          


          
    }

    module.exports = cadastroController;