const mongoose = require("mongoose");

const FlowersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    colour: { type: String, required: true },
  },
  { collection: "flowers" }
);

const Flowers = mongoose.model("Flowers", FlowersSchema);

module.exports = Flowers;
