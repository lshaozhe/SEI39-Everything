const mongoose = require("mongoose");

const db =
  "mongodb+srv://Aidha:ProjectAidha@generalassemblysei39.tmyffvm.mongodb.net/?retryWrites=true&w=majority";

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
