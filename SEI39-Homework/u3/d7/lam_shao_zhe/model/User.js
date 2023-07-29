const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    messages: {
      type: [String],
    },
  },

  { collection: "kingsmen" }
);

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
