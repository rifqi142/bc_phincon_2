const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Profile.init(
    {
      pr_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pr_us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      pr_gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pr_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pr_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pr_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      pr_created_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      pr_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pr_updated_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      pr_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
      timestamps: false,
    }
  );
  return Profile;
};
