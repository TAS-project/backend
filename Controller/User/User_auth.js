const User = require("../../models/User");
const jwt_token = require("../../JWT_Token/JWT_Token");
const encryption = require("../../encryption");

//register new user into database
exports.register = async (req, res, next) => {
	try {
		const load_username = await User.findOne({
			where: { Username: req.body.Username },
		});
		const load_email = await User.findOne({
			where: { Email: req.body.Email },
		});
		if (load_username == null && load_email == null) {
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
			res.status(200).send(new_user);
		} else {
			res.status(400).send("Error this user already exist");
		}
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

			if (isCorrect && !load_user.Suspended) {
				const token = jwt_token.MakeToken(load_user.ID, 1);
				res.status(200).send([load_user, token]);
			} else {
				res.status(401).send("Wrong username or password");
			}
		}
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
