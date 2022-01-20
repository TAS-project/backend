const Token_verify = require("./JWT_Token");
const Response = require("../Responses/general");

const verifyToken = async (req, res, next) => {
	let response = new Response();

	if (!req.headers.authorization) {
		response.setStatus(400).setMessage("fail").setRes("fail");
		return res.status(400).send(response.handler());
	}
	const result = await Token_verify(req, 1);
	if (result[0]) {
		response.setStatus(200).setMessage("done").setRes("done");
		return res.status(200).send(response.handler());
	} else {
		response.setStatus(400).setMessage("fail").setRes("fail");
		return res.status(400).send(response.handler());
	}
	next();
};

module.exports = {
	verifyToken,
};
