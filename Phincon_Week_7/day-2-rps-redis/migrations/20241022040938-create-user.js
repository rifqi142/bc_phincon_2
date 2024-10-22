"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      us_fullname: {
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
      us_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      us_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      us_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
