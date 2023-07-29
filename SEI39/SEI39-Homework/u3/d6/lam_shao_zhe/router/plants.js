const express = require("express");
const router = express.Router();
const {
  seedPlants,
  createPlant,
  getAllPlants,
  getPlantByID,
  updatePlant,
  deletePlant,
} = require("../controllers/plants");

router.get("/test", (req, res) => {
  res.json("GET test request");
});

router.get("/seed", seedPlants);
router.post("/create", createPlant);
router.get("/all", getAllPlants);
router.get("/plant/:id", getPlantByID);
router.put("/update/:id", updatePlant);
router.delete("/delete/:id", deletePlant);

module.exports = router;
