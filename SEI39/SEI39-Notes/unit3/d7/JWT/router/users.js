const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const Users = require("../models/Users");

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, user.hash);
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }

    //JWT stuff here - rmb to setup postman to remember the tokens when sending requests
    const payload = {
      id: user._id,
      email: user.email,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    const response = {
      access,
      refresh,
    };

    res.json(response);
  } catch (err) {
    console.log("POST /users/login", err);
    res.status(400).json({ status: "error", message: "login failed" });
  }
});

router.post("/refresh", (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);

    const payload = { id: decoded.id, email: decoded.email };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      //.sign will automatically give the JWT header
      expiresIn: "20m",
      jwtid: uuidv4(), //gives you the jti
    });

    const response = {
      access,
    };

    res.json(response);
  } catch (err) {
    console.log("POST /sers/refresh", err);
    res.status(401).json({
      status: "error",
      message: "unauthorised",
    });
  }
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
