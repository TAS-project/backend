const Bookmark = require("../../models/Bookmark");

// follow toggle
exports.toggle = async (req, res, next) => {
	const Follower = req.person;
	const Book_ID = req.body.Book_ID;
	try {
		let already_followed = await Bookmark.findOne({
			where: { UserID: Follower.ID, BookID: Book_ID },
		});
		var result = null;
		//delete row
		if (already_followed) {
			const tmp = await Bookmark.destroy({
				where: { UserID: Follower.ID, BookID: Book_ID },
			});
			result = false;
		}
		//follow
		else {
			const tmp = new Bookmark({
				UserID: Follower.ID,
				BookID: Book_ID,
			});
			await tmp.save();
			result = true;
		}

		res.status(200).send({
			Response: "Done",
			Book_ID: Book_ID,
			Following_State: result,
		});
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
