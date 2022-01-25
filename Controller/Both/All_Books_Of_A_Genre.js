const Book = require("../../models/Book");
const User = require("../../models/User");
const Bookmark = require("../../models/Bookmark");
const Book_Genre = require("../../models/Book_Genre");
const Genre = require("../../models/Genre");

// view all books of a genre
exports.view = async (req, res, next) => {
	try {
		const wanted_genre = await Genre.findOne({
			where: { ID: req.body.Genre_ID },
		});
		const all_books = await Book_Genre.findAll({
			where: { GenreID: req.body.Genre_ID },
		});

		let Books = [];
		for (var i = 0, l = all_books.length; i < l; i++) {
			const foundedBook = await Book.findOne({
				where: { ID: all_books[i].BookID },
			});
			const foundedUser = await User.findOne({
				where: { ID: foundedBook.UserID },
			});

			var followed = 0;
			let follow_exist = await Bookmark.findOne({
				where: { UserID: req.person.ID, BookID: foundedBook.ID },
			});
			if (follow_exist) {
				followed = 1;
			}
			if (foundedBook.UserID === req.person.ID || req.access === 0) {
				followed = -1;
			}
			var founded_book = {
				Username: foundedUser.Username,
				Book_Id: foundedBook.ID,
				Name: foundedBook.Name,
				Summary: foundedBook.About,
				Book_Cover: foundedBook.Cover,
				followed_state: followed,
			};
			Books.push(founded_book);
		}
		res
			.status(200)
			.send({ Response: "Done", Genre_Description: wanted_genre.About, Books });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
