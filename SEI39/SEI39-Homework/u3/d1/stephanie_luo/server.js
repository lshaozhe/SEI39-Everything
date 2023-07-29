// require("dotenv").config();

const express = require("express");
// const cors = require("cors");

const app = express();
// app.use(cors());

app.use("/greeting/:name", (req, res) => {
  console.log(req.params.name);
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}`);
});

app.use("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

app.use("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage);
  const tipPaid = total * (tipPercentage / 100);
  res.send(`Tip paid: $${tipPaid}`);
});

////////////////////////////////////////////////////////////
// ==================== Magic 8 Ball ==================== //

app.use("/magic/:question", (req, res) => {
  const question = req.params.question;
  const responseArr = [
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
  const randomRes = responseArr[Math.floor(Math.random() * responseArr.length)];
  console.log(randomRes);

  res.send(`${question}? </br> <h1>${randomRes}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));
