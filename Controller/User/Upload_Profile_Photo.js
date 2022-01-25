const multer = require("multer");
const User = require("../../models/User");

const multerConfig = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "Photos/Users/");
	},
	filename: (req, file, callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `ProfilePhoto-${req.person.ID}.${ext}`);
	},
});

const isImage = (req, file, callback) => {
	if (file.mimetype.startsWith("image")) {
		callback(null, true);
	} else {
		callback(new Error("Only Image is Allowed"));
	}
};

const upload = multer({
	storage: multerConfig,
	fileFilter: isImage,
});

exports.uploadImage = upload.single("photo");

exports.upload = async (req, res) => {
	try {
		const tmp = await User.update(
			{ Pic: process.env.PHOTOS_PREFIX + req.file.path },
			{ where: { ID: req.person.ID } }
		);

		const load_user = await User.findOne({
			where: { ID: req.person.ID },
		});
		res.status(200).send({ Response: "Done", ProfilePhoto: load_user.Pic });
	} catch (e) {
		console.log(e);
		res.status(400).send({ Response: "Error" });
	}
};
