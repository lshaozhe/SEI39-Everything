// Greetings

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.listen(5001, () => {});

// Tip Calculator

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    `Based on a bill of $${req.params.total}, your tip is $${
      req.params.total * (req.params.tipPercentage / 100)
    }`
  );
});

// Magic 8 Ball

const eightBallArray = [
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

app.get("/magic/:question", (req, res) => {
  res.send(`
    <html>
    <body>
    <h2>${req.params.question}?</h2>
    <h3>${
      eightBallArray[Math.floor(Math.random() * eightBallArray.length)]
    }</h3>
    </body>
    </html>
    `);
});

// Fibonacci

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

  const number = req.params.number;
  if (fibonacciCheck(number)) {
    res.send(`Very good. It is Fibonacci.`);
  } else {
    res.send(`I can tell this is not a fibonacci number.`);
  }
});
