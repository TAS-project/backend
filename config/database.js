const Sequelize = require("sequelize");

const sequelize = new Sequelize("TAS", "root", "anita1234", {
	dialect: "mysql",
	port: process.env.SQL_PORT,
	host: "localhost",
	charset: "utf8",
	collate: "utf8_persian_ci",
	logging: true,
});

module.exports = sequelize;
