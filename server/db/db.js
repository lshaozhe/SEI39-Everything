const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/aidha";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
