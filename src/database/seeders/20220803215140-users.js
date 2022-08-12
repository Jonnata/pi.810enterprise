'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { 
        username: 'Jonnata Costa',
        date: '1992-10-15',
        email: 'jonnata@gmail.com',
        password: '12345678', 
      },
      { 
        username: 'Maria Marques',
        date: '1995-12-30',
        email: 'maria@gmail.com',
        password: '12345678',
      },
      { 
        username: 'Douglas Santos',
        date: '1997-09-20',
        email: 'douglas@gmail.com',
        password: '12345678',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};