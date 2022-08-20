module.exports = (sequelize, dataTypes) => {

  const alias = 'Users';

  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
      unique:{
        args: true,
        msg: 'Este email já está sendo usado'
      }
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  }
  const config = {
    tableName: 'users',
    timestamps: false,
  }

  const User = sequelize.define(alias, columns, config);

  User.associate = function(models) {
    User.hasOne(models.Carrinhos, {
      as: 'carrinho',
      foreignKey: 'id_user',
    });

    User.hasMany(models.Produtos, {
      as: 'produtos',
      foreignKey: 'id_user',
    });
  }
  
return User;
}