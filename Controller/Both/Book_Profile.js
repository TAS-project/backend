const Book = require("../../models/Book");
const Date_Tool = require("../../Tools/Date_Tool");

// retrieving book details
exports.view = async (req, res, next) => {
	try {
		const load_Book = await Book.findOne({
			where: { ID: req.body.Book_ID },
		});
		if (load_Book == null) {
			res.status(400).send({ Response: "Error not such a book!" });
		} else {
			const Last_Updated = Date_Tool.make_readable(load_book.updatedAt);
			// const Last_Updated = Date_Tool.make_readable(load_book.updatedAt);

			res.status(200).send({ Response: "Done", Book: load_Book });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
