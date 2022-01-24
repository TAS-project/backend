const Token = require("./JWT_Token");

exports.verifyToken = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			res.status(401).send({ Response: "Please login again" });
		} else {
			const result = await Token.verifyToken(req, 0);
			if (result[0]) {
				//it was Ok and token had no error
				req.person = result[1];
				req.access=0;
				res.status(200);
				next();
			} else {
				console.log("hi");
				res.status(401).send({ Response: "Please login again" });
			}
		}
	} catch (e) {
		res.status(401).send({ Response: "Please login again" });
	}
};
