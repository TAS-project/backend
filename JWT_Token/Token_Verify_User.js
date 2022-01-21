const Token = require("./JWT_Token");

exports.verifyToken = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			res.status(401).send("Please login again");
		}
		const result = await Token.verifyToken(req, 1);
		if (result[0]) {
			//it was Ok and token had no error
			res.status(200);
			next();
		} else {
			res.status(401).send("Please login again");
		}
	} catch (e) {
		res.status(401).send("Please login again");
	}
};
