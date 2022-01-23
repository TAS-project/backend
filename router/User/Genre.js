const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_User");
const tmp_Genre_Create = require("../../Controller/Supporter/Genre_Create");
const Genre_All = require("../../Controller/Both/Genre_all");

router.post("/User/Genre_Create", verifyToken, tmp_Genre_Create.create);
// router.post("/User/Genre_All", verifyToken, Genre_All.view_all);
module.exports = router;
