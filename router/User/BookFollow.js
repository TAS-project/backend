const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Book_Follow_Controller = require("../../Controller/User/Book_Follow");

router.post("/User/BookFollow", verifyToken, Book_Follow_Controller.toggle);

module.exports = router;
