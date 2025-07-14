const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Currency = sequelize.define("Currency", {
  ID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Currency;
