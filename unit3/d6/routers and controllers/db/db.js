const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/acme";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB connected");
  } catch (err) {
    console.error(err.message); //red text, for warn its yellow
    process.exit(1); //close down server
  }
};

module.exports = connectDB;
