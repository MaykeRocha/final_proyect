'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productInCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.STRING,
        allowNull:false,
        field:'car_id'
      },
      productId: {
        type: Sequelize.STRING,
        allowNull:false,
        field:'product_id',
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.REAL,
        allowNull:false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productInCarts');
  }
};