"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("genres", [
			{
				Name: "Mystery",
				Color: "#585859",
				About: "",

				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Horror",
				Color: "#101870",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Thriller",
				Color: "#783043",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Romance",
				Color: "#ff2209",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Historical",
				Color: "#e9b055",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Fantasy",
				Color: "#b22eba",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Realist Literature",
				Color: "#2ebab5",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Bildungsroman",
				Color: "#2eba31",
				About: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
