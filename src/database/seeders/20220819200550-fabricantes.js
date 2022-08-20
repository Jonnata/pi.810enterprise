'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fabricantes', [
      {
        nome: 'Ifood',
      },
      {
        nome: 'Playstation'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fabricantes', null, {});
  }
};
