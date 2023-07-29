//HTTP Verbs
// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static(path.join(__dirname, "public"))); //automatically looks for index.html if file is not specified
// app.use("/library", express.static(path.join(__dirname, "library")));

// app.listen(5001);

/*GET - read - read all
POST - create - read one
PATCH - update -update
PUT - update - create
DELETE - delete
POST PATCH PUT DELETE has body and can send data
POST should be used to send sensitive info - as it canot be read via url
GET is the only thing that can read url */

//MVC
// const Flowers = require("./models/Flowers");

// app.get("/api/flowers", (req, res) => {
//   res.json(Flowers);
// });

/* Model = database
Views = frontend/pages
Controllers = endpoints */

//Middleware
const express = require("express");
const app = express();
//Eg1
// app.use(logger);

// app.get("/", (req, res, next) => {
//   console.log("home");
//   res.json("home");
//   next();
// });

// app.use(logger2);

// app.get("/pages", (req, res) => {
//   res.json("pages");
// });

// function logger(req, res, next) {
//   console.log("before");
//   next();
//   console.log("after");
// }

// function logger2(req, res, next) {
//   console.log("before2");
//   next();
//   console.log("after2");
// }

//Eg2
//so this runs logger > logger 2 >logger 3> logger 2 > get
//the chain will return
//global use of middleware
app.use(logger);
app.use(logger2);

//local use of middleware - only runs on / path
app.get("/", logger2, (req, res, next) => {
  console.log("home");
  res.json(`home: ${req.data}`);
  next(); //will find the next middle ware to run
});

app.get("/pages", auth, (req, res) => {
  console.log(`Admin? ${req.admin}`);
  res.send("pages");
});

function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = "true";
    next();
    //return - can be added if next line dont put else
  } else {
    res.send("not authorised");
  }
}

function logger(req, res, next) {
  console.log("log");
  req.data = "some data";
  next();
}

function logger2(req, res, next) {
  console.log("log2");
  next();
}

app.listen(5001);
