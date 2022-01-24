const Comment = require("../../models/Comment");

// write a comment
exports.write = async (req, res, next) => {
	try {
		let new_comment = new Comment({
			Content: req.body.Comment,
			UserID: req.person.ID,
			ChapterID: req.body.Chapter_ID,
		});
		await new_comment.save();
		res.status(200).send({ Response: "Done" });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
