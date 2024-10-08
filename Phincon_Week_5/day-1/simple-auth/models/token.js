const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Token.init(
    {
      tkn_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tkn_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tkn_value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tkn_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tkn_client_ip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tkn_client_agent: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tkn_us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tkn_expired_on: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tkn_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      tkn_created_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      tkn_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tkn_updated_on: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      tkn_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Token",
      tableName: "tokens",
      timestamps: false,
    }
  );
  return Token;
};
