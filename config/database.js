const Sequelize = require("sequelize");

const sequelize = new Sequelize("TAS", "root", "root", {
	dialect: "mysql",
	port: process.env.SQL_PORT,
	host: "localhost",
	charset: "utf8",
	collate: "utf8_persian_ci",
	logging: false,
});

module.exports = sequelize;
