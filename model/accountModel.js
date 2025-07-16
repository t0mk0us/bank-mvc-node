const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Account = sequelize.define("Account", {
  ID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
    customerID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
    currencyID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

module.exports = Account;
