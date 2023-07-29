const express = require("express");
const fruits = require("./fruits");
const PORT = process.env.PORT || 8000;
const app = express();

app.get("/ping", (req, res) => {
  res.json("pong");
});

//Adding Basic Routes
app.get("/greet/:name", (req, res) => {
  res.send(`Why hello there, ${req.params.name}`);
});

app.get("/five", (req, res) => {
  const arr = [1, 2, 3, 4, 5];
  res.send(`${arr}`);
});

app.get("/evens/:n", (req, res) => {
  const num = parseInt(req.params.n);
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  res.send(`${arr}`);
});

app.get("/namelength/:name", (req, res) => {
  const name = req.params.name;
  let namelength = name.length;
  res.send(`${namelength}`);
});

//Fruit Routes
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

//Bonus
app.get("/fruits/sort", (req, res) => {
  let arr = fruits.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  res.json(arr);
});

app.get("/fruits/:name", (req, res) => {
  const fruit = req.params.name;
  for (const element of fruits) {
    if (element.name.toLowerCase() === fruit.toLowerCase()) {
      res.send(element);
    }
  }
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));
