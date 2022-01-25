"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("user_follows", [
			{
				UserID: 1,
				FollowedUserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 1,
				FollowedUserID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 1,
				FollowedUserID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 2,
				FollowedUserID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 2,
				FollowedUserID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				UserID: 3,
				FollowedUserID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 3,
				FollowedUserID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 3,
				FollowedUserID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				UserID: 4,
				FollowedUserID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				FollowedUserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				FollowedUserID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 4,
				FollowedUserID: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				FollowedUserID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				FollowedUserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserID: 5,
				FollowedUserID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
