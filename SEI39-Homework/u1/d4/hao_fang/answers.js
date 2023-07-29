// ========================================
// Datatypes Refresher
/* ========================================
1. boolean e.g. const lightSwitch = true
2. string e.g. const email = "user@gmail.com"
3. array e.g. const spaceship = [hull, laser blasters, tractor beam, warp drive]
4. array e.g. const studentNames = [a, b, c]
5. object e.g. const studentInfo = {name A: "location A", name B: "location B", name C: "location C"}
6. objects & arrays e.g. const studentInfo = {
    A: {name: A, location: A, list of shows: [x, y, z]},
    B: {name: B, location: B, list of shows: [x, y, z]},
    C: {name: C, location: C, list of shows: [x, y, z]}
}
*/

// ========================================
// Take it Easy
// ========================================
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
console.log(rainbow[rainbow.indexOf("blue")]);

const haoFang = {
  Food: "chocolate",
  Hobby: "games",
  PlaceofResidence: "singapore",
  FavouriteDatatype: "array",
};
console.log(haoFang.Hobby);

// ========================================
// Crazy Object!
// ========================================
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
console.log(crazyObject.larry.characters[1]);
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);
console.log(crazyObject.larry.quotes);

// ========================================
// Object-ception
// ========================================
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

// ========================================
// Bond Films
// ========================================
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

// Qn 1
const bondTitles = [];

for (item of bondFilms) {
  bondTitles.push(item.title);
}

console.log(bondTitles);

// Qn 2
const oddBonds = [];

for (item of bondFilms) {
  if (Number(item.year) % 2) {
    oddBonds.push(item.title);
  }
}

console.log(oddBonds);

// Qn 3
let cumulativeGross = 0;

for (item of bondFilms) {
  cumulativeGross += Number(item.gross.replace(/,/g, "").replace("$", ""));
}

console.log(cumulativeGross);

// ========================================
// Bond Films Challenge
// ========================================
// make object to contain the actors and their respective number of film appearances
const bondActors = {};

// iterate through bondFilms, add each actor into the key, and add to the counter if the actor appears again in the array
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor in bondActors) {
    bondActors[bondFilms[i].actor] += 1;
  } else {
    bondActors[bondFilms[i].actor] = 0;
  }
}

// place the bondActors object into a 2D array and define a variable for the actor with least appearances
arrActors = Object.entries(bondActors);
let leastActor = "";

// iterate through the array to compare each actor's number of film appearances. Iteratively re-define the leastActor variable.
for (let i = 0; i < arrActors.length - 1; i++) {
  if (arrActors[i][1] < arrActors[i + 1][1]) {
    leastActor = arrActors[i][0];
  }
}

// print the final answer
console.log(leastActor);
