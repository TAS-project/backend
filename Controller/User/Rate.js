const Book = require("../../models/Book");
const User = require("../../models/User");
const Bookmark = require("../../models/Bookmark");
const Book_Genre = require("../../models/Book_Genre");
const Genre = require("../../models/Genre");

// vRate a book
exports.Rate = async (req, res, next) => {
	try {
		res
			.status(200)
			.send({ Response: "Done", Genre_Description: wanted_genre.About, Books });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
