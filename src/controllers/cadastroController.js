const getInfoDatabase = require('../utils/getInfoDatabase')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')
const path = require('path')
const fs = require('fs')
const validandoCadastroSchema = require('../Schemas/validandoCadastroSchema')


const pathUsersJSON = path.join(
  __dirname,
  "..",
  "database",
  "usuarios.json"
);

const cadastroController = {
    renderCadastro: (req, res) => {
        res.render('cadastro');
        },
    
    create: (req, res) => {
            const { username, date, email, password } = req.body
            const newId = v4()

            const { error } = validandoCadastroSchema.validate(req.body, { abortEarly: false })

            const users = getInfoDatabase('usuarios');
        
            const hashedPassword = bcrypt.hashSync(password, 10);
        
            const newUser = {
              id: newId,
              username,
              date,
              email,
              password: hashedPassword
            }
        
            users.push(newUser)
        
            const usersJSON = JSON.stringify(users, null, " ");
        
            fs.writeFileSync(pathUsersJSON, usersJSON);
        
            res.redirect('/login')
          }
    }

    module.exports = cadastroController;