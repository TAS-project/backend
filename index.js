const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// for working with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

const sequelize = require("./config/database");
// sequelize.sync({ force: true });

//static the folder
app.use("/Photos", express.static("Photos"));

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
User.belongsToMany(Chapter, { through: { model: Comment, unique: false } });

User.belongsToMany(Genre, { through: Intrested_Genre });
Genre.belongsToMany(User, { through: Intrested_Genre });

//routers
const User_Route = require("./router/User/User_Auth");
const Supporter_Route = require("./router/Supporter/Supporter_Auth");
const User_Book_Profile = require("./router/User/Book_Profile");
const User_Book_Create = require("./router/User/Book_Create");
const User_Home = require("./router/User/Home");
const Supporter_Genre = require("./router/Supporter/Genre");
const User_Genre = require("./router/User/Genre");
const User_UserFollow = require("./router/User/UserFollow");
const User_BookFollow = require("./router/User/BookFollow");
const User_Profile_Page = require("./router/User/Profile_Page.js");
const User_Chapter = require("./router/User/Chapter.js");
const User_Search = require("./router/User/User_Search");
const User_Comment = require("./router/User/Comment");
const User_Genre_All_Books = require("./router/User/Genre_All_Books");
const User_Rate = require("./router/User/Rate");
const user_upload_image = require("./router/User/user_upload_image.js");

// json
app.use(User_Route);
app.use(Supporter_Route);
app.use(User_Book_Profile);
app.use(User_Book_Create);
app.use(User_Home);
app.use(Supporter_Genre);
app.use(User_Genre);
app.use(User_UserFollow);
app.use(User_Profile_Page);
app.use(User_Chapter);
app.use(User_BookFollow);
app.use(User_Search);
app.use(User_Comment);
app.use(User_Genre_All_Books);
app.use(User_Rate);
app.use(user_upload_image);

const port = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(port, "0.0.0.0", () => {
	console.log("server is running");
});
