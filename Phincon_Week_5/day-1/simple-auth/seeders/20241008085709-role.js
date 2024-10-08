"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("roles", [
      {
        rl_name: "System Administrator",
        rl_code: "SYSADMIN",
        rl_active: true,
        rl_created_on: new Date(),
        rl_created_by: 1,
        rl_updated_on: new Date(),
        rl_updated_by: 1,
      },
      {
        rl_name: "Administrator",
        rl_code: "ADM",
        rl_active: true,
        rl_created_on: new Date(),
        rl_created_by: 1,
        rl_updated_on: new Date(),
        rl_updated_by: 1,
      },
      {
        rl_name: "User",
        rl_code: "USR",
        rl_active: true,
        rl_created_on: new Date(),
        rl_created_by: 1,
        rl_updated_on: new Date(),
        rl_updated_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
