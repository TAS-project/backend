const Comment = require("../../models/Comment");
const User = require("../../models/User");

// view all comments
exports.view = async (req, res, next) => {
	try {
		var Comments = [];
		const load_Comments = await Comment.findAll({
			where: { ChapterID: req.body.Chapter_ID },
			order: [["ID", "DESC"]],
		});
		for (var i = 0, l = load_Comments.length; i < l; i++) {
			const Commenter = await User.findOne({
				where: { ID: load_Comments[i].UserID },
			});
			const comment_found = {
				Comment_ID: load_Comments[i].ID,
				Comment: load_Comments[i].Content,
				Commenter_ID: Commenter.ID,
				Commenter_Username: Commenter.Username,
				pic: Commenter.Pic,
			};
			Comments.push(comment_found);
		}
		res.status(200).send({ Response: "Done", Comments: Comments });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
