'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    users.hasMany(order, {foreignKey:'users'});

    }
  }
  users.init({
    id: DataTypes.INTEGER,
    username: DataTypes.INTEGER,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    avatar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};