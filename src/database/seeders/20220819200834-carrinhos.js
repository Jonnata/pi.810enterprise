'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carrinhos', [
      {
        data_da_compra: '2020-08-19',
        id_user: 1,
        id_produto: 1,
        total: 29.90,
        quantidade: 1,
        status: 'pendente',
    }, {
        data_da_compra: '2020-07-05',
        id_user: 2,
        id_produto: 2,
        total: 45.00,
        quantidade: 1, 
        status: 'pendente',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carrinhos', null, {});
  }
};
