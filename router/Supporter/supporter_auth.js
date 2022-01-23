const express = require("express");
const router = express.Router();
const Supporter_Controller = require("../../Controller/Supporter/Supporter_auth");


router.post("/Supporter/register", Supporter_Controller.register);
router.post("/Supporter/login", Supporter_Controller.login);
module.exports = router;
