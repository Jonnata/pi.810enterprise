'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('carrinhos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    data_da_compra: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    status: {
        type: Sequelize.ENUM,
        values: ['pendente', 'pago', 'cancelado'],
        allowNull: false,
        defaultValue: 'pendente'
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carrinhos');
  }
};
