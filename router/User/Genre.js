const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Genre_All = require("../../Controller/Both/Genre_all");

router.post("/User/Genre_All", verifyToken, Genre_All.view_all);
module.exports = router;
