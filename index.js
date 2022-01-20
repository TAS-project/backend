const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./config/database");
sequelize.sync({ force: true });
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

//relations
User.hasMany(Book, { onDelete: "CASCADE" });
Book.belongsTo(User, { onDelete: "CASCADE" });

Book.hasMany(Chapter);
Chapter.belongsTo(Book);

Book.belongsToMany(Genre, { through: Book_Genre });
User.belongsToMany(User, { as: "Followed_User", through: User_Follow });

User.belongsToMany(Book, { through: Bookmark });
Book.belongsToMany(User, { through: Bookmark });

User.belongsToMany(Book, { through: Review });
User.belongsToMany(Book, { through: Rating });
User.belongsToMany(Chapter, { through: Comment });

User.belongsToMany(Genre, { through: Intrested_Genre });
Genre.belongsToMany(User, { through: Intrested_Genre });

//routers
const User_Route = require("./router/User/User_auth");
const Supporter_Route = require("./router/Supporter/Supporter_auth");
const Book_Profile = require("./router/User/book_profile");

// json
app.use(User_Route);
app.use(Supporter_Route);
app.use(Book_Profile);
