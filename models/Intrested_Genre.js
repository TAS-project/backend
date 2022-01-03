const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Intrested_Genre = sequelize.define("Intrested_Genre", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
});

module.exports = Intrested_Genre;
