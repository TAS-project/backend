const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Review = sequelize.define("Review", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Content: {
		type: Sequelize.TEXT,
		defaultValue: "",
		allowNull: true,
	},
});

module.exports = Review;
