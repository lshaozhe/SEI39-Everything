const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
        <body>
            <h1>99 little bugs in the code</h1>
            <h1>99 litt1e bugs</h1>
            <h1> <a href="/98">Take one down</a><h1>
            <h1> <a href="/99/boom">Patch it around</a><h1>
            <h1>99 bugs in the code</h1>
        <body>
    </html>
`);
});

app.get("/:bugsLeft", (req, res) => {
  if (req.params.bugsLeft >= 0) {
    res.send(`
        <html>
              <body>
                <h1>${req.params.bugsLeft} little bugs in the code</h1>
                <h1>${req.params.bugsLeft} litt1e bugs</h1>
                <h1> <a href="/${req.params.bugsLeft - 1}">Take one down</a><h1>
                <h1> <a href="/${
                  req.params.bugsLeft - 1
                }/boom">Patch it around</a><h1>
                <h1>${req.params.bugsLeft} bugs in the code</h1>
              <body>
          </html>
      `);
  } else {
    res.send(`
    <html>
        <body>
            <h1>99 little bugs in the code</h1>
            <h1>99 littke bugs</h1>
            <h1> <a href="/98">Take one down</a><h1>
            <h1> <a href="/98/boom">Patch it around</a><h1>
            <h1>99 bugs in the code</h1>
        <body>
    </html>
`);
  }
});

app.get("/:bugsLeft/boom", (req, res) => {
  if (req.params.bugsLeft >= 0) {
    const random = Math.random() * parseInt(req.params.bugsLeft);

    console.log({ random });

    const total = Math.round(parseInt(req.params.bugsLeft) + random);
    console.log({ total });

    const prev = Math.round(random);
    console.log({ prev });

    res.send(`
          <html>
                <body>
                  <h1>${req.params.bugsLeft} little bugs in the code</h1>
                  <h1>${req.params.bugsLeft} litt1e bugs</h1>
                  <h1> <a href="/${req.params.bugsLeft}">Take one down</a><h1>
                  <h1> <a href="/${req.params.bugsLeft}/boom">Patch it around</a><h1>
                  <h1>${total} bugs in the code</h1>
                <body>
            </html>
        `);
  } else {
    res.send(`
      <html>
          <body>
              <h1>99 little bugs in the code</h1>
              <h1>99 littke bugs</h1>
              <h1> <a href="/98">Take one down</a><h1>
              <h1> <a href="/98/boom">Patch it around</a><h1>
              <h1>99 bugs in the code</h1>
          <body>
      </html>
  `);
  }
});

app.listen(5001, () => {
  console.log("I'm working!");
});
