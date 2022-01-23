const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Chapter_Create = require("../../Controller/Both/Chapter_Create");

router.post("/User/Chapter_Create", verifyToken, Chapter_Create.create);
module.exports = router;
