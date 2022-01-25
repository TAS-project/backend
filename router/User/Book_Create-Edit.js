const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Book_Create = require("../../Controller/User/Book_Create");
const Book_Edit = require("../../Controller/Both/Book_Edit");

router.post("/User/Book_Create", verifyToken, Book_Create.create);
router.post("/User/Book_Edit", verifyToken, Book_Edit.edit);
module.exports = router;
