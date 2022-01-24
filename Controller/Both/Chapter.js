const Chapter = require("../../models/Chapter");
const User = require("../../models/User");
const Book = require("../../models/Book");
const Date_Tool = require("../../Tools/Date_Tool");
const Comment = require("../../models/Comment");

// create new Chapter
exports.create = async (req, res, next) => {
	try {
		let new_chapter = new Chapter({
			Name: req.body.Name,
			BookID: req.body.Book_ID,
			Content: req.body.Content,
		});
		await new_chapter.save();
		res.status(200).send({ Response: "Done", Chapter_ID: new_chapter.ID });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};

// view Chapter
exports.view = async (req, res, next) => {
	try {
		const wanted_chapter = await Chapter.findOne({
			where: { ID: req.body.Chapter_ID },
		});
		const book_of_chapter = await Book.findOne({
			where: { ID: wanted_chapter.BookID },
		});
		const owner_of_book = await User.findOne({
			where: { ID: book_of_chapter.UserID },
		});
		const Publishing_date = Date_Tool.make_readable(wanted_chapter.createdAt);

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

		const founded_chapter = {
			Chapter_ID: wanted_chapter.ID,
			chapter_name: wanted_chapter.Name,
			Book_id: book_of_chapter.ID,
			Publishing_date: Publishing_date,
			content: wanted_chapter.Content,
			Owner_ID: owner_of_book.ID,
			Owner_Username: owner_of_book.Username,
			Comments: Comments,
		};
		res.status(200).send({ Response: "Done", Chapter: founded_chapter });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};

// edit Chapter
exports.edit = async (req, res, next) => {
	try {
		const edited_chapter = await Chapter.update(
			{ Name: req.body.Name, Content: req.body.Content },
			{ where: { ID: req.body.Chapter_ID } }
		);
		if (edited_chapter[0] === 1) {
			res.status(200).send({
				Response: "Done",
				Chapter_ID: req.body.Chapter_ID,
				Name: req.body.Name,
				Content: req.body.Content,
			});
		} else {
			res.status(400).send({ Response: "Error" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
