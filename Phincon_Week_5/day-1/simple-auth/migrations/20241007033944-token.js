"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tokens", {
      tkn_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tkn_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tkn_value: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tkn_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tkn_client_ip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tkn_client_agent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tkn_us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tkn_expired_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tkn_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tkn_created_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      tkn_created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      tkn_updated_on: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      tkn_updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tokens");
  },
};
