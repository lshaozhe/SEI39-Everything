const express = require("express");
const connectDB = require("./db/db");
const flowers = require("./router/flowers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api", flowers);

app.listen(5001);
