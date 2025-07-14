const sequelize = require("../config/db");
const User = require("./user");

const db = {};

db.Sequelize = sequelize;
db.User = User;

module.exports = db;
