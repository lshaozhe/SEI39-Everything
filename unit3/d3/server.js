const express = require("express");
const { v4: uuidv4 } = require("uuid"); //destructuring, naming v4 in a variable called uuidv4
const { check, validationResult } = require("express-validator");
const Flowers = require("./models/Flowers");

const app = express();

//below 2 lines are required for express to convert data inputs to json, else things will return undefined (middlewares)
app.use(express.json()); //parsed as JSON which is a string, this converts it to an object
app.use(express.urlencoded({ extended: false }));

app.get("/api/flowers", (req, res) => {
  res.json(Flowers);
});

app.post(
  "/api/flowers",
  [
    //in check, first param is the key, and second param is the error message
    check("name", "name is required").not().isEmpty(),
    check("colour", "colour is required").not().isEmpty(),
    check("colour", "colour must be longer than 5 characters but less than 15").isLength({
      min: 5,
      max: 15,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //npm i uuid to allow unique id for id allocation in next line
    //req.body.id = Math.random();
    req.body.id = uuidv4();
    Flowers.push(req.body);
    res.json(Flowers);
  }
);

app.delete("/api/flowers/:index", (req, res) => {
  Flowers.splice(req.params.index, 1);
  res.json(Flowers);
});

app.delete("/api/flowers/:id", (req, res) => {
  const index = Flowers.findIndex((item) => item.id == req.params.id);
  Flowers.splice(index, 1);
  res.json(Flowers);
  //last method is to use filter for array methods
});

app.delete("/api/flowers", (req, res) => {
  for (let i = 0; i < Flowers.length; i++) {
    if (Flowers[i].id == req.body.id) {
      Flowers.splice(i, 1);
      break;
    }
  }
  res.json(Flowers);
});

app.put("/api/flowers/:id", (req, res) => {
  for (let i = 0; i < Flowers.length; i++) {
    if (Flowers[i].id == req.params.id) {
      Flowers[i].name = req.body.name;
      Flowers[i].colour = req.body.colour;
      break;
    }
  }
  res.json(Flowers);
});

app.put("/api/flowers", (req, res) => {
  for (let i = 0; i < Flowers.length; i++) {
    if (Flowers[i].id == req.body.id) {
      Flowers[i] = req.body;
    }
  }
  res.json(Flowers);
});

//Validator
//npm i express-validator
//see codes in POST above
app.listen(5001);
