require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const router = require("./router/router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

app.use("/api", router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log("server started on PORT: ", PORT));
