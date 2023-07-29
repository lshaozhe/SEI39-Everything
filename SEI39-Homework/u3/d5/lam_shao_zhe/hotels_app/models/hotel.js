const mongoose = require("mongoose");

const HotelsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: String,
    rating: { type: Number, max: 5 },
    vacancies: Boolean,
    tags: [{ type: String }],
    rooms: [
      { roomNumber: Number, size: String, price: Number, booked: Boolean },
    ],
  },
  { collection: "hotels", timestamps: true }
);

const Hotels = mongoose.model("Hotels", HotelsSchema);

module.exports = Hotels;
