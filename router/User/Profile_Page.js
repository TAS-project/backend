const express = require("express");
const router = express.Router();
const User_Profile_Page_Controller = require("../../Controller/Both/Profile_Page.js");

router.post("/User/Profile_Page", User_Profile_Page_Controller.view);
module.exports = router;
