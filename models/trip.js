'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    static associate(models) {
      Trip.belongsTo(models.Country, {
        foreignKey: 'country_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Trip.hasOne(models.ImageTrip, {
        foreignKey: "trip_id",
      });
      
    }
  };
  Trip.init({
    title: DataTypes.STRING,
    accomodation: DataTypes.STRING,
    transportation: DataTypes.STRING,
    eat: DataTypes.STRING,
    day: DataTypes.INTEGER,
    night: DataTypes.INTEGER,
    date_trip: DataTypes.DATE,
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    image_trip_1: DataTypes.STRING,
    image_trip_2: DataTypes.STRING,
    image_trip_3: DataTypes.STRING,
    image_trip_4: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};