const Book = require("../../models/Book");

// retrieving book details
exports.view = async (req, res, next) => {
	try {
		const load_Book = await Book.findOne({
			where: { ID: req.body.Book_ID },
		});
		if (load_Book == null) {
			res.status(400).send({ Response: "Error not such a book!" });
		} else {
			var updated_date = load_Book.updatedAt;
			var Last_Updated =
				updated_date.getDate() +
				"-" +
				(updated_date.getMonth() + 1) +
				"-" +
				updated_date.getFullYear();
			var created_date = load_Book.updatedAt;
			var created_at =
				created_date.getDate() +
				"-" +
				(created_date.getMonth() + 1) +
				"-" +
				created_date.getFullYear();

			res.status(200).send({ Response: "Done", Book: load_Book });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
