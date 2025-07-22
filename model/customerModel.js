const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Customer = sequelize.define("Customer", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
    dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
    addressID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
    preferedLanguage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Customer;
