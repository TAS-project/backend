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
			let edit_book = await Book.Update(
				{
					Name: req.body.Name,
					About: req.body.Summary,
					UserID: req.person.ID,
				},
				{ where: { ID: req.body.Book_ID } }
			);

            
			for (var i = 0, l = req.body.Genres.length; i < l; i++) {
				const Genre_ID = req.body.Genres[i].Genre_ID;

				let book_genre = new Book_Genre({
					BookID: Book_ID,
					GenreID: Genre_ID,
				});
				await book_genre.save();
			}
			created_book = {
				Book_ID: new_book.ID,
			};
			res
				.status(200)
				.send({ Response: "New book created", Book: created_book });
		} else {
			res.status(400).send({ Response: "Not such genres" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
