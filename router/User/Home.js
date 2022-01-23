const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Home_Controller = require("../../Controller/User/Home");

router.post("/User/Home", verifyToken, User_Home_Controller.Home_get);
module.exports = router;
