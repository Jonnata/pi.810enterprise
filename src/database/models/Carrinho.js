module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrinhos';
    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_da_compra: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
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
        total: {
            type: dataTypes.FLOAT,
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
        tableName: 'carrinhos',
        timestamps: false,
    }
    const Carrinho = sequelize.define(alias, columns, config);

    Carrinho.associate = function(models) {
        Carrinho.belongsToMany(models.Produtos, {
            as: 'produtos',
            through: 'carrinho',
            foreignKey: 'id_produto',
            otherKey: 'id_produto',
            timestamps: false,
        });
    }
    return Carrinho;
    }