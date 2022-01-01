const User = require("../models/User");

exports.register = async (req, res, next) => {
	try {
		let User = new User({
			Username: req.body.Username,
			First_Name: req.body.First_Name,
			Last_Name: req.body.Last_Name,
			hash: req.body.Password,
			Email: req.body.Email,
		});
		await User.save();
		res.status(200).send(User);
	} catch (e) {
		res.status(400).send(e);
	}
};
