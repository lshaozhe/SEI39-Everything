const express = require("express");

const connectDB = require("./db/db");
const Hotels = require("./models/hotel");
const seed = require("./models/seed");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

//SEEDING DATA
app.get("/api/seed", async (req, res) => {
  await Hotels.deleteMany({});

  await Hotels.create(seed, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
});

//CRUD stuff
//C - PUT
app.put("/api/hotel", async (req, res) => {
  const createdHotel = new Hotels({
    name: req.body.name,
    rating: req.body.rating,
    vacancies: req.body.vacancies,
    rooms: req.body.rooms,
    tags: req.body.tags,
  });

  try {
    await createdHotel.save();
  } catch (err) {
    console.error(err.message);
  }
  res.json({ status: "ok", message: "saved" });
});

//R - GET
//GET all hotels
app.get("/api/hotels", async (req, res) => {
  const allHotels = await Hotels.find();

  res.json(allHotels);
});

//GET all hotels name only
app.get("/api/hotel", async (req, res) => {
  const allHotels = await Hotels.find({}, { name: 1 });

  res.json(allHotels);
});

//GET match 1 param
app.get("/api/hotels/location/:param1", async (req, res) => {
  const allHotels = await Hotels.find({ location: req.params.param1 });

  res.json(allHotels);
});

//GET hotels with vacancy
app.get("/api/hotels/vacant", async (req, res) => {
  const allHotels = await Hotels.find({ vacancies: true }, { rating: 0 });

  res.json(allHotels);
});

//U
app.patch("/api/hotel/update", async (req, res) => {
  const result = await Hotels.updateOne(
    { name: req.body.name },
    { rating: req.body.newRating }
  );

  res.json(result);
});

app.patch("/api/hotel/update/toggleroomboolean", async (req, res) => {
  const result = await Hotels.updateOne(
    { name: req.body.name },
    { vacancies: req.body.newBoolean }
  );

  res.json(result);
});

//D
//Delete by body
app.delete("/api/hotel/delete", async (req, res) => {
  const allHotel = await Hotels.deleteOne({ name: req.body.name });

  res.json(allHotel);
});

app.listen(5001, () => {
  console.log("Server started!");
});
