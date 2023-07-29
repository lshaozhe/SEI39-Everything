const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  seedAgents,
  createAgent,
  login,
  refresh,
  accessFittingRoom3,
} = require("../controller/kingsmenController");

router.get("/seed", seedAgents);
router.put("/create", createAgent);
router.post("/login", login);
router.post("/refresh", auth, refresh);
router.get("/room", auth, accessFittingRoom3);

module.exports = router;
