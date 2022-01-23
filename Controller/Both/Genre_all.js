const Genre = require("../../models/Genre");

// viw all Genres
exports.view_all = async (req, res, next) => {
	try {
		var Genres = [];
		const load_Genres = await Genre.findAll({});
		for (var i = 0, l = load_Genres.length; i < l; i++) {
			const genre_found = {
				Genre_ID: load_Genres[i].ID,
				Genre_Title: load_Genres[i].Name,
				Genre_Color: load_Genres[i].Color,
				Summary: load_Genres[i].About,
			};
			Genres.push(genre_found);
		}
		res.status(200).send({ Response: "Done", Genres });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
