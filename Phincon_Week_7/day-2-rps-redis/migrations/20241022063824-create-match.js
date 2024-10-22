"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matches", {
      mc_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mc_player_one: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "us_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      mc_player_one_value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mc_player_two: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "us_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      mc_player_two_value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mc_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      mc_winner: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "us_id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      mc_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      mc_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("matches");
  },
};
