const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Address = sequelize.define("Address", {
    customerID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  streetNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    unitNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ostalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Address;
