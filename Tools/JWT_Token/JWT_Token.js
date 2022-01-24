const jwt = require("jsonwebtoken");
const Supporter = require("../../models/Supporter");
const User = require("../../models/User");

// access = 0 : Supporter
// access = 1 : User
function MakeToken(id, access) {
	const accessToken = jwt.sign(
		{
			id: id,
			access: access,
		},
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRES_IN }
		// (algorithms = ["HS256"])
	);
	return {
		accessToken,
	};
}
module.exports.MakeToken = MakeToken;

async function verifyToken(req, accessed) {
	try {
		const token = req.headers.authorization.split(" ")[1];
		var person = null;
		if (accessed === 0) {
			person = Supporter;
		} else {
			person = User;
		}
		const decoded = jwt.decode(
			token,
			process.env.JWT_SECRET,
			(algorithms = ["RS256"])
		);

		if (decoded.access === accessed) {
			const load_person = await person.findOne({
				where: { id: decoded.id },
			});
			if (load_person) {
				if (!load_person.suspended) {
					return [true, load_person];
				} else return false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
}

module.exports.verifyToken = verifyToken;
