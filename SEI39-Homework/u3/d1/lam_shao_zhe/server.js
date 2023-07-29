const express = require("express");

const app = express();

//Greetings
app.get("/greeting/:name", (req, res) => {
  res.send(`hello, ${req.params.name}`);
});

//Tip Calculator
app.get("/tipcalculator/:param1/:param2", (req, res) => {
  let total = (req.params.param1 * req.params.param2) / 100;
  res.send(`${total}`);
});

//Magic 8 Ball
app.get("/magic/:param1", (req, res) => {
  const array = [
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
  let random = Math.floor(Math.random() * array.length);

  res.send(`
  <h1>${req.params.param1}</h1>
  <h2>${array[random]}</h2>`);
});

//Fibonnaci - any number, n, is fibonnaci if it is a perfect sqrt of (5*n*n+-4)
function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

app.get("/fibonnaci/:param1", (req, res) => {
  let n = req.params.param1;

  if (isPerfectSquare(5 * n * n - 4) || isPerfectSquare(5 * n * n + 4)) {
    res.send(`Very good. ${n} is Fibonacci`);
  } else {
    res.send(`I can tell ${n} is not a fibonacci number`);
  }
});

app.listen((PORT = 5001), () => console.log(`Server running on ${PORT}`));
