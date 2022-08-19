module.exports = (sequelize, dataTypes) => {
    const alias = 'Fabricante';
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
    }
    const config = {
        tableName: 'fabricante',
        timestamps: false,
    }
    const Fabricante = sequelize.define(alias, columns, config);

    Fabricante.associate = function(models) {
        Fabricante.belongsToMany(models.Produtos, {
            as: 'produtos',
            through: 'fabricante',
            foreignKey: 'id_produto',
            otherKey: 'id_fabricante',
            timestamps: false,
        });
    }
    
    return Fabricante;
    }