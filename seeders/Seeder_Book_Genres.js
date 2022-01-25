"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("book_genres", [
			{
				BookID: 1,
				GenreID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 1,
				GenreID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 1,
				GenreID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 2,
				GenreID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 2,
				GenreID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 2,
				GenreID: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 3,
				GenreID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 3,
				GenreID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				BookID: 4,
				GenreID: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
