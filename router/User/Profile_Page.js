const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Profile_Page_Controller = require("../../Controller/Both/Profile_Page.js");

router.post(
	"/User/Profile_Page",
	verifyToken,
	User_Profile_Page_Controller.view
);
module.exports = router;
