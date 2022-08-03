'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        validate: {
          isDate: true,
          isAfterOrEqual: '1900-01-01',
          isBeforeOrEqual: Sequelize.NOW
        }
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ['user', 'admin'],
        allowNull: false,
        defaultValue: 'user'
      }
    });    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
