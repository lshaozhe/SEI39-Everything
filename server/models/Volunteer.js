const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    languagesSpoken: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    availableStartDate: {
      type: Date,
      required: true,
    },
    availableEndDate: {
      type: Date,
      required: true,
    },
    volunteerDescription: {
      type: String,
      required: true,
    },
    referralChannel: {
      type: String,
      required: true,
    },
    questionsOrNotes: {
      type: String,
    },
    attendedOrientation: {
      type: Boolean,
      required: true,
    },
    privacyPolicyAgreement: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "Volunteer" }
);

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);

module.exports = Volunteer;
