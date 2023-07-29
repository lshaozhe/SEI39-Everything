const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    time: {
      type: Date,
      require: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    audience: {
      type: [String],
    },
    organisation: {
      type: String,
    },
    address: {
      type: String,
    },
    isRecurring: {
      type: String,
    },
  },

  { collection: "Appointments" }
);

const Appointment = mongoose.model("Appointments", AppointmentSchema);

module.exports = Appointment;
