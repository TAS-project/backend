const express = require("express");
const router = express.Router();
const Support_Team_Controller = require("../../Controller/Support_Team/Support_Team_auth");

router.post("/Support_Team/register", Support_Team_Controller.register);
router.post("/Support_Team/login", Support_Team_Controller.login);
module.exports = router;
