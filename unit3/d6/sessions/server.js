require("dotenv").config(); //read env file first

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./router/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET, //for encryption to identify user
    resave: false, //to not create a new session on refresh for same user
    saveUninitialized: false, //no update dont save the thing
    maxAge: 24 * 60 * 60 * 1000, //in milisec, before it expires
    store: store,
  })
);

app.use("/users", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT);

//npm i express cors dotenv mongoose express-session bcrypt nodemon
//npm i connect-mongodb-session //for persistent session storage on DB, else session will be stored in server
