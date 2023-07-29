const express = require("express");

const app = express();

//Bottle of Beers
app.get("/", (req, res) => {
  let count = 99;

  res.send(`
  <h1>${count} Bottles of beer on the wall</h1>
  <a href="./${count - 1}">take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
  let count = req.params.number_of_bottles;

  if (count > 0) {
    res.send(`
    <h1>${count} Bottles of beer on the wall</h1>
    <a href="./${count - 1}">take one down, pass it around</a>
   `);
  } else {
    res.send(
      `
    <h1>${count} Bottles of beer on the wall</h1>
    <a href="./">Back to home</a>`
    );
  }
});

//Bugs Count
app.get("/bugs/:count", (req, res) => {
  let count = req.params.count;
  count = count - 1 + Math.round(Math.random()) * Math.floor(Math.random() * 20);

  if (count > 0) {
    res.send(`
    <h1>${req.params.count} little bugs in the code</h1>
    <a href="./${count}">take one down</a>
   `);
  } else {
    res.send(`
      <h1>${req.params.count} little bug in the code</h1>
      <h1>no more bugs left</h1>
      <a href="./${Math.ceil(Math.random() * 100)}">Restart</a>
    `);
  }
});

app.listen((PORT = 5001), () => console.log(`Server running on ${PORT}`));
