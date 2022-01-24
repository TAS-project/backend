const User = require("../../models/User");
const User_Follow = require("../../models/User_Follow");
const Book = require("../../models/Book");

// view profile page
exports.view = async (req, res, next) => {
	try {
		WantedUser = await User.findOne({
			where: { Username: req.body.Username },
		});
		var followed = 0;
		let follow_exist = await User_Follow.findOne({
			where: { UserID: req.person.ID, FollowedUserID: WantedUser.ID },
		});
		if (follow_exist) {
			followed = 1;
		}
		if (WantedUser.ID == req.person.ID || req.access === 0) {
			followed = -1;
		}
		let profile = {
			First_Name: WantedUser.First_Name,
			Last_Name: WantedUser.Last_Name,
			Username: WantedUser.Username,
			email: WantedUser.Email,
			pic: WantedUser.Pic,
			Followed_State: followed,
		};
		var followers = [];
		var followings = [];
		let followers_found = await User_Follow.findAll({
			where: { FollowedUserID: WantedUser.ID },
		});
		let followings_found = await User_Follow.findAll({
			where: { UserID: WantedUser.ID },
		});

		for (var i = 0, l = followers_found.length; i < l; i++) {
			foundUser = await User.findOne({
				where: { ID: followers_found[i].UserID },
			});
			followers.push(foundUser.Username);
		}

		for (var i = 0, l = followings_found.length; i < l; i++) {
			foundUser = await User.findOne({
				where: { ID: followings_found[i].FollowedUserID },
			});
			followings.push(foundUser.Username);
		}
		let books_found = await Book.findAll({
			where: { UserID: WantedUser.ID },
		});
		var user_books = [];
		for (var i = 0, l = books_found.length; i < l; i++) {
			user_book = {
				Book_ID: books_found[i].ID,
				Book_Name: books_found[i].Name,
				Book_Cover: books_found[i].Cover,
				Summery: books_found[i].About,
			};
			user_books.push(user_book);
		}

		res.status(200).send({
			Response: "Done",
			profile: profile,
			follower: followers,
			following: followings,
			user_books: user_books,
		});
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
