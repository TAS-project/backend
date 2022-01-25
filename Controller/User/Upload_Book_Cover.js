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
		console.log("BookID: " + BookID);
		const tmp = await Book.update(
			{ Cover: process.env.PHOTOS_PREFIX + req.file.path },
			{ where: { ID: BookID } }
		);
		console.log("updated?: " + tmp);
		const load_book = await Book.findOne({
			where: { ID: req.params.BookID },
		});
		console.log("Cover: " + load_book.Cover);
		res.status(200).send({ Response: "Done", Cover: load_book.Cover });
	} catch (e) {
		console.log(e);
		res.status(400).send({ Response: "Error" });
	}
};
