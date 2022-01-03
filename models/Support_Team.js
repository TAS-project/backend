const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Support_Team = sequelize.define("Support_Team", {
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
	Suspended: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

module.exports = Support_Team;
