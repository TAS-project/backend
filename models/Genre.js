const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Genre = sequelize.define("Genre", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Genre_Name: {
		type: Sequelize.STRING(100),
		allowNull: false,
	},
	About: {
		type: Sequelize.STRING(1000),
		defaultValue: "",
		allowNull: true,
	},
});

module.exports = Genre;
