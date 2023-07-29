const Flowers = require("../models/Flowers");
const { validationResult } = require("express-validator");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomString = (length) => {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const seedFlowers = async (req, res) => {
  await Flowers.deleteMany({});

  await Flowers.create(
    [
      { id: 1, name: "Rose", colour: "red" },
      { id: 2, name: "Lily", colour: "white" },
      { id: 3, name: "Orchid", colour: "pink" },
      { name: getRandomString(20), colour: getRandomString(20) },
    ],

    (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(400).json({ status: "error", message: "seeding error" });
      } else {
        res.json({ status: "ok", message: "seeding successful" });
      }
    }
  );
};

const getFlowers = async (req, res) => {
  const allFlowers = await Flowers.find();

  res.json(allFlowers);
};

const postFlowers = async (req, res) => {
  const flower = await Flowers.find({ name: req.body.name }).select("name colour");

  res.json(flower);
};

const putFlowers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const createdFlower = new Flowers({
    name: req.body.name,
    colour: req.body.colour,
  });

  try {
    await createdFlower.save();
  } catch (err) {
    console.error(err.message);
  }
  res.json({ status: "ok", message: "saved" });
};

const deleteFlowers = async (req, res) => {
  await Flowers.findByIdAndDelete(req.params.id);

  res.json({ status: "ok", message: "deleted" });
};

module.exports = {
  seedFlowers,
  getFlowers,
  postFlowers,
  putFlowers,
  deleteFlowers,
};
