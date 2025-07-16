const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bank", "postgres", "K1ev2oo1", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
