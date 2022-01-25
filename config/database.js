const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USERNAME,
	process.env.DATABASE_PASSWORD,
	{
		dialect: "mysql",
		port: process.env.SQL_PORT,
		host: "localhost",
		charset: "utf8",
		collate: "utf8_persian_ci",
		logging: false,
	}
);
module.exports = sequelize;
