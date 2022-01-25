const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Rate_Controller = require("../../Controller/User/Rate");

router.post("/User/Rate", verifyToken, User_Rate_Controller.Rate);
module.exports = router;
