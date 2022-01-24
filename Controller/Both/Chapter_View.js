const Chapter = require("../../models/Chapter");
const User = require("../../models/User");
const Book = require("../../models/Book");
const Date_Tool = require("../../Tools/Date_Tool");
// view Chapter
exports.view = async (req, res, next) => {
	try {
		const wanted_chapter = await Chapter.findOne({
			where: { ID: req.body.Chapter_ID },
		});
		const book_of_chapter = await Book.findOne({
			where: { ID: wanted_chapter.BookID },
		});
		const owner_of_book = await User.findOne({
			where: { ID: book_of_chapter.UserID },
		});
		const Publishing_date = Date_Tool.make_readable(wanted_chapter.createdAt);
		const founded_chapter = {
			Chapter_ID: wanted_chapter.ID,
			chapter_name: wanted_chapter.Name,
			Book_id: book_of_chapter.ID,
			Publishing_date: Publishing_date,
			content: wanted_chapter.Content,
			Owner_ID: owner_of_book.ID,
			Owner_Username: owner_of_book.Username,
		};
		res.status(200).send({ Response: "Done", Chapter: founded_chapter });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
