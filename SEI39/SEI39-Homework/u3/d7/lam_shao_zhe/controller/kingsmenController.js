const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const Agents = require("../model/User");
const agentList = require("../model/seed");

const seedAgents = async (req, res) => {
  await Agents.deleteMany();
  console.log(agentList);

  await Agents.create(agentList, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

const createAgent = async (req, res) => {
  try {
    const agent = await Agents.findOne({ username: req.body.username });
    if (agent) {
      return res.status(400).json({ status: "error", message: "duplicate username" });
    }

    const password = await bcrypt.hash(req.body.password, 12); //12 cycle encryption
    const createdUser = await Agents.create({
      username: req.body.username,
      password,
      messages: req.body.messages,
    });
    console.log("created user is: ", createdUser);
    res.json({ status: "okay", message: "user created" });
  } catch (err) {
    console.log("PUT /users/create", error);
    res.status(400).json({ status: "error", message: "an error has occured" });
  }
};

const login = async (req, res) => {
  try {
    const agent = await Agents.findOne({ username: req.body.username });
    if (!agent) {
      return res.status(401).json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, agent.password);
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }

    //JWT stuff here
    const payload = {
      id: agent._id,
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
};

const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);

    const payload = { id: decoded.id, email: decoded.email };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const response = {
      access,
    };

    res.json(response);
  } catch (err) {
    console.log("POST /users/refresh", err);
    res.status(401).json({
      status: "error",
      message: "unauthorised",
    });
  }
};

const accessFittingRoom3 = async (req, res) => {
  res.json("Welcome to fitting Room 3");
};

module.exports = { seedAgents, createAgent, login, refresh, accessFittingRoom3 };
