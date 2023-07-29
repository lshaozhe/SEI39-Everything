[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# CRUD App with Mongoose - Create and Read

## Lesson Objectives

1. Initialize a directory
1. Start express
1. Create New Route
1. Create Create Route
1. Connect Express to Mongo
1. Create Fruits Model
1. Have Create Route Create data in MongoDB
1. Create Index Route
1. Have Index Route Render All Fruits
1. Have Create Route redirect to Index After Fruit Creation
1. Create Show Route
1. Have Index Page Link to Show Route
1. Create show.ejs

## Initialize a directory

1. Create a directory for the app in `student_examples` and `cd` into it
1. `npm init`
1. `npm install express`
1. `touch server.js`
1. Edit package.json to have `"main": "server.js",`

## Start express

```javascript
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("listening");
});
```

## Create Create Route

```javascript
app.post("/fruits/", (req, res) => {
  res.send("received");
});
```

1. Use express.urlencoded in server.js:

```javascript
app.use(express.urlencoded({ extended: true }));
```

Check to see if req.body works:

```javascript
app.post("/fruits/", (req, res) => {
  res.send(req.body);
});
```

Format data properly

```javascript
app.post("/fruits/", (req, res) => {
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  res.send(req.body);
});
```

## Connect Express to Mongo

1. `npm install mongoose`
1. Inside server.js:

```javascript
const mongoose = require("mongoose");

//... and then farther down the file
mongoose.connect("mongodb://localhost:27017/basiccrud", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
const Fruit = require("./models/fruits.js");
//... and then farther down the file
app.post("/fruits/", (req, res) => {
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.send(createdFruit);
  });
});
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruit.create(req.body, (error, createdFruit) => {
  res.redirect("/fruits");
});
```

## Create Show Route

```javascript
app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.send(foundFruit);
  });
});
```
---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
