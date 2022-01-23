const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Book_Profile = require("../../Controller/Both/Book_Profile");

router.post("/User/Book_Profile_View", verifyToken, Book_Profile.view);
module.exports = router;
