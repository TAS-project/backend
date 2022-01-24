const User = require("../../models/User");
// view profile page
exports.view = async (req, res, next) => {
	try {
		WantedUser = await User.findOne({
			where: { Username: req.body.Username },
		});
		let profile = {
			First_Name: WantedUser.First_Name,
			Last_Name: WantedUser.Last_Name,
			Username: WantedUser.Username,
			email: WantedUser.Email,
			pic: null,
		};
		res.status(200).send({ Response: "Done", profile: profile });
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
