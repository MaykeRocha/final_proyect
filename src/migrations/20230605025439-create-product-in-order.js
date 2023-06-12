'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productInOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.STRING,
        allowNull:false,
        field:'order_id'
      },
      productId: {
        type: Sequelize.STRING,
        allowNull:false,
        field:'product_id', 
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull:false,
        defaultValue:1
      },
      price: {
        type: Sequelize.REAL,
        allowNull:false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productInOrders');
  }
};