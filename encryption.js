const crypto = require("crypto");

const encrypt = function (password) {
	salt = crypto.randomBytes(16).toString("hex");
	hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
	return [hash, salt];
};
const verify = function (password, user_hash, salt) {
	hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

	return user_hash === hash;
};

module.exports = {
	encrypt,
	verify,
};
