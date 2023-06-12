'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.hasMany(models.productinorder, {foreignKey: 'productincart'})

    }
  }
  products.init({
    id: DataTypes.INTEGER,
    name: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.REAL,
    avaiableQty: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};