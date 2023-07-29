// ==============================================================================
// Datatypes Refresher
// ==============================================================================

// Q1. A light switch that can be either on or off.
// A1. Datatype: boolean; data structure:
// const lightIsOn = true

// Q2. A user's email address.
// A2. Datatype: string; data structure:
// const email = 'johndoe@gmail.com'

// Q3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// A3. Datatype: array; data structure:
// const spaceship = ["hull", "laserBlasters", "tractorBeam", "warpDrive"]

// Q4. A list of student names from our class.
// A4. Datatype: array; data structure:
// const listOfStudentNames = ["student1", "student2", "student3"]

// Q5. A list of student names from our class, each with a location.
// A5. Datatype: array of objects; data structure:
// const listOfStudentNamesAndLocations = [
//   { name: "student1", location: "singapore" },
//   { name: "student2", location: "singapore" },
//   { name: "student3", location: "singapore" },
// ];

// Q6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// A6. Datatype: object of objects; data structure:
// const objectOfStudentNamesAndLocationsAndTvShows = {
//   Student1: {
//     location: "singapore",
//     tvShow: "cartoonnetwork",
//   },
//   Student2: {
//     location: "singapore",
//     tvShow: "cartoonnetwork",
//   },
//   Student3: {
//     location: "singapore",
//     tvShow: "cartoonnetwork",
//   },
// };

// ==============================================================================
// Take it Easy
// ==============================================================================

// Make an array that holds all of the colors of the rainbow.
const colorsOfTheRainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// Write code that will access "blue" from the rainbow array.
colorsOfTheRainbow[4];

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const myName = {
  favoriteFood: "Rice",
  hobby: "coding",
  town: "singapore",
  favoriteDatatype: "object",
};

// Write code that will access your hobby from the object that you just created.
myName.hobby;

// ==============================================================================
// Crazy Object!
// ==============================================================================

const crazyObject = {
  taco: [
    { meat: "steak", cheese: ["panela", "queso", "chihuahua"] },
    {
      meat: "chicken",
      salsa: [
        "pico",
        "hot",
        "hotter",
        "really hot",
        "really really hot",
        "omg my mouth is burning",
      ],
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma",
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager",
      },
      {
        name: "funkhauser",
        occupation: "tv dude",
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favouriteHobby: "Swearing at Larry and Jeff",
      },
    ],
  },
};

//   Use crazy Object to log the following.
//   "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//   "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//   "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby);

//   "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//   The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

//   Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);
console.log(crazyObject.larry.quotes);

// ==============================================================================
// Object-ception
// ==============================================================================

const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt",
              },
            },
          },
        },
      },
    },
  },
};

// Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo =
  null;
console.log(inception);

// ==============================================================================
// Bond Films
// ==============================================================================

const bondFilms = [
  {
    title: "Skyfall",
    year: 2012,
    actor: "Daniel Craig",
    gross: "$1,108,561,008",
  },
  {
    title: "Thunderball",
    year: 1965,
    actor: "Sean Connery",
    gross: "$1,014,941,117",
  },
  {
    title: "Goldfinger",
    year: 1964,
    actor: "Sean Connery",
    gross: "$912,257,512",
  },
  {
    title: "Live and Let Die",
    year: 1973,
    actor: "Roger Moore",
    gross: "$825,110,761",
  },
  {
    title: "You Only Live Twice",
    year: 1967,
    actor: "Sean Connery",
    gross: "$756,544,419",
  },
  {
    title: "The Spy Who Loved Me",
    year: 1977,
    actor: "Roger Moore",
    gross: "$692,713,752",
  },
  {
    title: "Casino Royale",
    year: 2006,
    actor: "Daniel Craig",
    gross: "$669,789,482",
  },
  {
    title: "Moonraker",
    year: 1979,
    actor: "Roger Moore",
    gross: "$655,872,400",
  },
  {
    title: "Diamonds Are Forever",
    year: 1971,
    actor: "Sean Connery",
    gross: "$648,514,469",
  },
  {
    title: "Quantum of Solace",
    year: 2008,
    actor: "Daniel Craig",
    gross: "$622,246,378",
  },
  {
    title: "From Russia with Love",
    year: 1963,
    actor: "Sean Connery",
    gross: "$576,277,964",
  },
  {
    title: "Die Another Day",
    year: 2002,
    actor: "Pierce Brosnan",
    gross: "$543,639,638",
  },
  {
    title: "Goldeneye",
    year: 1995,
    actor: "Pierce Brosnan",
    gross: "$529,548,711",
  },
  {
    title: "On Her Majesty's Secret Service",
    year: 1969,
    actor: "George Lazenby",
    gross: "$505,899,782",
  },
  {
    title: "The World is Not Enough",
    year: 1999,
    actor: "Pierce Brosnan",
    gross: "$491,617,153",
  },
  {
    title: "For Your Eyes Only",
    year: 1981,
    actor: "Roger Moore",
    gross: "$486,468,881",
  },
  {
    title: "Tomorrow Never Dies",
    year: 1997,
    actor: "Pierce Brosnan",
    gross: "$478,946,402",
  },
  {
    title: "The Man with the Golden Gun",
    year: 1974,
    actor: "Roger Moore",
    gross: "$448,249,281",
  },
  {
    title: "Dr. No",
    year: 1962,
    actor: "Sean Connery",
    gross: "$440,759,072",
  },
  {
    title: "Octopussy",
    year: 1983,
    actor: "Roger Moore",
    gross: "$426,244,352",
  },
  {
    title: "The Living Daylights",
    year: 1987,
    actor: "Timothy Dalton",
    gross: "$381,088,866",
  },
  {
    title: "A View to a Kill",
    year: 1985,
    actor: "Roger Moore",
    gross: "$321,172,633",
  },
  {
    title: "License to Kill",
    year: 1989,
    actor: "Timothy Dalton",
    gross: "$285,157,191",
  },
];

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];
for (const film of bondFilms) {
  bondTitles.push(film.title);
}
console.log(bondTitles);

// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = [];
for (const film of bondFilms) {
  if (film.year % 2 === 1) {
    oddBonds.push(film);
  }
}
console.log(oddBonds);

// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
let cumulativeGross = 0;
for (const film of bondFilms) {
  cumulativeGross += parseInt(film.gross.replace(/[$,]/g, ""));
}
console.log(cumulativeGross);

// Console log the single movie object that contains the actor who starred in the least number of films.
const arrayOfActors = [];
const actorCount = {};
for (const film of bondFilms) {
  arrayOfActors.push(film.actor);
}

for (const actor of arrayOfActors) {
  actorCount[actor] = actorCount[actor] ? actorCount[actor] + 1 : 1;
}

const leastOccurrences = Math.min(...Object.values(actorCount));

const actorsWithLeastOccurrences = Object.keys(actorCount).filter(
  (key) => actorCount[key] === leastOccurrences
);

for (const film of bondFilms) {
  for (const actor of actorsWithLeastOccurrences) {
    if (film.actor === actor) {
      console.log(film);
    }
  }
}
