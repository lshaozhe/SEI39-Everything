const express = require("express");
const path = require("path");

const app = express();

const superheroes = [
  { name: "Superman", powers: ["flight", "invulnerability", "x-ray vision"] },
  "Wonder Woman",
  "Black Panther",
];

const villian = [
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"],
  },
];

// app.use("/superheroes", express.static(path.join(__dirname, "superheroes")));

app.get("/superheroes", (req, res) => {
  res.send(superheroes);
});

app.get("/superheroes/:index", (req, res) => {
  res.send(`
  <h1>${superheroes[req.params.index].name}</h1>
  <ul>
  ${superheroes[req.params.index].powers.map((element) => {
    return `<li>${element}</li>`;
  })}
  </ul>`);
});

app.listen(5001);
