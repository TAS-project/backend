"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("users", [
			{
				Username: "TAS",
				First_Name: "TAS",
				Last_Name: "TAS",
				Hash: "6813fd3ae6e565429a1597e0c8771b8cac30aec6128e95e93f05a94c75d5149237dc18e216ad5604b29d5dac91e68ee9aa9ccf49c3a9a78ac92846eac41f7558",
				Salt: "54b1b6f72c5d4ab55f5436b8b5e0e172",
				Email: "TAS@gmail.com",
				About: "This Is TAS",
				Pic: "http://localhost:3001/Photos/Seeders/Users/ProfilePhoto-1.png",
				Verified: false,
				Suspended: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Username: "Earth",
				First_Name: "Earth",
				Last_Name: "Earth",
				Hash: "6813fd3ae6e565429a1597e0c8771b8cac30aec6128e95e93f05a94c75d5149237dc18e216ad5604b29d5dac91e68ee9aa9ccf49c3a9a78ac92846eac41f7558",
				Salt: "54b1b6f72c5d4ab55f5436b8b5e0e172",
				Email: "Earth@gmail.com",
				About: "This Is Earth",
				Pic: "http://localhost:3001/Photos/Seeders/Users/ProfilePhoto-2.png",
				Verified: false,
				Suspended: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Username: "SKY",
				First_Name: "SKY",
				Last_Name: "SKY",
				Hash: "6813fd3ae6e565429a1597e0c8771b8cac30aec6128e95e93f05a94c75d5149237dc18e216ad5604b29d5dac91e68ee9aa9ccf49c3a9a78ac92846eac41f7558",
				Salt: "54b1b6f72c5d4ab55f5436b8b5e0e172",
				Email: "SKY@gmail.com",
				About: "This Is SKY",
				Pic: "http://localhost:3001/Photos/Seeders/Users/ProfilePhoto-3.png",
				Verified: false,
				Suspended: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Username: "ALEX",
				First_Name: "ALEX",
				Last_Name: "ALEX",
				Hash: "6813fd3ae6e565429a1597e0c8771b8cac30aec6128e95e93f05a94c75d5149237dc18e216ad5604b29d5dac91e68ee9aa9ccf49c3a9a78ac92846eac41f7558",
				Salt: "54b1b6f72c5d4ab55f5436b8b5e0e172",
				Email: "ALEX@gmail.com",
				About: "This Is ALEX",
				Pic: "http://localhost:3001/Photos/Seeders/Users/ProfilePhoto-4.png",
				Verified: false,
				Suspended: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Username: "SARA",
				First_Name: "SARA",
				Last_Name: "SARA",
				Hash: "6813fd3ae6e565429a1597e0c8771b8cac30aec6128e95e93f05a94c75d5149237dc18e216ad5604b29d5dac91e68ee9aa9ccf49c3a9a78ac92846eac41f7558",
				Salt: "54b1b6f72c5d4ab55f5436b8b5e0e172",
				Email: "SARA@gmail.com",
				About: "This Is SARA",
				Pic: "http://localhost:3001/Photos/Seeders/Users/ProfilePhoto-5.png",
				Verified: false,
				Suspended: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
