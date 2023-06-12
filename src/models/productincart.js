'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productInCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productInCart.belongsTo(models.orders, {foreignKey: 'ordersId'});
      productInCart.belongsTo(models.products, {foreignKey: 'productsId'});
    }
  }
  productInCart.init({
    id: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productInCart',
  });
  return productInCart;
};