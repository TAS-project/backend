const Genre = require("../../models/Genre");

// create new Genre
exports.create = async (req, res, next) => {
	try {
		let new_genre = new Genre({
			Name: req.body.Genre_Title,
			Color: req.body.Color,
			About: req.body.Summary,
		});
		await new_genre.save();
		res.status(200).send({ Response: "Done" });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
