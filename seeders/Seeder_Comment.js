"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("comments", [
			{
				Content: "Blessing my book feed once again.",
				UserID: 1,
				ChapterID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "The more that you say ,The less I know",
				UserID: 2,
				ChapterID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "But you came back stronger than a 90's trend",
				UserID: 3,
				ChapterID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: " flawless, intelligent, and bright.",
				UserID: 2,
				ChapterID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "Wherever you stray , I follow",
				UserID: 4,
				ChapterID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "love itt",
				UserID: 3,
				ChapterID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "keep on doing your best",
				UserID: 2,
				ChapterID: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "definition of Beauty",
				UserID: 1,
				ChapterID: 8,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "couldent stop reading it",
				UserID: 2,
				ChapterID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "classy",
				UserID: 4,
				ChapterID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "niceee",
				UserID: 3,
				ChapterID: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "your best job so far , keep going",
				UserID: 2,
				ChapterID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Content: "you are brilliant",
				UserID: 1,
				ChapterID: 9,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
