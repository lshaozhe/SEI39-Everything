const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `99 Bottles of beer on the wall </br></br> <a href="98">Take one down, pass it around</a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  const numOfBottles = req.params.number_of_bottles;

  if (numOfBottles == 0) {
    res.send(
      `${numOfBottles} Bottles of beer on the wall </br></br> <a href="99">Restart ?</a>`
    );
  } else {
    res.send(
      `${numOfBottles} Bottles of beer on the wall </br></br> <a href="${
        parseInt(numOfBottles) - 1
      }">Take one down, pass it around</a>`
    );
  }
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
