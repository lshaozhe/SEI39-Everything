const mongoose = require("mongoose");

const languagesSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    en: {
      type: Object,
      required: true,
    },
    bu: {
      type: Object,
      required: true,
    },
  },
  { collection: "Languages" }
);

const languages = mongoose.model("languages", languagesSchema);

module.exports = languages;
