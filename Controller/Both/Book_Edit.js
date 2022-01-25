const Book = require("../../models/Book");
const Book_Genre = require("../../models/Book_Genre");
const Genre = require("../../models/Genre");

// retrieving book details
exports.edit = async (req, res, next) => {
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
			let tmp0 = await Book.update(
				{
					Name: req.body.Name,
					About: req.body.Summary,
				},
				{ where: { ID: req.body.Book_ID } }
			);
			const tmp = await Book_Genre.destroy({
				where: { BookID: req.body.Book_ID },
			});

			for (var i = 0, l = req.body.Genres.length; i < l; i++) {
				const Genre_ID = req.body.Genres[i].Genre_ID;

				let book_genre = new Book_Genre({
					BookID: req.body.Book_ID,
					GenreID: Genre_ID,
				});
				await book_genre.save();
			}
			res
				.status(200)
				.send({ Response: "Book edited", BookID: req.body.Book_ID });
		} else {
			res.status(400).send({ Response: "Not such genres" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
