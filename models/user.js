'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      //hasmany untuk list transactions
      user.hasMany(models.Transaction, {
        foreignKey: "userId",
      });
    }
  };
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};