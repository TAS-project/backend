const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./config/database");
sequelize.sync({});
const app = express();

const port = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(port, "0.0.0.0", () => {
	console.log("server is running");
});

// for working with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require("./models/User");

const UserRoute = require("./router/User_auth");
app.use(UserRoute);

const Book = require("./models/Book");
