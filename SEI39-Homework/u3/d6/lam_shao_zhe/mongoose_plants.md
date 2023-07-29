# Mongoose Plants API

![barnsely's](https://i.ytimg.com/vi/iGMGVpLMtMs/maxresdefault.jpg)

## Overview

In this deliverable we'll be building our very own custom API about plants! We'll be building it from the ground up to cover the entire process using `express.Router`.

## Instructions

### Setup

Let's start!

```sh
npm init -y
npm install mongoose
mkdir db models seed
touch db/index.js models/plant.js seed/plants.js
```

### Mongoose Database Connection

Inside our `db` folder we are going to use Mongoose to establish a connection to our MongoDB `plantsDatabase`:

/db/index.js

```js
const mongoose = require("mongoose");

let MONGODB_URI = "mongodb://127.0.0.1:27017/plantsDatabase";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
```

### Mongoose Schemas and Models

Although, MongoDB is schema-less, Mongoose allows us to write a schema for our plant model which makes it nice to know what is a plant in our database and what a plant "looks" like in our database:

/models/plant.js

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("plants", Plant);
```

Cool. We have a "blueprint" for what a plant is. Let's now use it and create plants.

### Seeding The Database

![seeding](https://animeshelter.com/wp-content/uploads/2018/02/qosplantmagic.gif)

/seed/plants.js

```js
const db = require("../db");
const Plant = require("../models/plant");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const plants = [
    {
      name: "Aloe Vera",
      description:
        "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png",
    },
    {
      name: "Snake Plant",
      description:
        "Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint Georges sword, mother-in-laws tongue, and vipers bowstring hemp, among other names.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
    },
    {
      name: "Areca palm",
      description:
        "Dypsis lutescens, also known as golden cane palm, areca palm, yellow palm, or butterfly palm, is a species of flowering plant in the family Arecaceae, native to Madagascar and naturalized in the Andaman...",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg",
    },
    {
      name: "Spider Plant",
      description:
        "Chlorophytum comosum, often called spider plant but also known as airplane plant, St. Bernards lily, spider ivy, ribbon plant, and hen and chickens is a species of perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg",
    },
    {
      name: "Dracaena",
      description:
        "Dracaena is a genus of about 120 species of trees and succulent shrubs. In the APG IV classification system, it is placed in the family Asparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae). It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg",
    },
    {
      name: "Weeping Fig",
      description:
        "Ficus benjamina, commonly known as weeping fig, benjamin fig or ficus tree, and often sold in stores as just ficus, is a species of flowering plant in the family Moraceae, native to Asia and Australia. It is the official tree of Bangkok.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/1280px-Ficus_benjamina2.jpg",
    },
    {
      name: "Peace Lily",
      description:
        "Spathiphyllum is a genus of about 40 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/1024px-Spathiphyllum_cochlearispathum_RTBG.jpg",
    },
    {
      name: "Bristlecone Pine",
      description:
        "Pinus longaeva, is among the longest-lived life forms on Earth. The oldest Pinus longaeva is more than 4,800 years old, making it the oldest known individual of any species.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gnarly_Bristlecone_Pine.jpg/1920px-Gnarly_Bristlecone_Pine.jpg",
    },
    {
      name: "Aconite",
      description:
        "Also known as wolfsbane or devils helmet, Aconitum is a genus of over 250 species of flowering plants belonging to the family Ranunculaceae. These herbaceous perennial plants are chiefly native to the mountainous parts of the Northern Hemisphere,growing in the moisture-retentive but well-draining soils of mountain meadows. Most species are extremely poisonous and must be dealt with very carefully.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Aconitum_variegatum_110807f.jpg",
    },
  ];

  await Plant.insertMany(plants);
  console.log("Created some plants!");
};
const run = async () => {
  await main();
  db.close();
};

run();
```

Awesome, so this plants "seed" file above is a script that, once executed, connects to the Mongo database and creates 7 plants in the plants collection.

Let's execute our plants seed file:

```shell
node seed/plants.js
```

So how do we know if it worked? We could drop into the `mongo` interactive shell and check:

```mongo
mongo
> use plantsDatabase
> db.plants.find()
> exit
```

### Express Server

Cool, enough Mongoose. Now, Express. Let's install Express and Nodemon for development:

```sh
npm install express
npm install nodemon --save-dev
```

Add the scripts to your `package.json`:

```sh
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
...
```

And now let's setup our express folders:

```sh
mkdir routes controllers
touch server.js routes/index.js controllers/index.js
```

Let's setup the root route:

/routes/index.js

```js
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

module.exports = router;
```

![root](https://mrtreeservices.com/wp-content/uploads/2017/04/How-to-Prevent-Roots-from-Damaging-Your-Pipes.jpg)

Inside of server.js:

```js
const express = require("express");
const routes = require("./routes");
const db = require("./db");

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 5001;

const app = express();

