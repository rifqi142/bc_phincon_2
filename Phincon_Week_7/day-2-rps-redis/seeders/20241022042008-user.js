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
    {
      await queryInterface.bulkInsert("users", [
        {
          us_fullname: "Muh Rifqi",
          us_username: "rifqi142",
          us_email: "rifqi@gmail.com",
          us_password: "123456",
          us_phone_number: "08561245778",
        },
        {
          us_fullname: "Dandi Pram",
          us_username: "dandi123",
          us_email: "dandi@gmail.com",
          us_password: "dandi456",
          us_phone_number: "08855661885",
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
