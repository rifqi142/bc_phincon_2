"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        us_fullname: "Rifqi Setiawan",
        us_password: await bcrypt.hashSync("123456", 10),
        us_username: "rifqisetiawan",
        us_email: "rifqi@gmail.com",
        us_phone_number: "08123456789",
        us_active: true,
        us_created_on: new Date(),
        us_created_by: 1,
        us_updated_on: new Date(),
        us_updated_by: 1,
      },
      {
        us_fullname: "Phincon Academy",
        us_password: await bcrypt.hashSync("12345678", 10),
        us_username: "phincon",
        us_email: "phincon@gmail.com",
        us_phone_number: "08213456789",
        us_active: true,
        us_created_on: new Date(),
        us_created_by: 1,
        us_updated_on: new Date(),
        us_updated_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
