/* =======================
SET UP EXPRESS
======================= */

// import express library
const express = require("express");

// create a express application and save to variable "app"
const app = express();

/* =======================
GREETING
======================= */
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger");
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Hola ${req.params.name}`);
})

/* =======================
TIP CALCULATOR
======================= */

app.get("/tip/:total/:tipPercentage", (req, res) => {

    const tipAmount = req.params.total * req.params.tipPercentage / 100;
    res.json(tipAmount)
})

/* =======================
MAGIC 8 BALL
======================= */

const generateRandomInteger = (limit) => {
    return Math.floor(Math.random() * limit);
}

app.get("/magic/:question", (req, res) => {

    const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    const randomIndex = generateRandomInteger(magic8BallResponses.length);

    // res.json({question: req.params.question, response: magic8BallResponses[randomIndex]})

    res.send(`
        <html>
            <body>
                <h1>Question: ${req.params.question}</h1>
                <h1>Response: ${magic8BallResponses[randomIndex]}</h1>
            </body>
        </html>
    `);
})

/* =======================
IDENTIFY PORT FOR APP TO LISTEN TO
======================= */

// save port to a variable
const PORT = process.env.PORT || 5001;

// tells the server which port to listen to
app.listen(PORT);