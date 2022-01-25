const multer = require("multer");
const Book = require("../../models/Book");

const multerConfig = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "Photos/Books/");
	},
	filename: (req, file, callback) => {
		const ext = file.mimetype.split("/")[1];
		callback(null, `BookCover-${req.params.BookID}.${ext}`);
	},
});

const isImage = (req, file, callback) => {
	if (file.mimetype.startsWith("image")) {
		callback(null, true);
	} else {
		callback(new Error("Only Image is Allowed"));
	}
};

const upload1 = multer({
	storage: multerConfig,
	fileFilter: isImage,
});

exports.uploadImage1 = upload1.single("photo");

exports.upload1 = async (req, res) => {
	try {
		const BookID = req.params.BookID;
		console.log(BookID);
		const loadbook = await Book.update(
			{ Cover: process.env.PHOTOS_PREFIX + req.file.path },
			{ where: { ID: BookID } }
		);
		res.status(200).send({ Response: "Done" });
	} catch (e) {
		console.log(e);
		res.status(400).send({ Response: "Error" });
	}
};
