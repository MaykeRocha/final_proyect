'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull:false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      price: {
        type: Sequelize.REAL,
        allowNull:false
      },
      avaiableQty: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        field:'user_id',
        references: {
          model: "products",
          key: 'id',
        }
      },
      productImage: {
        type: Sequelize.STRING,
        allowNull:false,
        field:'product_image',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};