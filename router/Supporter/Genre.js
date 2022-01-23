const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../Tools/JWT_Token/Token_Verify_Supporter");
const Genre_Create = require("../../Controller/Supporter/Genre_Create");
const Genre_All = require("../../Controller/Both/Genre_all");

router.post("/Supporter/Genre_Create", verifyToken, Genre_Create.create);
router.post("/Supporter/Genre_All", verifyToken, Genre_All.view_all);
module.exports = router;
