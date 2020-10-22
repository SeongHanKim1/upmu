'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('five_thousand_insert_test', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.serial
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address : {
        type: Sequelize.STRING
      },
      hobby : {
        type: Sequelize.STRING
      },
      job : {
        type: Sequelize.STRING
      },
      music : {
        type: Sequelize.STRING
      },
      food : {
        type: Sequelize.STRING
      },
      money : {
        type: Sequelize.STRING
      },
      nickname  : {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('five_thousand_insert_test');
  }
};
