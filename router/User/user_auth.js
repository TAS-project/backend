const express = require("express");
const router = express.Router();
const User_Controller = require("../../Controller/User/User_auth");
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const User_Edit_Controller = require("../../Controller/User/User_Edit");

router.post("/User/register", User_Controller.register);
router.post("/User/login", User_Controller.login);
router.post("/User/Edit", verifyToken, User_Edit_Controller.edit);

module.exports = router;
