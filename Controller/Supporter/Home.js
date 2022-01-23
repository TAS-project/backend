const Book = require("../../models/Book");
const User = require("../../models/User");
const Chapter = require("../../models/Chapter");

// retrieving Home details
exports.Home_get = async (req, res, next) => {
	try {
		var Books = [];
		const load_book = await Book.findAll({});
		for (var i = 0, l = load_book.length; i < l; i++) {
			const writer = await User.findOne({
				where: { ID: load_book[i].UserID },
			});
			const last_Chapter = await Chapter.findOne({
				where: { BookID: load_book[i].ID },
				order: [["createdAt", "DESC"]],
			});
			if (last_Chapter) {
				var d = load_book[i].updatedAt;

				var Last_Updated =
					d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
				const book_found = {
					Book_ID: load_book[i].ID,
					Book_Name: load_book[i].Name,
					Writer_ID: writer.ID,
					Writer_Username: writer.Username,
					Last_Chapter_ID: last_Chapter.ID,
					Last_Chapter_Name: last_Chapter.Name,
					Rate: load_book[i].Rating,
					Last_Updated: Last_Updated,
					Book_Cover: null,
				};
				Books.push(book_found);
			}
		}
		res.status(200).send({ Response: "Done", Books });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
