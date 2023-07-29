require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send(`<p>99 Bottles of beer on the wall</p>
  <a href="/98">take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles != 0) {
    res.send(`<p>${req.params.number_of_bottles} Bottles of beer on the wall</p>
  <a href="/${
    req.params.number_of_bottles - 1
  }">take one down, pass it around</a>`);
  } else {
    res.send(`<a href="/">start over</a>`);
  }
});

app.get;

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
