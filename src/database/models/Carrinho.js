module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrinhos';
    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
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
        status: {
            type: dataTypes.ENUM,
            values: ['pendente', 'pago', 'cancelado'],
            allowNull: false,
            defaultValue: 'pendente'
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
        },
        
    };
    const config = {
        tableName: 'carrinhos',
        timestamps: false,
    }
    const Carrinho = sequelize.define(alias, columns, config);

    Carrinho.associate = function(models) {
        Carrinho.belongsTo(models.Users, {
            foreignKey: 'id_user'
        });
    }
    return Carrinho;
    }