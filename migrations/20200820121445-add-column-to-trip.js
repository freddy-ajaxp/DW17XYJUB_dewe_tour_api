'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all(
      [queryInterface.addColumn(
      'Trips', // name of Source model
      'image_trip_1', // name of the key we're adding 
      {
        type: Sequelize.STRING    
      }
    )],
    [queryInterface.addColumn(
      'Trips', // name of Source model
      'image_trip_2', // name of the key we're adding 
      {
        type: Sequelize.STRING    
      }
    )],
    [queryInterface.addColumn(
      'Trips', // name of Source model
      'image_trip_3', // name of the key we're adding 
      {
        type: Sequelize.STRING    
      }
    )],
    [queryInterface.addColumn(
      'Trips', // name of Source model
      'image_trip_4', // name of the key we're adding 
      {
        type: Sequelize.STRING    
      }
    )],
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Trips', // name of Source model
      'image_trip_1', // name of the key we're adding 
    ),
    queryInterface.removeColumn(
      'Trips', // name of Source model
      'image_trip_2', // name of the key we're adding 
    ),
    queryInterface.removeColumn(
      'Trips', // name of Source model
      'image_trip_3', // name of the key we're adding 
    ),
    queryInterface.removeColumn(
      'Trips', // name of Source model
      'image_trip_4', // name of the key we're adding 
    )
  }
};
