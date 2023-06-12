'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.users, {foreignKey: 'userId'});
      orders.belongsTo(models.productInOrder, {foreignKey: 'productInOrderId'});
      orders.hasMany(models.productInCart, {foreignKey: 'productInCartId'});
    }
  }
  orders.init({
    id: DataTypes.INTEGER,
    totalPrice: DataTypes.REAL,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};