const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../JWT_Token/Token_Verify_Supporter");
const Genre_Create = require("../../Controller/Supporter/Genre_Create");

router.post("/Supporter/Genre_Create", verifyToken, Genre_Create.create);
module.exports = router;
