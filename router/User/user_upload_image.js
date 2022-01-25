const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const {
	upload,
	uploadImage,
} = require("../../Controller/User/Upload_Profile_Photo");
const {
	upload1,
	uploadImage1,
} = require("../../Controller/User/Upload_Book_Cover");

router.post("/User/Upload_Profile_Image", verifyToken, uploadImage, upload);
router.post(
	"/User/Upload_Book_Cover/:BookID/",
	verifyToken,
	uploadImage1,
	upload1
);
module.exports = router;
