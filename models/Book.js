const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define("Book", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Name: {
		type: Sequelize.STRING(80),
		allowNull: false,
	},
	About: {
		type: Sequelize.STRING(1000),
		defaultValue: "",
		allowNull: true,
	},
	Rating: {
		type: Sequelize.TINYINT,
		defaultValue: 0,
		allowNull: true,
	},
	Cover: {
		type: Sequelize.STRING(1000),
		defaultValue: "https://i.ibb.co/cXH2s7V/bookimg.png",
		allowNull: false,
	},
	On_going: {
		type: Sequelize.BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
	Suspended: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

module.exports = Book;
