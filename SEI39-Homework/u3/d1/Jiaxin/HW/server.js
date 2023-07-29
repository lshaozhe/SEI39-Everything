const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.json(`Wow! Hello there, ${req.params.name}`);
});
/* Greeting express application created. */

app.get("/tip", (req, res) => {
  res.send("tip");
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let totaltip =
    parseFloat(req.params.total) * (parseFloat(req.params.tipPercentage) / 100);
  res.json(
    `The total is ${req.params.total} , the tip percentage is ${req.params.tipPercentage} and the total tip is ${totaltip}`
  );
});
/*Tip Calculator express application created.*/

// app.get("/magic", (req, res) => {
//   res.send("magic");
// });
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
  // res.json(` ${req.params.question}`);
  res.send(` ${req.params.question}
  <html>
      <body>
          <h1>${response[Math.floor(Math.random() * 21)]}</h1>
      </body>
  </html>
`);
});
/*Magic 8 Ball express application created.*/

app.listen(5001);
