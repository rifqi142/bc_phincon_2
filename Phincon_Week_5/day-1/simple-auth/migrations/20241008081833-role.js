"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("roles", {
            rl_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            rl_code: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            rl_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            rl_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            rl_created_on: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            rl_created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            rl_updated_on: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            rl_updated_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("roles");
    },
};
