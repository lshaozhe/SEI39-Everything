const express = require("express");
const { v4: uuidv4 } = require("uuid"); //destructuring, naming v4 in a variable called uuidv4
const { check, validationResult } = require("express-validator");
const Flowers = require("./models/Flowers");
const connectDB = require("./db/db");
const { ReturnDocument } = require("mongodb");

const app = express();

//below 2 lines are required for express to convert data inputs to json, else things will return undefined (middlewares)
app.use(express.json()); //parsed as JSON which is a string, this converts it to an object
app.use(express.urlencoded({ extended: false }));
connectDB();

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomString = (Length) => {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

app.get("/api/seed", async (req, res) => {
  await Flowers.deleteMany({});

  await Flowers.create(
    [
      { id: 1, name: "Rose", colour: "red" },
      { id: 2, name: "Lily", colour: "white" },
      { id: 3, name: "Orchid", colour: "pink" },
      { name: getRandomString(20), colour: getRandomString(20) },
    ],
    //can also use try catch outside to catch the same error
    (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(400).json({ status: "error", message: "seeding error" });
      } else {
        res.json({ status: "ok", message: "seeding successful" });
      }
    }
  );
});

app.get("/api/flowers", async (req, res) => {
  const allFlowers = await Flowers.find();

  res.json(allFlowers);
});

app.post("/api/flowers", async (req, res) => {
  const flower = await Flowers.find({ name: req.body.name }).select(
    "name colour"
  );
  //select can let you choose what you wanna show only

  res.json(flower);
});

//creation method 1
app.put("/api/flowers", async (req, res) => {
  await Flowers.create(req.body);

  res.json({ status: "ok", message: "saved" });
});

//creation method 2
app.put("/api/flowers", async (req, res) => {
  const createdFlower = new Flowers({
    name: req.body.name,
    colour: req.body.colour,
    //better control of data that goes in
  });

  try {
    await createdFlower.save();
    //create in method 1 performs the new class and save function
  } catch (err) {
    console.error(err.message);
  }
  res.json({ status: "ok", message: "saved" });
});

//delete method 1 - by params
app.delete("/api/flowers/:id", async (req, res) => {
  await Flowers.findByIdAndDelete(req.params.id);

  res.json({ status: "ok", message: "deleted" });
});

//delete method 2 - by body
app.delete("/api/flowers", async (req, res) => {
  const { id } = req.body;
  await Flowers.deleteOne({ id });

  res.json({ status: "ok", message: "deleted" });
});

//update
app.patch("/api/flowers", async (req, res) => {
  const response = await Flowers.updateOne(
    { name: req.body.name },
    { colour: req.body.newColour }
  );
  console.log(response);

  res.json({ status: "ok", message: "updated" });
});

// app.post(
//   "/api/flowers",
//   [
//     //in check, first param is the key, and second param is the error message
//     check("name", "name is required").not().isEmpty(),
//     check("colour", "colour is required").not().isEmpty(),
//     check(
//       "colour",
//       "colour must be longer than 5 characters but less than 15"
//     ).isLength({
//       min: 5,
//       max: 15,
//     }),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     //npm i uuid to allow unique id for id allocation in next line
//     //req.body.id = Math.random();
//     req.body.id = uuidv4();
//     Flowers.push(req.body);
//     res.json(Flowers);
//   }
// );

// app.delete("/api/flowers/:index", (req, res) => {
//   Flowers.splice(req.params.index, 1);
//   res.json(Flowers);
// });

// app.delete("/api/flowers/:id", (req, res) => {
//   const index = Flowers.findIndex((item) => item.id == req.params.id);
//   Flowers.splice(index, 1);
//   res.json(Flowers);
//   //last method is to use filter for array methods
// });

// app.delete("/api/flowers", (req, res) => {
//   for (let i = 0; i < Flowers.length; i++) {
//     if (Flowers[i].id == req.body.id) {
//       Flowers.splice(i, 1);
//       break;
//     }
//   }
//   res.json(Flowers);
// });

app.put("/api/flowers/:id", (req, res) => {
  for (let i = 0; i < Flowers.length; i++) {
    if (Flowers[i].id == req.params.id) {
      Flowers[i].name = req.body.name;
      Flowers[i].colour = req.body.colour;
      break;
    }
  }
  res.json(Flowers);
});

app.put("/api/flowers", (req, res) => {
  for (let i = 0; i < Flowers.length; i++) {
    if (Flowers[i].id == req.body.id) {
      Flowers[i] = req.body;
    }
  }
  res.json(Flowers);
});

//Validator
//npm i express-validator
//see codes in POST above
app.listen(5001);

//npm i mongoose
