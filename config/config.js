const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("aws", "root", "manoj7654", {
  host: "practice.cbal1o4p3iqn.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
