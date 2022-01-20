const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Genre = sequelize.define("Genre", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Name: {
		type: Sequelize.STRING(100),
		allowNull: false,
	},
	Color: {
		type: Sequelize.STRING(7),
		defaultValue: "#000000",
		allowNull: false,
	},
	About: {
		type: Sequelize.STRING(1000),
		defaultValue: "",
		allowNull: true,
	},
});

module.exports = Genre;
