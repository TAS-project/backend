"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("genres", [
{
	Name: "",
	Content: "",
	BookID: "",
	createdAt: new Date(),
	updatedAt: new Date(),
},
{
	Name: "",
	Content: "",
	BookID: "",
	createdAt: new Date(),
	updatedAt: new Date(),
},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
