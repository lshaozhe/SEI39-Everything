const express = require("express");
const Budget = require("./Models/budget");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//index
app.get("/budgets", (req, res) => {
  res.json(Budget);
});

//show
app.get("/budgets/:index", (req, res) => {
  res.json(Budget[req.params.index]);
});

//create
app.post("/budgets", (req, res) => {
  Budget.push(req.body);
  res.json(Budget);
});

app.get("/bankaccount", (req, res) => {
  let sum = 0;
  for (const element of Budget) {
    sum = sum + element.amount;
  }
  console.log(sum);
  res.send(`Bank account has ${sum}`);
});

app.listen(5001);
