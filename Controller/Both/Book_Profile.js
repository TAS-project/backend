const Book = require("../../models/Book");
const User = require("../../models/User");
const Genre = require("../../models/Genre");
const Book_Genre = require("../../models/Book_Genre");

// retrieving book details
exports.view = async (req, res, next) => {
	try {
		const load_book = await Book.findOne({
			where: { ID: req.body.Book_ID },
		});
		if (load_book == null) {
			res.status(400).send({ Response: "Error not such a book!" });
		} else {
			const writer = await User.findOne({
				where: { ID: load_book.UserID },
			});
			const genre_ids = await Book_Genre.findAll({
				where: { BookID: load_book.ID },
			});

			var genres = [];
			for (var i = 0, l = genre_ids.length; i < l; i++) {
				const genre = await Genre.findOne({
					where: { ID: genre_ids[i].GenreID },
				});
				genres.push({ name: genre.Name, color: genre.Color });
			}

			const book_found = {
				User_ID: req.person.ID,
				Book_ID: load_book.ID,
				Book_Name: load_book.Name,
				Writer_ID: writer.ID,
				Writer_Username: writer.Username,
				writer: writer.First_Name + " " + writer.Last_Name,
				BooK_Rate: load_book.Rating,
				genres: genres,
				followed: 666,
				photo: null,
			};

			res.status(200).send({ Response: "Done", Book: book_found });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
