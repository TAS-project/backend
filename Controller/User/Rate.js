const Book = require("../../models/Book");
const Rating = require("../../models/Rating");

// vRate a book
exports.Rate = async (req, res, next) => {
	try {
		if (req.access === 1) {
			rateValue = req.body.Rate * 10;

			let rateExist = await Rating.findOne({
				where: { UserID: req.person.ID, BookID: req.body.Book_ID },
			});
			var rated = null;
			if (rateExist) {
				//update
				let tmp = await Rating.update(
					{ UserID: req.person.ID, BookID: req.body.Book_ID, Rate: rateValue },
					{ where: { ID: rateExist.ID } }
				);
				rated = await Rating.findOne({
					where: { UserID: req.person.ID, BookID: req.body.Book_ID },
				});
			} else {
				//create
				rated = new Rating({
					UserID: req.person.ID,
					BookID: req.body.Book_ID,
					Rate: rateValue,
				});
				await rated.save();
			}
			all_rates_for_book = await Rating.findAll({
				where: { BookID: req.body.Book_ID },
			});
			Average = null;
			if (all_rates_for_book.length > 0) {
				Average = 0;
				for (var i = 0, l = all_rates_for_book.length; i < l; i++) {
					Average = Average + all_rates_for_book[i].Rate;
				}
				Average = Average / all_rates_for_book.length;

				let book_rated = await Book.update(
					{ Rating: Average },
					{ where: { ID: req.body.Book_ID } }
				);
				console.log(Average);
			}
			let book_done = await Book.findOne({
				where: { ID: req.body.Book_ID },
			});

			res.status(200).send({
				Response: "Done",
				Book_ID: book_done.ID,
				Rate: book_done.Rating / 10,
			});
		} else {
			res.status(400).send({ Response: "Supporters can't rate books" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
