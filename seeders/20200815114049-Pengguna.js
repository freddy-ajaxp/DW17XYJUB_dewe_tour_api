"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullname: "Demo",
          email: "demo@demo.com",
          password:
            "$2b$10$z3q2ECec.wEjCSdGsc.6RumLG4J90GoIl6O6c0m3lhp8Csb2JXssy",
          admin: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "DemoAdmin",
          email: "demoadmin@demo.com",
          password:
            "$2b$10$z3q2ECec.wEjCSdGsc.6RumLG4J90GoIl6O6c0m3lhp8Csb2JXssy",
          admin: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
