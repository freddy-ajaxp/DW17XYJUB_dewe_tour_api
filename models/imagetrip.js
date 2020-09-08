'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageTrip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ImageTrip.belongsTo(models.Trip, {
        foreignKey: 'trip_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  ImageTrip.init({
    gambar1: DataTypes.STRING,
    gambar2: DataTypes.STRING,
    gambar3: DataTypes.STRING,
    gambar4: DataTypes.STRING,
    trip_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageTrip',
  });
  return ImageTrip;
};