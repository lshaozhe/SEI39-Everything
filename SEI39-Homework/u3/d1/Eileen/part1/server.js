//Greetings
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/greeting/:name", (req, res) => {
  //   res.json("hello, stranger");
  res.json(`${req.params.name}! Its so great to see you!`);
});

//Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.json(Number((req.params.total * req.params.tipPercentage) / 100));
});

//Magic 8 Ball
const response = [
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

const random = response[Math.ceil(Math.random() * response.length - 1)];
app.get("/magic/:question", (req, res) => {
  res.send(`<html>
  <body>
  <h1>${req.params.question}</h1>
  <h1>${random}</h1>
  </body>
    </html>`);
});

app.listen(5001);