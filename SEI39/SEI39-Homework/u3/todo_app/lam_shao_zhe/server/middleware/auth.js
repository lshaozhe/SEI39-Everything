require("dotenv").config();

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ status: "error", message: "unauthorised" });
    }
  } else {
    return res.status(403).json({ status: "error", message: "missing token" });
  }
};

module.exports = auth;
