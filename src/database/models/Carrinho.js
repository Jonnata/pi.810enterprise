module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrinho';
    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        id_produto: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        quantidade: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    }
    const config = {
        tableName: 'carrinho',
        timestamps: false,
    }
    const Carrinho = sequelize.define(alias, columns, config);
    return Carrinho;
    }