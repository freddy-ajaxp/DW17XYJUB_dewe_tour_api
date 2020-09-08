'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
      user.hasOne(models.Transaction, {
        foreignKey: "userId",
      });
    }
  };
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};