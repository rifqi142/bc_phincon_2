"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      us_id: {
        type: DataTypes.INTEGER,
        defaultValue: false,
        autoIncrement: true,
        primaryKey: true,
      },
      us_fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      us_created_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      us_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      us_updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      us_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );
  return users;
};
