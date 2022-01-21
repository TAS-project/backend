const Book = require("../../models/Book");

// retrieving book details
exports.view = async (req, res, next) => {
	try {
		const load_Book = await Book.findOne({
			where: { ID: req.body.Book_ID },
		});
		if (load_Book == null) {
			res.status(400).send("Error not such a book!");
		} else {
			res.status(200).send(load_Book);
		}
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
