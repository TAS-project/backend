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
		type: Sequelize.STRING(60),
		allowNull: false,
		len: [4, 60],
		trim: true,
		unique: true,
	},
	First_Name: {
		type: Sequelize.STRING(30),
		allowNull: false,
		len: [3, 30],
	},
	Last_Name: {
		type: Sequelize.STRING(30),
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
	About: {
		type: Sequelize.STRING(500),
		len: [0, 500],
		defaultValue: null,
		allowNull: true,
	},
	Pic: {
		type: Sequelize.STRING(1000),
		defaultValue: "https://i.ibb.co/FKRrVtF/image.png",
		allowNull: false,
	},
	Verified: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
	Suspended: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

module.exports = User;
