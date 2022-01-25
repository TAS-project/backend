# TAS : a website for reading and writing books

Hi, welcome to TAS (The Authors Society)
in this website you can read the books of people who are members of TAS.
you can even write your own book. books can published chapter by chapter.
you can follow the members and their books and become followed by them.
after sign up in TAS, you can upload your profile image or edit your informations, create new book and you can see your books there.
for creating book you should choose a Genre for it . you can search book and members so easily.
on your home feed, you can see the latest published chapter of the book you followed and by clicking on book name you will be referred to the
book's profile page. and by clicking on writer's name you will referred to his/her profile.

# how to run code of frontend and backend in your vscode

run step 1 and 2 together to see the resut.

1- Step 1 : clone frontend

make a folder you want to put the frontend react js code which cloned from github in it.
open TAS-project in github and clone master branch of frontend repository with this script :
`git clone {the url of master branch of frontend repo}`
when you clone frontend :
if you use npm, you should first run the script `npm start` which installs the required dependencies. after that
then run `npm start` to run the React project and show the result in browser.
if you use yarn, you should first run the script `yarn build ` and `yarn start`.
</br>
</br>
</br>
</br>
2- Step 2 : Clone backend

make a folder you want to put the backend react js code which cloned from github in it.
open TAS-project in github and clone backend repository with this script :
`git clone {the url of backend repo}`
when you clone backend :
if you use npm, you should first run the script `npm install` which installs the required dependencies. after that
then run `node index.js` to run the server.
if you use yarn, you should first run the script `yarn build ` and `node index.js`.

this project used MYSQL as database:
1- install MYSQL
2- install HeidiSQL to make tables
3- install postman to notice the inputs that should be send to backend and token given from backend.

</br>
</br>
Pay attention to .env file, this file is loaded with your most important data.

PORT, SQL_PORT, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE, HOST, DIALECT PHOTOS_PREFIX

You need to fill these values with corect inputs in order to create and use database and back end.

</br>
create a data base table and
after npm install `uncomment the line 21 of index.js` to create database tables.

then run this script for seeders:
</br></br></br>
`npx sequelize-cli db:seed --seed Seeder_Users Seeder_Genres Seeder_Books Seeder_Book_Genres Seeder_Chapter Seeder_Comment Seeder_Follow_User Seeder_Bookmark`

</br>
</br>
Now your database is loaded with data

Enjoy our website ;)
