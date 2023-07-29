const express = require("express");

const app = express();

// ========
// Greeting
// ========
app.get("/greeting", (req, res) => {
  res.send("Hello, stranger.");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow, hello there ${req.params.name}!`);
});

// ==============
// Tip Percentage
// ==============
app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(`${req.params.total * (req.params.tipPercentage / 100)}`);
});

// ============
// Magic 8 Ball
// ============
const responses = [
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

const randomResponse = Math.round(Math.random() * (responses.length - 1));

app.get("/magic/:question", (req, res) => {
  res.send(`<html>
    <body>
        <h1>Your Question Was: ${req.params.question}?</h1>
        <h1>${responses[randomResponse]}</h1>
    </body>
</html>`);
});

app.listen(5001);

// =========
// Fibonacci
// =========
app.get("/fibonacci/:number", (req, res) => {
  const isSquare = (num) => {
    let numRoot = parseInt(Math.sqrt(num));
    return numRoot * numRoot == num;
  };

  const fibonacciCheck = (num) => {
    if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
      return true;
    } else {
      return false;
    }
  };

  if (fibonacciCheck(req.params.number)) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a fibonacci number.");
  }
});
