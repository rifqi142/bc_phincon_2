"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relasi ke model match sebagai player_one
      models.user.hasMany(models.match, {
        foreignKey: "mc_player_one",
        as: "player_one",
      });

      // Relasi ke model match sebagai player_two
      models.user.hasMany(models.match, {
        foreignKey: "mc_player_two",
        as: "player_two",
      });

      // Relasi ke model match sebagai winner
      models.user.hasMany(models.match, {
        foreignKey: "mc_winner",
        as: "winner",
      });
    }
  }
  user.init(
    {
      us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      us_fullname: {
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
      us_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      us_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      us_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "user",
      tableName: "users",
      timestamps: false,
      createdAt: "us_created_at",
      updatedAt: "us_updated_at",
    }
  );
  return user;
};
