const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  UserRole.init(
    {
      ur_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ur_us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ur_rl_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ur_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      ur_created_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      ur_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ur_updated_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      ur_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "UserRole",
      tableName: "roles",
      timestamps: false,
    }
  );
  return UserRole;
};
