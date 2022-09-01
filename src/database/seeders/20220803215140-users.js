'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { 
        username: 'Jonnata Costa',
        date: '1992-10-15',
        email: 'jonnata@gmail.com',
        password: '$2b$10$d/U1iW.5SVvi4AacsnL0du1Z/w57/wK64v8zSw7aYwXvbWJiT//7G', 
        image: 'public/images/painelUsuario/avatar.png',
        type: 'admin',
      },
      { 
        username: 'Maria Marques',
        date: '1995-12-30',
        email: 'maria@gmail.com',
        password: '12345678',
        image: 'public/images/painelUsuario/avatar.png',
        type: 'user',
      },
      { 
        username: 'Douglas Santos',
        date: '1997-09-20',
        email: 'douglas@gmail.com',
        password: '12345678',
        image: 'public/images/painelUsuario/avatar.png',
        type: 'user',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
