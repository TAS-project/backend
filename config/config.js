require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
		host: process.env.HOST,
		dialect: process.env.DIALECT,
	},
	test: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
		host: process.env.HOST,
		dialect: process.env.DIALECT,
	},
	production: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
		host: process.env.HOST,
		dialect: process.env.DIALECT,
	},
};
