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

//Schema is the structure of data, model is what you will get back

// const flowers = [
//   { id: 1, name: "Rose", colour: "red" },
//   { id: 2, name: "Lily", colour: "white" },
//   { id: 3, name: "Orchid", colour: "pink" },
// ];

// module.exports = flowers;
