"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("books", [
			{
				Name: "willow",
				About:
					"Life was a willow and it bent right to your wind, Head on the pillow, I could feel you sneaking in As if you were a mythical thing Like you were a trophy or a champion ring And there was one prize I'd cheat to win",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "All Too Well",
				About:
					"I walked through the door with you , The air was cold. But something about it felt like home somehow And I left my scarf there at your sister's house And you've still got it in your drawer even now",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Renegade",
				About:
					"I tapped on your window on your darkest night ,The shape of you was jagged and weak. There was nowhere for me to stay, But I stayed anyway.",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "love story",
				About:
					"We were both young when I first saw you, I close my eyes and the flashback starts, I'm standin' there On a balcony in summer air...",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "long story short",
				About:
					"Fatefully, I tried to pick my battles 'til the battle picked me. Misery ,Like the war of words I shouted in my sleep.And you passed right by ...",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "",
				About: "",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "Everything Has Changed",
				About:
					"All I knew This morning when I woke Is I know something now , Know something now I didn't before. And all I've seen Since eighteen hours ago Is green eyes and freckles and your smile In the back of my mind making me feel home",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				Name: "The Best Day",
				About:
					"I don't know why all the trees change in the fall But I know you're not scared of anything at all Don't know if Snow White's house is near or far away But I know I had the best day with you today",
				Rating: 0,
				Cover: "http://localhost:3001/Photos/Seeders/Books/BookCover-1.png",
				On_going: true,
				Suspended: false,
				UserID: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {},
};
