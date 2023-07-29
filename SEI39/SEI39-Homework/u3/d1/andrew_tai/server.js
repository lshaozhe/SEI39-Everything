require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// ============== Greetings ================
app.get("/greeting", (req, res) => {
  res.send("Hello stranger.");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello ${req.params.name}.`);
});

// ============== Tip Calculator ================
app.get("/tip/:total/:percentage", (req, res) => {
  const tip =
    (parseInt(req.params.total) * parseInt(req.params.percentage)) / 100;

  res.send(`The tip amount is $${tip}.`);
});

// ============== Magic 8 Ball ================
app.get("/magic/:query", (req, res) => {
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

  const response = responses[Math.floor(Math.random() * responses.length)];
  const output = `<p>You asked: ${req.params.query}.</p>
<p>The Magic 8 Ball responds: ${response}.</p>`;

  res.send(output);
});

// ============== Take one Down and Pass it Around ================
app.get("/beer", (req, res) => {
  res.send(`
    <p>99 bottles of beer on the wall</p>
    <p>99 bottles of beer</p>
    <a href="/beer/98"><p>Take one down, pass it around</p></a>
    <p>98 bottles of beer on the wall</p>
    `);
});

app.get("/beer/:number_of_bottles", (req, res) => {
  switch (parseInt(req.params.number_of_bottles)) {
    case 2:
      res.send(`
              <p>${req.params.number_of_bottles} bottles of beer on the wall</p>
              <p>${req.params.number_of_bottles} bottles of beer</p>
              <a href="/beer/${
                parseInt(req.params.number_of_bottles) - 1
              }"><p>Take one down, pass it around</p></a>
              <p>${
                parseInt(req.params.number_of_bottles) - 1
              } bottle of beer on the wall</p>
              `);
    case 1:
      res.send(`
              <p>${req.params.number_of_bottles} bottle of beer on the wall</p>
              <p>${req.params.number_of_bottles} bottle of beer</p>
              <a href="/beer/${
                parseInt(req.params.number_of_bottles) - 1
              }"><p>Take one down, pass it around</p></a>
              <p>${
                parseInt(req.params.number_of_bottles) - 1
              } bottles of beer on the wall</p>
              `);
    case 0:
      res.send(`
              <p>${req.params.number_of_bottles} bottles of beer on the wall</p>
              <p>${req.params.number_of_bottles} bottles of beer</p>
              <a href="/beer"><p>Go to the shop, buy some more</p></a>
              <p>99 bottles of beer on the wall</p>
              `);
    default:
      res.send(`
              <p>${req.params.number_of_bottles} bottles of beer on the wall</p>
              <p>${req.params.number_of_bottles} bottles of beer</p>
              <a href="/beer/${
                parseInt(req.params.number_of_bottles) - 1
              }"><p>Take one down, pass it around</p></a>
              <p>${
                parseInt(req.params.number_of_bottles) - 1
              } bottles of beer on the wall</p>
              `);
  }
});

// ============== Fibonacci ================
app.get("/fibonacci/:num", (req, res) => {
  let prevNumber = 0;
  let number = 1;
  let nextNumber = 0;

  while (number <= req.params.num) {
    if (req.params.num == prevNumber || req.params.num == number) {
      res.send("Very good. It is Fabonacci.");
    }

    nextNumber = prevNumber + number;
    prevNumber = number;
    number = nextNumber;
  }
  res.send("I can tell this is not a fibonacci number.");
});

// ============== Fibonacci 2 ================
app.get("/fibonacci2/:number", (req, res) => {
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

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
