const Supporter = require("../../models/Supporter");
const jwt_token = require("../../Tools/JWT_Token/JWT_Token");
const encryption = require("../../Tools/encryption");

//register new user into database
exports.register = async (req, res, next) => {
	try {
		const load_username = await Supporter.findOne({
			where: { Username: req.body.Username },
		});
		const load_email = await Supporter.findOne({
			where: { Email: req.body.Email },
		});
		if (load_username == null && load_email == null) {
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
			res.status(200).send({ Response: "New supporter created" });
		} else {
			res.status(400).send({ Response: "Error this Supporter already exist" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};

//load a user from data base login
exports.login = async (req, res, next) => {
	try {
		const load_Supporter = await Supporter.findOne({
			where: { Username: req.body.Username },
		});
		if (load_Supporter == null) {
			res.status(401).send({ Response: "Wrong username or password" });
		} else {
			isCorrect = await encryption.verify(
				req.body.Password,
				load_Supporter.Hash,
				load_Supporter.Salt
			);

			if (isCorrect && !load_Supporter.Suspended) {
				const token = jwt_token.MakeToken(load_Supporter.ID, 0);
				res.status(200).send({
					Response: "Logged In",
					accessToken: token.accessToken,
					Username: load_Supporter.Username,
				});
			} else {
				res.status(401).send({ Response: "Wrong username or password" });
			}
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
