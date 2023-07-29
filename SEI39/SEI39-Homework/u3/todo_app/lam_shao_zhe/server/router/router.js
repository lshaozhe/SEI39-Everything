const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const {
  seedAppointments,
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment,
  getOneAppointment,
} = require("../controller/appointments");

router.get("/seed", seedAppointments);
router.put("/create", createAppointment);
router.get("/getall", getAllAppointments);
router.patch("/update", updateAppointment);
router.delete("/delete", deleteAppointment);
router.post("/getone", getOneAppointment);

// router.post("/login", login);
// router.post("/refresh", auth, refresh);
// router.get("/room", auth, accessFittingRoom3);

module.exports = router;
