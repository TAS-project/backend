const Support_Team = require("../../models/Support_Team");
const encryption = require("../../encryption");

//register new user into database
exports.register = async (req, res, next) => {
	try {
		let [hash, salt] = await encryption.encrypt(req.body.Password);
		let new_support_team = new Support_Team({
			Username: req.body.Username,
			First_Name: req.body.First_Name,
			Last_Name: req.body.Last_Name,
			Hash: hash,
			Salt: salt,
			Email: req.body.Email,
		});
		await new_support_team.save();
		res.status(201).send(new_support_team);
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};

//load a user from data base login
exports.login = async (req, res, next) => {
	try {
		const load_support_team = await Support_Team.findOne({
			where: { Username: req.body.Username },
		});
		if (load_support_team == null) {
			res.status(401).send("Wrong username or password");
		} else {
			isCorrect = await encryption.verify(
				req.body.Password,
				load_support_team.Hash,
				load_support_team.Salt
			);
			if (isCorrect) {
				res.status(200).send(load_support_team);
			} else {
				res.status(401).send("Wrong username or password");
			}
		}
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
