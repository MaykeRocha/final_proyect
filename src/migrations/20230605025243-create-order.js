'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.REAL,
        allowNull:false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        field: 'users_id',
        references: {
          model: "users",
          key: 'id',
        }
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};