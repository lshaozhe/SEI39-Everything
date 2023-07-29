const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall
    <html>
        <body>
           <a href="http://localhost:5002/98"> <p></p>take one down, pass it around</a>
        </body>
    </html>
  `);
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles > 0) {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall
  <html>
      <body>
         <a href="http://localhost:5002/${
           req.params.number_of_bottles - 1
         }"> <p></p>take one down, pass it around</a>
      </body>
  </html>
`);
  } else {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall
    <html>
        <body>
           <a href="http://localhost:5002/"> <p></p>Home</a>
        </body>
    </html>
  `);
  }
});

app.listen(5002);
