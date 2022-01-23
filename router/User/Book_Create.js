const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Book_Create = require("../../Controller/User/Book_Create");

router.post("/User/Book_Create", verifyToken, Book_Create.create);
module.exports = router;
