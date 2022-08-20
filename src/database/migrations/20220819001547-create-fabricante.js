'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fabricantes', {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('fabricantes');
  }
};
