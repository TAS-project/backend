const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../JWT_Token/Token_Verify_User");
const Book_Profile = require("../../Controller/User/Book_Profile");


router.post("/User/Book_Profile_View", verifyToken, Book_Profile.view);
module.exports = router;
