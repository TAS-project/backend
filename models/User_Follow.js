const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User_Follow = sequelize.define("User_Follow", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
});

module.exports = User_Follow;
