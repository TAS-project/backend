const Book = require("../../models/Book");
const Book_Genre = require("../../models/Book_Genre");
const Genre = require("../../models/Genre");

// retrieving book details
exports.create = async (req, res, next) => {
	try {
		var genre_error = false;
		for (var i = 0, l = req.body.Genres.length; i < l; i++) {
			const Genre_ID = req.body.Genres[i].Genre_ID;
			const load_genre = await Genre.findOne({
				where: { ID: Genre_ID },
			});
			if (!load_genre) {
				genre_error = true;
			}
		}
		if (!genre_error) {
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
		} else {
			res.status(400).send({ Response: "Not such genres" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
