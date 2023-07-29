require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const plants = require("./router/plants");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

app.use("/api", plants);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log("listening on port:", PORT));
