require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { truncate } = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/greeting", (req, res) => {
  res.send("hello stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tipAmount = (req.params.total * req.params.tipPercentage) / 100;
  res.send("Your tip would be $" + tipAmount);
});

app.get("/magic/:userQuestion", (req, res) => {
  const array8 = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  res.send(`
        <p>${req.params.userQuestion}</p>
        <h1>${array8[Math.round(Math.random() * array8.length)]}</h1>
  `);
});

app.get("/fibbonaci/:num", (req, res) => {
  function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return s * s == x;
  }
  const checkFibb = (n) => {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  };

  res.send(
    `number ${req.params.num}` +
      (checkFibb(req.params.num) ? "very good it is fibbonaci" : "not a fibbo")
  );
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`app is running at port : ${PORT}`);
});
