const mongoose = require("mongoose");

const coursesLanguagesSchema = new mongoose.Schema(
  {
    page: {
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
  { collection: "coursesLanguages" }
);

const coursesLanguages = mongoose.model(
  "coursesLanguages",
  coursesLanguagesSchema
);

module.exports = coursesLanguages;
