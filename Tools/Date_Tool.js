const make_readable = function (date) {
	var string =
		date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

	return string;
};

module.exports.make_readable = make_readable;
