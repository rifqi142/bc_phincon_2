const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Role.init(
    {
      rl_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rl_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      rl_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rl_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      rl_created_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      rl_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rl_updated_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      rl_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
      timestamps: false,
    }
  );
  return Role;
};
