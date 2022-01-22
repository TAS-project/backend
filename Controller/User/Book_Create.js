const Book = require("../../models/Book");
const Book_Genre = require("../../models/Book_Genre");

// retrieving book details
exports.create = async (req, res, next) => {
	try {
		let new_book = new Book({
			Name: req.body.Name,
			About: req.body.About,
			User_ID: req.person.id,
		});
		await new_book.save();

		const Book_ID = new_book.dataValues.ID;
		for (var i = 0, l = req.body.Genres.length; i < l; i++) {
			const Genre_ID = req.body.Genres[i].Genre_ID;

			let book_genre = new Book_Genre({
				BookID: Book_ID,
				GenreID: Genre_ID,
			});
			await book_genre.save();
		}

		res.status(200).send({ Response: "New book created" });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
