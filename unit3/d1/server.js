require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors()); // cors("https://home.com")

const flowers = [
  { id: 1, name: "Rose", colour: "red" },
  { id: 2, name: "Lily", colour: "white" },
  { id: 3, name: "Orchid", colour: "pink" },
]; //returning json always is an array of objects

app.get("/", (req, res) => {
  // res.send("hello");
  res.sendFile(path.join(__dirname, "public", "index.html")); //to cater to mac or windows which uses \ or /
}); //can response .json files too, which is more common

app.get("/api/flowers", (req, res) => {
  res.json(flowers);
});

app.get("/api/flowers/:id", (req, res) => {
  // res.json(flowers.filter((flower) => flower.id == req.params.id));

  const found = flowers.some((flower) => flower.id == req.params.id);

  if (found) {
    res.json(flowers.filter((flower) => flower.id == req.params.id));
  } else {
    res.status(400).json({ msg: `No flower with id ${req.params.id}.` });
  }
  //just note res is like a return, there can only be 1
});

//queries
app.get("/api2/flowers", (req, res) => {
  res.json({ one: req.query.one, two: req.query.two });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//npm init -y
//npm i express
//npm i -D nodemon
//npm i dotenv cors

//rmb to create scripts for nodemon server
