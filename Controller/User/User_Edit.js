const User = require("../../models/User");
const encryption = require("../../Tools/encryption");

// edit user into database
exports.edit = async (req, res, next) => {
	try {
		const load_username = await User.findOne({
			where: { Username: req.body.Username },
		});
		const load_email = await User.findOne({
			where: { Email: req.body.Email },
		});
		if (
			(!load_username || load_username.ID == req.person.ID) &&
			(!load_email || load_email.ID == req.person.ID)
		) {
			let [hash, salt] = await encryption.encrypt(req.body.Password);
			let tmp = await User.update(
				{
					Username: req.body.Username,
					First_Name: req.body.First_Name,
					Last_Name: req.body.Last_Name,
					Hash: hash,
					Salt: salt,
					Email: req.body.Email,
				},
				{
					where: { ID: req.person.ID },
				}
			);
			res.status(200).send({ Response: "User Updated", ID: req.person.ID });
		} else {
			res.status(400).send({ Response: "Error this user already exist" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
