// const { v4: uuidv4 } = require("uuid");
const Appointment = require("../model/Appointment");
const appointmentList = require("../model/seed");

const seedAppointments = async (req, res) => {
  await Appointment.deleteMany();

  await Appointment.create(appointmentList, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

const getAllAppointments = async (req, res) => {
  const allAppointments = await Appointment.find();

  res.json(allAppointments);
};

const createAppointment = async (req, res) => {
  try {
    await Appointment.create({
      title: req.body.title,
      time: req.body.time, //ISO format
      description: req.body.description,
      category: req.body.category,
      audience: req.body.audience,
      organisation: req.body.organisation,
      address: req.body.address,
      isRecurring: req.body.isRecurring,
    });
    console.log(`created new appointment: ${req.body.title} at ${req.body.time}`);
    // res.json({ status: "okay", message: "appointment created" });
    const allAppointments = await Appointment.find();

    res.json(allAppointments);
  } catch (err) {
    console.log("PUT /api/create", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.body.id);

    const allAppointments = await Appointment.find();

    res.json(allAppointments);
    // res.json({ status: "okay", message: "appointment deleted" });
  } catch (err) {
    console.log("DELETE /api/delete", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
};

const updateAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.body.id, {
      title: req.body.title,
      time: req.body.time, //ISO format
      description: req.body.description,
      category: req.body.category,
      audience: req.body.audience,
      organisation: req.body.organisation,
      address: req.body.address,
      isRecurring: req.body.isRecurring,
    });

    const allAppointments = await Appointment.find();

    res.json(allAppointments);
    // res.json({ status: "okay", message: "appointment updated" });
  } catch (err) {
    console.log("PATCH /api/update", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
};

const getOneAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.body.id);

    res.json([appointment]);
  } catch (err) {
    console.log("POST /api/getone", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
};

module.exports = {
  seedAppointments,
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
  getOneAppointment,
};
