const Supporter = require("../../models/Supporter");
const jwt_token = require("../../JWT_Token/JWT_Token");
const encryption = require("../../encryption");

//register new user into database
exports.register = async (req, res, next) => {
	try {
		let [hash, salt] = await encryption.encrypt(req.body.Password);
		let new_supporter = new Supporter({
			Username: req.body.Username,
			First_Name: req.body.First_Name,
			Last_Name: req.body.Last_Name,
			Hash: hash,
			Salt: salt,
			Email: req.body.Email,
		});
		await new_supporter.save();
		res.status(201).send(new_supporter);
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};

//load a user from data base login
exports.login = async (req, res, next) => {
	console.log(jwt_token.verifyToken(jwt_token.MakeToken(1, 0).accessToken, 0));
	try {
		const load_Supporter = await Supporter.findOne({
			where: { Username: req.body.Username },
		});
		if (load_Supporter == null) {
			res.status(401).send("Wrong username or password");
		} else {
			isCorrect = await encryption.verify(
				req.body.Password,
				load_Supporter.Hash,
				load_Supporter.Salt
			);

			if (isCorrect && !load_Supporter.Suspended) {
				const token = jwt_token.MakeToken(load_Supporter.ID);
				res.status(200).send([load_Supporter, token]);
			} else {
				res.status(401).send("Wrong username or password");
			}
		}
	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
};
