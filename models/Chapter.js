const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Chapter = sequelize.define("Chapter", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Number: {
		type: Sequelize.SMALLINT,
		allowNull: false,
	},
	Name: {
		type: Sequelize.STRING(100),
		allowNull: false,
	},
	Content: {
		type: Sequelize.TEXT,
		defaultValue: "",
		allowNull: true,
	},
});

module.exports = Chapter;
