const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<html>
      <body>
          <h1>99 Bottles of beer on the wall</h1>
          <a href="/98">take one down, pass it around</a>
          <br />
          <h1> 99 little bugs in the code
      </body>
  </html>`);
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles == 0) {
    res.send(`<html>
        <body>
            <h1>No more bottles of beer on the wall</h1>
            <a href="/">Start over</a>
            <br />
            <h1> No more bugs in the code
        </body>
    </html>`);
  } else {
    // 50% chance to be lucky and get -1 bugs
    function testWhetherlucky() {
      if (Math.round(Math.random() * 9) < 5) {
        return true;
      } else {
        return false;
      }
    }
    const islucky = testWhetherlucky();

    res.send(`<html>
  <body>
      <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
      <a href="/${
        req.params.number_of_bottles - 1
      }">take one down, pass it around</a>
      <br />
      <h1> ${
        islucky
          ? req.params.number_of_bottles - 1
          : req.params.number_of_bottles
      } bugs in the code
  </body>
</html>`);
  }
});

app.listen(5001);
