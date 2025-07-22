const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Currency = sequelize.define("Currency", {
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
