module.exports = (sequelize, dataTypes) => {
    const alias = "Users";
  
    const collumns = {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false
      },
      nascimento: {
        type: dataTypes.DATE,
        allowNull: false,
        defaultValue: dataTypes.NOW,
        validate: {
          isDate: true,
          isAfterOrEqual: "1900-01-01",
          isBeforeOrEqual: dataTypes.NOW
        }
      },
      email: {
        type: dataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 20],
          isAlphanumeric: true,
          isLowercase: true,
          isUppercase: true,
        }
      },
      type: {
        type: dataTypes.ENUM,
        values: ["user", "admin"],
        allowNull: false,
        defaultValue: "user"
      }
    }
  
    const config = {
      tableName: "users",
      timestamps: false,
    }
  
    const User = sequelize.define(alias, collumns, config);
  
    User.associate = ({  }) => {
      // Tem uma tarefa - Relação HasOne
      // User.hasOne(models., {
      //   as: "",
      // });
  
      // Tem várias tarefas - Relação HasMany
      User.hasMany();
    }
  
    return User;
  }