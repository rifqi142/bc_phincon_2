"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_roles", {
      ur_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ur_us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "us_id",
        },
      },
      ur_rl_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // untuk membuat foreign key
        references: {
          model: "roles",
          key: "rl_id",
        },
      },
      ur_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ur_created_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      ur_created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ur_updated_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      ur_updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users_roles");
  },
};
