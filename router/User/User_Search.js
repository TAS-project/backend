const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Search_Controller = require("../../Controller/Both/Search");

router.post("/User/Search", verifyToken, User_Search_Controller.search);
module.exports = router;
