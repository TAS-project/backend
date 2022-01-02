const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
	ID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	Username: {
		type: Sequelize.STRING,
		allowNull: false,
		len: [4, 30],
		trim: true,
		unique: true,
	},
	First_Name: {
		type: Sequelize.STRING,
		allowNull: false,
		len: [3, 30],
	},
	Last_Name: {
		type: Sequelize.STRING,
		allowNull: false,
		len: [3, 30],
	},
	Hash: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	Salt: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	Email: {
		type: Sequelize.STRING,
		allowNull: false,
		trim: true,
		unique: true,
	},
});

module.exports = User;
