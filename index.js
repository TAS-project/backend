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

//User
const User = require("./models/User");
const User_Route = require("./router/User/User_auth");
app.use(User_Route);

//Support_Team
const Support_Team = require("./models/Support_Team");
const Support_Team_Route = require("./router/Support_Team/support_team_auth");
app.use(Support_Team_Route);

//Book
const Book = require("./models/Book");
