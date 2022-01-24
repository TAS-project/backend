const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const Chapter = require("../../Controller/Both/Chapter");

router.post("/User/Chapter_Create", verifyToken, Chapter.create);
router.post("/User/Chapter_View", verifyToken, Chapter.view);
router.post("/User/Chapter_Edit", verifyToken, Chapter.edit);
module.exports = router;
