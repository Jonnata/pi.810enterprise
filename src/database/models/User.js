module.exports = (sequelize, dataTypes) => {

  const alias = 'Users';

  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    },
    type: {
      type: dataTypes.ENUM,
      values: ['admin', 'user'],
      allowNull: false,
      defaultValue: 'user',
    },
    created_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
  }
  }
  const config = {
    tableName: 'users',
    timestamps: false,
  }

  const User = sequelize.define(alias, columns, config);

  User.associate = ({ Carrinhos }) => {
    User.hasMany(Carrinhos, {
      foreignKey: 'id_user',
    });
  }
  
return User;
}