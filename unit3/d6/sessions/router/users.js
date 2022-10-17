const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Users = require("../models/Users");

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, user.hash);
    if (result) {
      req.session.email = user.email;
      req.session.userID = user.id;

      res.json({ status: "okay", message: "user logged in" });
    } else {
      req.session.email = null;
      req.session.userID = null;

      res.status(401).json({ status: "error", message: "login failed" });
    }
  } catch (err) {
    console.log("POST /users/login", err);
    res.status(400).json({ status: "error", message: "login failed" });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ status: "okay", message: "logged out" });
  });
});

router.put("/create", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ status: "error", message: "duplicate email" });
    }

    const hash = await bcrypt.hash(req.body.password, 12); //12 cycle encryption
    const createdUser = await Users.create({
      email: req.body.email,
      hash,
    });
    console.log("created user is: ", createdUser);
    res.json({ status: "okay", message: "user created" });
  } catch (err) {
    console.log("PUT /users/create", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
});

router.get("/users", auth, async (req, res) => {
  const users = await Users.find();

  res.json(users);
});

router.post("/users", auth, async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email }).select("email");
    if (!user) {
      console.log("user not found");
      return res.status(400).json({ status: "error", message: "user not found" });
    }
  } catch (err) {
    console.log("POST /users/user", err);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    await Users.deleteOne({ email: req.body.email });
    res.json({ status: "okay", message: "user deleted" });
  } catch (err) {
    console.log("DELETE /users/delete", err);

    res.status(400).json({ status: "error", message: "an error has occured" });
    //error msg to frontend are generic to prevent hacking
    //console logs the detailed error for debugging
  }
});

module.exports = router;
