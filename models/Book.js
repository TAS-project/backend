const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("Book", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Book_Name: {
		type: Sequelize.STRING(100),
		allowNull: false,
	},
	About: {
		type: Sequelize.STRING(1000),
		defaultValue: "",
		allowNull: true,
	},
	Rating: {
		type: Sequelize.TINYINT,
		allowNull: true,
	},
	Suspended: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

module.exports = Book;
