const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Account = sequelize.define("Account", {
    customerID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  balance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
    currencyID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

module.exports = Account;
