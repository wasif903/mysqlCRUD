const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "test",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = { sequelize, DataTypes };
