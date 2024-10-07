"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      us_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      us_fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      us_created_on: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      us_created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      us_updated_on: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      us_updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
