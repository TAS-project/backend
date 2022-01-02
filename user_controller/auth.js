const User = require("../models/User");
const encryption = require("../encryption");

//register new user into database
exports.register = async (req, res, next) => {
	try {
		let [hash, salt] = await encryption.encrypt(req.body.Password);
		let new_user = new User({
			Username: req.body.Username,
			First_Name: req.body.First_Name,
			Last_Name: req.body.Last_Name,
			Hash: hash,
			Salt: salt,
			Email: req.body.Email,
		});
		await new_user.save();
		res.status(201).send(new_user);
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};

//load a user from data base login
exports.login = async (req, res, next) => {
	try {
		const load_user = await User.findOne({
			where: { Username: req.body.Username },
		});
		if (load_user == null) {
			res.status(401).send("Wrong username or password");
		} else {
			isCorrect = await encryption.verify(
				req.body.Password,
				load_user.Hash,
				load_user.Salt
			);
			if (isCorrect) {
				res.status(200).send(load_user);
			} else {
				res.status(401).send("Wrong username or password");
			}
		}
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
