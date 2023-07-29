const mongoose = require("mongoose");

const MdwSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    workPermitLastThreeDigits: {
      type: String,
      required: true,
    },
    selectADate: {
      type: String,
      required: true,
    },
    studentDescription: {
      type: String,
      required: true,
    },
  },
  { collection: "Mdw" }
);

const Mdw = mongoose.model("Mdw", MdwSchema);

module.exports = Mdw;
