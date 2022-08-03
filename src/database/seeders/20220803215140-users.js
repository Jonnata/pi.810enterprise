'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { 
        name: 'Jonnata Costa',
        nascimento: '1992-10-15',
        email: 'jonnata@gmail.com',
        password: '12345678',
        type: 'admin' 
      },
      { 
        name: 'Maria Marques',
        nascimento: '1995-12-30',
        email: 'maria@gmail.com',
        password: '12345678',
        type: 'admin'
      },
      { 
        name: 'Douglas Santos',
        nascimento: '1997-09-20',
        email: 'douglas@gmail.com',
        password: '12345678',
        type: 'user'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
