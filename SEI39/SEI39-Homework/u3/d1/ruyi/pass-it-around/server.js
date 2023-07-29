/* =======================
SET UP EXPRESS
======================= */

const express = require("express");

const app = express();

/* =======================
ROUTES FOR GET
======================= */

// home page
app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>99 Bottles of beer on the wall</h1>
                <a href="http://localhost:${PORT}/98">Take one down, pass it around</a>
            <body>
        </html>
    `)
})

// bottles page from 0 to 98
app.get("/:number_of_bottles", (req, res) => {

    const currentId = req.params.number_of_bottles;

    const nextId = parseInt(req.params.number_of_bottles) - 1;

    if (currentId >= 1 && currentId <= 98) {
        res.send(`
            <html>
                <body>
                    <h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
                    <a href="http://localhost:${PORT}/${nextId}">Take one down, pass it around</a>
                <body>
            </html>
        `)
    } else if (currentId == 0) {
        res.send(`
            <html>
                <body>
                    <a href="http://localhost:${PORT}/">Start Over</a>
                <body>
            </html>
        `)
    } else {
        res.status(400).send("Invalid number of bottles");
    }

})

/* =======================
IDENTIFY PORT FOR APP TO LISTEN TO
======================= */

const PORT = process.env.port || 5001;

app.listen(PORT);