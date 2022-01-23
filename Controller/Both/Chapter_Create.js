const Book = require("../../models/Book");
const Book_Genre = require("../../models/Book_Genre");
const Genre = require("../../models/Genre");
const Chapter = require("../../models/Chapter");

// create new Chapter
exports.create = async (req, res, next) => {
	try {
		let new_chapter = new Chapter({
			Name: req.body.Name,
			BookID: req.body.Book_ID,
			Content: req.body.Content,
		});
		await new_chapter.save();
		res.status(200).send({ Response: "Done" });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
