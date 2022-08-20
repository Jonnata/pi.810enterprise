'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        imagem: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
        },
        categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          }
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
