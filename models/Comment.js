const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Comment = sequelize.define("Comment", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Content: {
		type: Sequelize.STRING(500),
		defaultValue: "",
		allowNull: true,
	},
});

module.exports = Comment;
