////////////////////////////////////////////////////////////////////////////////
// Datatypes Refresher //
////////////////////////////////////////////////////////////////////////////////
//

// 1. A light switch that can be either on or off.
// => datatype: boolean
// => data structure: const lightSwitchOn = true

// 2. A user's email address.
// => datatype: string
// => data structure: const userEmailAddress = " "

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: array
// => data structure: const spaceShip = ["hull", "laser blasters", "tractor beam", "warp drive"]

// 4. A list of student names from our class.
// => datatype: array
// => data structure: const studentsFromOurClass = ["name1", "name2", "name3", ... "name10"]

// 5. A list of student names from our class, each with a location.
// => datatype: object
// => data structure:
// const studentsFromOurClass = [
//   { student: "name1",
//     location: "location1",
//   },
//   { student: "name2",
//     location: "location1",
//   },
// ];

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: object
// => data structure:
// const studentsFromOurClass = [
//   { student: "name1",
//     location: "location1",
//     favTvShows: ["show1", "show2"],
//   },
//   { student: "name2",
//     location: "location1",
//     favTvShows: ["show1", "show2"],
//   },
// ];

////////////////////////////////////////////////////////////////////////////////
// Take it Easy //
////////////////////////////////////////////////////////////////////////////////
//

// Q1 //
//
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];

// Q2 //
//
rainbow[4];
console.log(rainbow[4]);

// Q3 //
//
const steph = {
  favFood: "noodle",
  hobby: "coding",
  town: "cck",
  favDataType: "boolean",
};

// Q4 //
//
steph.hobby;
console.log(steph.hobby);

////////////////////////////////////////////////////////////////////////////////
// Crazy Object! //
////////////////////////////////////////////////////////////////////////////////
//

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

// Q1 //
console.log(crazyObject.taco[1].salsa[5]);
// => "omg my mouth is burning"

// Q2 //
console.log(crazyObject.larry.quotes[0]);
// => "Pretty pretty prettayyyyy good"

// Q3 //
console.log(crazyObject.larry.characters[2].favouriteHobby);
// => "Swearing at Larry and Jeff"

// Q4 //
console.log(crazyObject.larry.nicknames[1]);
// => "Chicken Teriyaki Boyyyyyy"

// Q5 //
crazyObject.larry.characters[1].name;
console.log(crazyObject.larry.characters[1].name);
//The object the contains the name funkhauser

// Q6 //
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);
console.log(crazyObject.larry.quotes);
// added "I'm trying to elevate small talk to medium talk" to Larry's quote array

////////////////////////////////////////////////////////////////////////////////
// Object-ception //
////////////////////////////////////////////////////////////////////////////////
//

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
  "null";
console.log(
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
    .dreamLayer6.limbo
);

////////////////////////////////////////////////////////////////////////////////
// Bond Films //
////////////////////////////////////////////////////////////////////////////////
//

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

// Q1 //
const bondTitles = [];
for (let i = 0; i < bondFilms.length; i++) {
  bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);

// Q2 //
const oddBonds = [];
for (const film of bondFilms) {
  if (film.year % 2 === 1) {
    oddBonds.push(film.title);
  }
}

console.log(oddBonds);

// Q3 //
let total = 0;
for (const film of bondFilms) {
  let amt = parseInt(film.gross.replace(/[$,]/g, ""));
  total += amt;
}

console.log(total);

////////////////////////////////////////////////////////////////////////////////
// Bond Films Challenge//
////////////////////////////////////////////////////////////////////////////////
//

const actorsArray = [];
for (mainLead of bondFilms) {
  let actors = actorsArray.push(mainLead.actor);
}

console.log(actorsArray);

const occurrences = actorsArray.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

console.log(occurrences);

function lowestValueAndKey(obj) {
  let [lowestItems] = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2);
  console.log(
    `FYI: Lowest value is ${lowestItems[1]}, with a key of ${lowestItems[0]}`
  );
  return lowestItems[0];
}

let lowest = lowestValueAndKey(occurrences);
console.log(lowest);

for (i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor == lowest) {
    console.log(bondFilms[i]);
  }
}
