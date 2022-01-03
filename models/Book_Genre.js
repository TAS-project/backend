const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Book_Genre = sequelize.define("Book_Genre", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
});

module.exports = Book_Genre;
