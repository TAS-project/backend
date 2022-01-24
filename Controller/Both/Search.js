const Book = require("../../models/Book");
const User = require("../../models/User");
const Bookmark = require("../../models/Bookmark");
const User_Follow = require("../../models/User_Follow");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// retrieving search details
exports.search = async (req, res, next) => {
	try {
		const string = req.body.Search_Text;
		var Books = [];
		var Users = [];
		const foundedUsers = await User.findAll({
			where: {
				Username: {
					[Op.like]: "%" + string + "%",
				},
			},
		});
		const foundedBooks = await Book.findAll({
			where: {
				Name: {
					[Op.like]: "%" + string + "%",
				},
			},
		});
		for (
			var i = 0, l = foundedUsers.length;
			i < l && (foundedUsers[i].ID != req.person.ID || req.access === 0);
			i++
		) {
			var followed = 0;
			let follow_exist = await User_Follow.findOne({
				where: { UserID: req.person.ID, FollowedUserID: foundedUsers[i].ID },
			});
			if (follow_exist) {
				followed = 1;
			}
			if (req.access === 0) {
				followed = -1;
			}
			const founded_user = {
				User_ID: foundedUsers[i].ID,
				Username: foundedUsers[i].Username,
				Name: foundedUsers[i].First_Name + " " + foundedUsers[i].Last_Name,
				Pic: null,
				Followed_State: followed,
			};
			Users.push(founded_user);
		}
		for (var i = 0, l = foundedBooks.length; i < l; i++) {
			var followed = 0;
			let follow_exist = await Bookmark.findOne({
				where: { UserID: req.person.ID, BookID: foundedBooks[i].ID },
			});
			if (follow_exist) {
				followed = 1;
			}
			if (foundedBooks[i].UserID === req.person.ID || req.access === 0) {
				followed = -1;
			}
			const foundedUser = await User.findOne({
				where: { ID: foundedBooks[i].UserID },
			});
			const founded_book = {
				Username: foundedUser.Username,
				Book_Id: foundedBooks[i].ID,
				Name: foundedBooks[i].Name,
				Summary: foundedBooks[i].About,
				Pic: null,
				followed_state: followed,
			};
			Books.push(founded_book);
		}
		res.status(200).send({ Response: "Done", Books, Users });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
