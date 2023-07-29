const express = require("express");

const app = express();

// Greetings
app.get("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`What's up, ${req.params.name}`);
});

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage;

  const tipAmount = total * (tipPercentage / 100);

  res.send(`${tipAmount}`);
});

// Magic 8 Ball
app.get("/magic/:question", (req, res) => {
  const question = req.params.question;

  const answer = [
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

  res.send(
    `<html>
        <body>
            <h1>Question: ${question}</h1>
            <h1>Answer: ${answer[Math.floor(Math.random() * 20)]}</h1>
        </body>
    </html>`
  );
});

app.listen(5001);
