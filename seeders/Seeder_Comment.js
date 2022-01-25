"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("comments", [
{
Content: "",
UserID: 0,
ChapterID: 0,
createdAt: new Date(),
updatedAt: new Date(),
},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