// app.use() middleware here ^ ///////////////////

app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
```

Test the route:

```sh
npm run dev
```

Test the root endpoint in your browser: http://localhost:3001/api/

- You should see something like this in your terminal:
  ```sh
  [nodemon] starting `node server.js`
  Listening on port: 5001
  Successfully connected to MongoDB.
  ```
- And something like this in your browser: `This is root!`

---

### Routes and Controllers

Good, now let's work on the controllers. Controllers are where we will set up all of our logic e.g. what does the API do when we want to create a new plant? Update a plant? etc.

#### createPlant

/controllers/index.js

```js
const Plant = require("../models/plant");

const createPlant = async (req, res) => {
  // codes here
};

module.exports = {
  createPlant,
};
```

Run the server again:

```sh
npm run dev
```

Cool. We have the logic to create a new plant. Now let's create a route on our server to connect the request with the controller:

/routes/index.js:

```js
const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

module.exports = router;
```

Use Postman to send a POST method to test the create route (http://localhost:3001/api/plants):

```js
{
    "name": "Test Plant",
    "description": "Test Description",
    "image": "https://testimage.com/plant.png"
}
```

- If it was successful, you should see something like this in Postman:

  ```js
  {
    "plant": {
      "_id": "5e38921e9c3bd077f50dc9a2",
      "name": "Test Plant",
      "description": "Test Description",
      "image": "https://testimage.com/plant.png",
      "createdAt": "2021-02-23T02:07:55.919Z",
      "updatedAt": "2021-02-23T02:07:55.919Z",
      "__v": 0
    }
  }
  ```

---

#### getAllPlants

![plant kingdom](https://i1.wp.com/orbitbiotech.com/wp-content/uploads/2018/04/plant-kingdom-Orbit-Biotech-Training.jpg?fit=600%2C285&ssl=1)

Awesome! Now I want to create a controller method to grab all the plants from the database:

/controllers/index.js

```js
const Plant = require("../models/plant");

const createPlant = async (req, res) => {
  // codes
};

const getAllPlants = async (req, res) => {
  // codes
};

module.exports = {
  createPlant,
  getAllPlants,
};
```

Add the following route to your ./routes/index.js file:

```js
router.post("/plants");

router.get("/plants");
```

Now add the controllers to the routes.

Open http://localhost:3001/api/plants in your browser or do a GET request in Postman.

- You should see an JSON object with an array of all `"plants":` in the database
- Make sure to grab the `_id` of the `"Test Plant"` we just added in the previous step, it will be useful for the next few routes.
- It should look something like this:
  ```js
  "_id": "5e38921e9c3bd077f50dc9a2"
  ```

---

#### getPlantById

Nice, now let's add the ability to find a specific plant:

/controllers/index.js

```js
const getPlantById = async (req, res) => {
  // codes here
};
```

Add it to the export:

u2_hw_mongoose_plants/controllers/index.js

```js
module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
};
```

Add the route:

u2_hw_mongoose_plants/routes/index.js

```js
router.get("/plants/:id");
```

Add the controller to the route.

Test it! Your URL shold look like this, but with the `_id` of _your Test Plant_ in your URL `:params` :
http://localhost:3001/api/plants/5e38921e9c3bd077f50dc9a2

This is a good point to integrate better logging. Right now, if we check our terminal when we hit the http://localhost:3001/api/plants/5e38921e9c3bd077f50dc9a2 endpoint we see the raw SQL that was executed.

---

#### updatePlant and deletePlant

So we can now create plants, show all plants, and show a specific plant. How about updating a plant and deleting a plant?

/controllers/index.js

```js
const updatePlant = async (req, res) => {
  // codes
};

const deletePlant = async (req, res) => {
  // codes
};
```

Make sure your exports are updated:

```js
module.exports = {
  createPlant,
  getAllPlants,
  getUserById,
  updatePlant,
  deletePlant,
};
```

Let's add our routes:

/routes/index.js

```js
router.put("/plants/:id");
router.delete("/plants/:id");
```

Add your controllers to the 2 routes.

Test update (PUT) in Postman. Remember that you'll have to use the `_id` of _your_ Test Plant. Your request body in Postman will have to look something like this:

http://localhost:3001/api/plants/5e38921e9c3bd077f50dc9a2

```js
{
    "name": "Update Plant Test",
    "description": "Test Description",
    "image": "https://testimage.com/plant.png"
}
```

Test DELETE in Postman using a URL like this http://localhost:3001/api/plants/5e38921e9c3bd077f50dc9a2

Success! We built a full CRUD JSON API in MongoDB, Mongoose, and Express using Express Router!

![](https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/06/echinopsis-02.gif?resize=480%2C270&ssl=1)

## Requirements

- Express connected to MongoDB through Mongoose connection
- All plant routes and controllers testing properly through Postman

## Bonus

- Add your own selection of plants to your API!
