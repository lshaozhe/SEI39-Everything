const express = require("express");
// const { check, validationResult } = require("express-validator");
// const { v4: uuidv4 } = require("uuid");
// const connectDB = require("./db/db");
// const Flowers = require("./models/Flowers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

app.listen(5001);
