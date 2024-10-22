"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi ke model user sebagai player_one
      models.match.belongsTo(models.user, {
        foreignKey: "mc_player_one",
        as: "player_one",
      });
      // relasi ke model user sebagai player_two
      models.match.belongsTo(models.user, {
        foreignKey: "mc_player_two",
        as: "player_two",
      });
      // relasi ke model user sebagai winner
      models.match.belongsTo(models.user, {
        foreignKey: "mc_winner",
        as: "winner",
      });
    }
  }
  match.init(
    {
      mc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mc_player_one: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mc_player_one_value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mc_player_two: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mc_player_two_value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mc_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      mc_winner: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mc_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mc_updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "match",
      tableName: "matches",
      createdAt: "mc_created_at",
      updatedAt: "mc_updated_at",
    }
  );
  return match;
};
