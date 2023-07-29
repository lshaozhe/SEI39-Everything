const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <body>
  <h1>99 bottles of beer on the wall</h1>
  <a href='/98'>Take one down, pass it around</a>
  </body>
  </html>
  `);
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles > 0) {
    const random = Math.random();
    if (random < 0.95) {
      res.send(`
    <html>
    <body>
    <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
    <a href='/${
      req.params.number_of_bottles - 1
    }'>Take one down, pass it around</a>
    </body>
    </html>
    `);
    } else {
      res.send(`
    <html>
    <body>
    <h1>${
      parseInt(req.params.number_of_bottles) + 10
    } bottles of beer on the wall</h1>
    <h3>10 extra bottles magically appeared!</h3>
    <a href='/${
      parseInt(req.params.number_of_bottles) + 10 - 1
    }'>Take one down, pass it around</a>
    </body>
    </html>`);
    }
  } else if (req.params.number_of_bottles == 0) {
    res.send(`
    <html>
    <body>
    <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
    <a href='/'>Restart</a>
    </body>
    </html>
    `);
  } else {
    res.send(`
    <html>
    <body>
    <h1>Error: invalid input</h1>
    <a href='/'>Back to home</a>
    </body>
    </html>`);
  }
});

app.listen(5001, () => {});
