const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Comment_Write_Controller = require("../../Controller/User/Comment");
const Comment_Controller = require("../../Controller/Both/Comment");

router.post("/User/Comment_Write", verifyToken, Comment_Write_Controller.write);
router.post("/User/Comment_View", verifyToken, Comment_Controller.view);
module.exports = router;
