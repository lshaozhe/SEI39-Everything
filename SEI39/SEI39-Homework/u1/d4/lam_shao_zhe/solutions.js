"use strict";

////////////////////////////////////////
//Data Refreshers
/*
1. light switch that can be either on or off.
    data type: boolean
    data structure: const lightSwitch = true;
2. user's email address.
    data type: string
    data structure: const userEmail = xxx@samplemail.sg
3. spaceship with a hull, laser blasters, tractor beam, and warp drive.
    data type: object with boolean values
    data structure: const spaceship = {hull: true, laserBeams: false, tractorBeam: true, wrapDrive: false}
4. list of student names from our class.
    data type: array with strings
    data structure: const studentNames = ["James", "Jamie", "Adam", "Wendy"]
5. list of student names from our class, each with a location.
    data type: object nested within array
    data structure: const studentLocation = [{name: "James", location: "home"}, {name: "Jamie", location: "class"}]
6. list of student names from our class, each with a location and each with a list of favorite tv shows.
    data structure: objects and arrays
    data structure: const studentProperties = [{name: "James", location: "home", favMovie}, etc..]
*/
////////////////////////////////////////

////////////////////////////////////////
//Take it Easy
const coloursRainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
console.log(coloursRainbow[4]);
const myInformation = {
  favFood: "chicken rice",
  favHobby: "swimming",
  favTown: "bedok",
  favDataType: "array",
};
console.log(myInformation.favHobby);
////////////////////////////////////////

////////////////////////////////////////
//Crazy Object!
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
console.log(crazyObject.larry.quotes.pop());
////////////////////////////////////////

////////////////////////////////////////
//Object-ception
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
console.log(
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
    .dreamLayer6.limbo
);
////////////////////////////////////////

////////////////////////////////////////
//Bond Films
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

const bondTitles = []; //creating bond titles array
for (const film of bondFilms) {
  bondTitles.push(film.title);
}
console.log(bondTitles);

const oddBonds = [];
for (const arrTest of bondFilms) {
  //creating array to store odd year films
  if (arrTest.year % 2 !== 0) {
    oddBonds.push(arrTest.title);
  }
}
console.log(oddBonds);

const filmGross = [];
for (const arrTemp of bondFilms) {
  filmGross.push(arrTemp.gross);
}
console.log(filmGross);

const remvSign = [];
for (let i = 0; i < filmGross.length; i++) {
  remvSign.push(filmGross[i].replace("$", ""));
  filmGross[i] = parseInt(filmGross[i].replace("$", "").replaceAll(",", ""));
}

let filmGrossSum = 0;
for (const val of filmGross) {
  filmGrossSum += val;
}
console.log(filmGrossSum);
////////////////////////////////////////

////////////////////////////////////////
//Hungry for More

//generating an array of just actor names
const actorList = [];
for (const counter of bondFilms) {
  actorList.push(counter.actor);
}

//generate an array of object to tally movie counts of all actors in dataset
const actorStats = [{ name: "", count: 0 }];
for (let i = 0; i < actorList.length; i++) {
  if (checkActorName(actorList[i])) {
    //actor name inside -> find actor name and count +1
    for (let j = 0; j < actorStats.length; j++) {
      if (actorStats[j].name === actorList[i]) {
        actorStats[j].count++;
      }
    }
  } else {
    //actor name is not inside, push new object for actor
    addActorName(actorList[i]);
  }
}

//identifying the actor with least movie count
let leastMovieActor = "";
for (let i = 0; i < actorStats.length - 1; i++) {
  if (actorStats[i].count < actorStats[i + 1].count) {
    leastMovieActor = actorStats[i].name;
  }
}

//console logging object of the actor with least movie count
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor === leastMovieActor) {
    console.log(bondFilms[i]);
  }
}

//functions declaration below
function checkActorName(actorName) {
  for (let i = 0; i < actorStats.length; i++) {
    if (actorName === actorStats[i].name) {
      return true; //returns true if tested actor name is inside
    }
  }
  return false;
}
function addActorName(nameVar) {
  actorStats.push({ name: nameVar, count: 1 });
}
////////////////////////////////////////
