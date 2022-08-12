module.exports = (sequelize, dataTypes) => {
    const alias = 'Produtos';
    const columns = {
        id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        nome: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        descricao: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        preco: {
        type: dataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        imagem: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        categoria: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
    }
    const config = {
        tableName: 'produtos',
        timestamps: false,
    }
    const Produtos = sequelize.define(alias, columns, config);
    return Produtos;
    }