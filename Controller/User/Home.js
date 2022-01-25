const Book = require("../../models/Book");
const User = require("../../models/User");
const Chapter = require("../../models/Chapter");
const Date_Tool = require("../../Tools/Date_Tool");
const Bookmark = require("../../models/Bookmark");

// retrieving Home details
exports.Home_get = async (req, res, next) => {
	try {
		var Books = [];
		var load_book = [];
		let tmp = await Book.findAll({
			where: { UserID: req.person.ID },
		});
		load_book = load_book.concat(tmp);

		let tmp2 = await Bookmark.findAll({
			where: { UserID: req.person.ID },
		});

		for (var i = 0, l = tmp2.length; i < l; i++) {
			let tmp3 = await Book.findOne({
				where: { ID: tmp2[i].BookID },
			});
			load_book.push(tmp3);
		}
		for (var i = 0, l = load_book.length; i < l; i++) {
			const writer = await User.findOne({
				where: { ID: load_book[i].UserID },
			});
			const last_Chapter = await Chapter.findOne({
				where: { BookID: load_book[i].ID },
				order: [["createdAt", "DESC"]],
			});
			if (last_Chapter) {
				const Last_Updated = Date_Tool.make_readable(load_book[i].updatedAt);
				const book_found = {
					Book_ID: load_book[i].ID,
					Book_Name: load_book[i].Name,
					Writer_ID: writer.ID,
					Writer_Username: writer.Username,
					Last_Chapter_ID: last_Chapter.ID,
					Last_Chapter_Name: last_Chapter.Name,
					Rate: load_book[i].Rating / 10,
					Last_Updated: Last_Updated,
					Book_Cover: load_book[i].Cover,
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
