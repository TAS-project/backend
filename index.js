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

//models
const User = require("./models/User");
const Supporter = require("./models/Supporter");
const Book = require("./models/Book");
const Genre = require("./models/Genre");
const Chapter = require("./models/Chapter");
const Comment = require("./models/Comment");
const Review = require("./models/Review");
const Rating = require("./models/Rating");
const Bookmark = require("./models/Bookmark");
const User_Follow = require("./models/User_Follow");
const Book_Genre = require("./models/Book_Genre");
const Intrested_Genre = require("./models/Intrested_Genre");

//routers
const User_Route = require("./router/User/User_auth");
const Supporter_Route = require("./router/Supporter/Supporter_auth");

// json
app.use(User_Route);
app.use(Supporter_Route);
