'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      accomodation: {
        type: Sequelize.STRING
      },
      transportation: {
        type: Sequelize.STRING
      },
      eat: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.INTEGER
      },
      night: {
        type: Sequelize.INTEGER
      },
      date_trip: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      quota: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Countries',
          key: 'id',
          as: 'country_Id'
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      user_id: {
        type: Sequelize.INTEGER
      },
      image_trip_1: {
        type: Sequelize.STRING
      },
      image_trip_2: {
        type: Sequelize.STRING
      },
      image_trip_3: {
        type: Sequelize.STRING
      },
      image_trip_4: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trips');
  }
};