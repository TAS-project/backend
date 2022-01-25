"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("bookmarks", [
			{
				UserID: 1,
				BookID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 1,
				BookID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 1,
				BookID: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 2,
				BookID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 2,
				BookID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 2,
				BookID: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 3,
				BookID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 3,
				BookID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 3,
				BookID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				UserID: 4,
				BookID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				BookID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				BookID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				BookID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				BookID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				BookID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				BookID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
