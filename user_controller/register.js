const User = require("../models/User");

exports.register = async (req, res, next) => {
	try {
		let new_user = new User({
			Username: req.body.Username,
			First_Name: req.body.First_Name,
			Last_Name: req.body.Last_Name,
			Password: req.body.Password,
			Email: req.body.Email,
		});
		await new_user.save();
		res.status(200).send(new_user);
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
