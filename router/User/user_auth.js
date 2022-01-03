const express = require("express");
const router = express.Router();
const User_Controller = require("../../Controller/User/User_auth");

router.post("/User/register", User_Controller.register);
router.post("/User/login", User_Controller.login);
module.exports = router;
