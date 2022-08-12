module.exports = (sequelize, dataTypes) => {

  const alias = 'User';

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
      unique: true
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  }
  const config = {
    tableName: 'users',
    timestamps: false,
  }

  const User = sequelize.define(alias, columns, config);
  
return User;
}