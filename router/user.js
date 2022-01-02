const express = require("express");
const router = express.Router();
const User_Controller = require("../user_controller/register");

router.post("/User/create", User_Controller.register);
module.exports = router;
