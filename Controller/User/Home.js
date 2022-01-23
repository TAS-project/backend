const Book = require("../../models/Book");
const User = require("../../models/User");

// retrieving book details
exports.Home_get = async (req, res, next) => {
	try {
		var books = [];
		const load_book = await Book.findAll({
			where: { UserID: req.person.ID },
		});
		for (var i = 0, l = load_book.length; i < l; i++) {
			const writer = await User.findOne({
				where: { ID: load_book[i].UserID },
			});
			const book_found = {
				Book_ID: load_book[i].ID,
				Book_Name: load_book[i].Name,
				Writer_ID: writer.ID,
				Writer_Username: writer.Username,
			};
			books.push(book_found);
		}
		// console.log(books);
		res.status(200).send({ Response: "Done", books });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
