const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Chapter_View = require("../../Controller/Both/Chapter_View");

router.post("/User/Chapter_View", verifyToken, Chapter_View.view);
module.exports = router;
