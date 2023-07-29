const express = require("express");
const cors = require("cors");
const path = require("path");
const e = require("express");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(`<html>
    <body>
    <h1>99 bottles of beer on the wall</h1>
    <a href="http://localhost:5002/98">Take one down, pass it around</a>
    </body>
      </html>`);
});

app.get("/:number_of_bottles", (req, res) => {
  if (Number(req.params.number_of_bottles) > 0) {
    res.send(`<html>
    <body>
    <h1>${req.params.number_of_bottles}Bottles of beer on the wall.</h1>
    <a href="/${
      req.params.number_of_bottles - 1
    }">take one down, pass it around</a>
    </body>
      </html> `);
  } else {
    res.send(`<html>
    <body>
    <a href="/">start all over</a>
    </body>
    </html> `);
  }
});

app.listen(5002);
