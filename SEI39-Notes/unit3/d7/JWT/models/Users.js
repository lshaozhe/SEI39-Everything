const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    hash: {
      type: String,
      require: true,
    },
  },
  { collection: "users" }
);

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
