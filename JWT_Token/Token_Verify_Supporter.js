const Token = require("./JWT_Token");
const Response = require("../Responses/general");

const verifyToken = async (req, res, next) => {
	let response = new Response();

	if (!req.headers.authorization) {
		response.setStatus(401).setMessage("fail").setRes("fail");
		return res.status(401).send(response.handler());
	}
	const result = await Token.verifyToken(req, 0);
	if (result[0]) {
		//it was Ok and token had no error
	} else {
		response.setStatus(401).setMessage("fail").setRes("fail");
		return res.status(401).send(response.handler());
	}
	next();
};

module.exports = {
	verifyToken,
};
