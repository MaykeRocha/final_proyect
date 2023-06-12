'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  
  car.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.REAL
  },
  
  {
    sequelize,
    modelName: 'car',
  });
  return car;
};