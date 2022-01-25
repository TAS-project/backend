const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const { upload, uploadImage } = require("../../Controller/User/Upload_Profile_Photo");

router.post("/User/Upload_Image", verifyToken, uploadImage, upload);
module.exports = router;
