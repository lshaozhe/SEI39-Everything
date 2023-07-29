const express = require("express");

const app = express();

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger!");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(`${(req.params.total * req.params.tipPercentage) / 100}`);
});

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

app.get("/magic/:question", (req, res) => {
  res.send(`
  <html>
    <body>
        <h1>${req.params.question}</h1>
        <h1>${response[Math.floor(Math.random() * response.length)]}</h1>
    </body>
  </html>
  `);
});

app.get("/Fibonnaci/:number", (req, res) => {
  function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  function isFibonacci(numberToCheck) {
    return (
      isPerfectSquare(5 * numberToCheck * numberToCheck + 4) ||
      isPerfectSquare(5 * numberToCheck * numberToCheck - 4)
    );
  }

  if (isFibonacci(req.params.number)) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a fibonacci number.");
  }
});

app.listen(5001, () => {
  console.log("I'm listening");
});
