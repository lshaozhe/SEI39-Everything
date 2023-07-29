//////////////////////////////////////////////////////////////
// Datatype Refresher
/*
1. A light switch that can be either on or off.
=> datatype: boolean
=> data structure example: const lightSwitch = true;

2. A user's email address.
=> datatype: object in an array
=> data structure example: let userEmails = [{name: "John", email: "johndoe@gmail.com"}, {name: "Jane", email: "janesmith@gmail.com"}]

3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
=> datatype: array
=> data structure example: let spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];

4. A list of student names from our class.
=> datatype: array
=> data structure example: let studentNames = ["John", "Jane", "Mary", "Tom"];

5. A list of student names from our class, each with a location.
=> datatype: objects in an array
=> data structure example: let studentNamesLocations = [{name: "John", location: "Woodlands"}, {name: "Jane", location: "Jurong"}]

6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
=> datatype: objects in an array
=> data structure example: let studentNamesLctnsShows = [{name: "John", location: "Woodlands", TV shows: ["Big Bang Theory", "Modern Family"]}, {name: "Jane", location: "Jurong", TV shows: ["New Girl", "Brooklyn 99"]}]
*/
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Take it Easy
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

let printBlue = rainbowColors[4];
console.log(printBlue);

const vithyaFavs = {
  food: "chicken rice",
  hobbies: "reading",
  town: "Singapore",
  datatype: "boolean",
};

let favHobby = vithyaFavs.hobbies;
console.log(favHobby);

//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Crazy Object!
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

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favouriteHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(Object.entries(crazyObject.larry.characters[1]));

let smallTalk = "I'm trying to elevate small talk to medium talk";
crazyObject.larry.quotes.push(smallTalk);
console.log(crazyObject.larry.quotes);
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Object-ception
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

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo =
  null;
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Bond Films
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
  { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
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

// Question 1
let bondTitles = [];

function titles() {
  for (const item of bondFilms) {
    bondTitles.push(item.title);
  }
}

titles();

console.log(bondTitles);

// Question 2
let oddBonds = [];

function oddYears() {
  for (const each of bondFilms) {
    if (each.year % 2 !== 0) {
      oddBonds.push(each.year);
    }
  }
}

oddYears();
console.log(oddBonds);

// Question 3

let totalCumulativeGross = 0;

for (const grossInt of bondFilms) {
  let integer = parseInt(grossInt.gross.replace(/[$,]/g, ""));
  totalCumulativeGross += integer;
}
console.log(totalCumulativeGross);
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Hungry For More
// Bond Films Challenge

const bondActors = [];
const numberOfTimes = {};

// array of actors in Bond movies

for (const all of bondFilms) {
  bondActors.push(all.actor);
}

// calculate number of times each actor acted in Bond movies
for (const actorName of bondActors) {
  if (numberOfTimes[actorName]) {
    // e.g. if can find daniel craig in the object, add 1 to the value
    numberOfTimes[actorName] += 1;
    // if cannot let the value = 1
  } else {
    numberOfTimes[actorName] = 1;
  }
}

// find the lowest number using Math.min on the values from numberOfTimes array
const lowestNumber = Math.min(...Object.values(numberOfTimes));

// find key given a value
function getKey(anyArray, value) {
  return Object.keys(anyArray).find((key) => anyArray[key] === value);
}

const newBondFilmsArray = bondFilms.filter(
  (element) => element.actor === getKey(numberOfTimes, lowestNumber)
);

console.log(...newBondFilmsArray);
//////////////////////////////////////////////////////////////
