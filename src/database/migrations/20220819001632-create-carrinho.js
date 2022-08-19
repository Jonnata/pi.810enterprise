'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('carrinho', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carrinho');
  }
};
