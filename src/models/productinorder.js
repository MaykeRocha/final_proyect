'use strict';
const {
  Model
} = require('sequelize');
const productincart = require('./productincart');
module.exports = (sequelize, DataTypes) => {
  class productInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productincart.hasMany(models.order, {foreignKey: 'productInCart'})

    }
  }
  productInOrder.init({
    id: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productInOrder',
  });
  return productInOrder;
};