const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mvc_api", "postgres", "K1ev2oo1", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
