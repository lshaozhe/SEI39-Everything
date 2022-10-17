const express = require("express");
const router = express.Router();
const { validatePut } = require("../validation/flowers");
const {
  seedFlowers,
  getFlowers,
  postFlowers,
  putFlowers,
  deleteFlowers,
} = require("../controllers/flowers");

router.get("/api/seed", seedFlowers);
router.get("/api/flowers", getFlowers);
router.post("/api/flowers", postFlowers);
router.put("/api/flowers", validatePut, putFlowers);
router.delete("/api/flowers", deleteFlowers);

module.exports = router;
