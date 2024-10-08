"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profiles", {
      pr_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pr_us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        // untuk membuat foreign key
        references: {
          model: "users",
          key: "us_id",
        },
      },
      pr_gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pr_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      pr_address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      pr_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      pr_created_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      pr_created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pr_updated_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      pr_updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profiles");
  },
};
