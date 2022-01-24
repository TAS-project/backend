const Book = require("../../models/Book");
const User = require("../../models/User");
const Genre = require("../../models/Genre");
const Book_Genre = require("../../models/Book_Genre");
const Chapter = require("../../models/Chapter");
const Bookmark = require("../../models/Bookmark");

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
			var followed = 0;
			let follow_exist = await Bookmark.findOne({
				where: { UserID: req.person.ID, BookID: load_book.ID },
			});
			if (follow_exist) {
				followed = 1;
			}
			if (load_book.UserID === req.person.ID || req.access === 0) {
				followed = -1;
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
				Summary: load_book.About,
				Book_Cover: load_book.Cover,
				Followed_State: followed,
			};

			res.status(200).send({ Response: "Done", Book: book_found });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};

// retrieving book details
exports.chapters = async (req, res, next) => {
	try {
		const load_book = await Book.findOne({
			where: { ID: req.body.Book_ID },
		});
		if (load_book == null) {
			res.status(400).send({ Response: "Error not such a book!" });
		} else {
			const load_chapters = await Chapter.findAll({
				where: { BookID: req.body.Book_ID },
			});
			if (load_chapters) {
				var chapters = [];
				for (var i = 0, l = load_chapters.length; i < l; i++) {
					const found_chapter = {
						ID: load_chapters[i].ID,
						Chapter_Number: i + 1,
						chapter_name: load_chapters[i].Name,
					};
					chapters.push(found_chapter);
				}
				res.status(200).send({ Response: "Done", Chapters: chapters });
			} else {
				res.status(200).send({ Response: "No chapters yet" });
			}
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
