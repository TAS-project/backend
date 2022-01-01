const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

sequelize.sync({});
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log("server is running");
});

