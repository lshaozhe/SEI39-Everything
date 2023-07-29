//===========================================================Datatypes Refresher============================================================
// e.g. A computer that can be either on or off.
// => datatype: boolean
// => data structure example: const computer = true;

// A light switch that can be either on or off.
// => datatype: boolean
// => data structure example: const lightSwitch = true;

// A user's email address.
// => datatype: strings
// => data structure example: const userEmail = "hello@iamking.com"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: Arrays
// => data structure example:
// const spaceShip = ["hull", "last blasters", "tractor beam", "warp drive"];

// A list of student names from our class.
// => datatype: Arrays
// => data structure example:
// const studentNames = [{ name: "Shawn" }, { name: "Wayne" }];

// A list of student names from our class, each with a location.
// => datatype: Objects
// => data structure example:
// const studentNames = {
//   student1: ["Shawn", "Beverly Hills1"],
//   student2: ["Wayne", "Beverly Hills2"],
// };
// console.log(studentNames);

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: Objects
// => data structure example:
// const studentNames = {
//   student1: {
//     name: "Shawn",
//     address: "Beverly Hills1",
//     favtvshows: "Prison Break",
//   },
//   student2: {
//     name: "Wayne",
//     address: "Beverly Hills2",
//     favtvshows: "Titanic",
//   },
// };
// console.log(studentNames);

//===========================================================Take it Easy============================================================
//Make an array that holds all of the colors of the rainbow.
// const rainbowColors = [
//   "Red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet.",
// ];
// console.log(rainbowColors);

// //Write code that will access "blue" from the rainbow array.
// const accessBlue = rainbowColors[4];
// console.log(accessBlue);

//Make an object that is called your name and holds the information about your favorite food, a hobby,
//the name of the town that you live in currently, and your favorite datatype.
// const aboutMe = {
//   name: "Wayne",
//   favFood: "Chicken Rice",
//   hobby: "Football",
//   town: "Gothem City",
//   favDataType: "Objects",
// };
// console.log(aboutMe);

// //Write code that will access your hobby from the object that you just created.
// const accessHobby = aboutMe.hobby;
// console.log(accessHobby);

//===========================================================Crazy Object!============================================================
// const crazyObject = {
//   taco: [
//     { meat: "steak", cheese: ["panela", "queso", "chihuahua"] },
//     {
//       meat: "chicken",
//       salsa: [
//         "pico",
//         "hot",
//         "hotter",
//         "really hot",
//         "really really hot",
//         "omg my mouth is burning",
//       ],
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: [
//       "Pretty pretty prettayyyyy good",
//       "Is that a parkinson's thing?",
//       "women love a self confident bald man",
//       "I'm a walking talking enigma",
//     ],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager",
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude",
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favouriteHobby: "Swearing at Larry and Jeff",
//       },
//     ],
//   },
// };

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favouriteHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1].name);

// crazyObject.larry.quotes.push(
//   "I'm trying to elevate small talk to medium talk"
// );
// console.log(crazyObject.larry.quotes);

//===========================================================Object-ception============================================================
// const inception = {
//   reality: {
//     dreamLayer1: {
//       dreamLayer2: {
//         dreamLayer3: {
//           dreamLayer4: {
//             dreamLayer5: {
//               dreamLayer6: {
//                 limbo: "Joseph Gordon Levitt",
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo =
//   "null";
// console.log(
//   inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
//     .dreamLayer6.limbo
// );

//===========================================================Bond Films============================================================
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
//Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// let bondTitles = [];
// function accessTitle() {
//   for (i = 0; i < bondFilms.length; i++) {
//     // console.log(bondFilms[i].title);
//     //   for (const item of bondFilms) {
//     //     console.log(item.title);
//     // bondTitles += [bondFilms[i].title] + " ";
//     bondTitles.push(bondFilms[i].title);
//   }
// }
// accessTitle();
// console.log(bondTitles);

//Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// let oddBonds = [];
// function oddYears() {
//   for (i = 0; i < bondFilms.length; i++) {
//     if (bondFilms[i].year % 2 == 0) {
//       oddBonds.push(bondFilms[i].title);
//     }
//   }
// }
// oddYears();
// console.log(oddBonds);

//-------------------------------- OR

// let oddBonds = [];
// let copyBondFilm = [...bondFilms];
// console.log(copyBondFilm);

// function oddYears() {
//   for (i = 0; i < copyBondFilm.length; i++) {
//     if (copyBondFilm[i].year % 2 == 0) {
//       oddBonds.push(copyBondFilm[i].title);
//     }
//   }
// }
// oddYears();
// console.log(oddBonds);

//Determine the total cumulative gross of the Bond franchise, and console.log the result.
//hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

// let sum = 0;
// function calCum() {
//   for (i = 0; i < bondFilms.length; i++) {
//     let withoutCommas = bondFilms[i].gross.replaceAll(",", "");
//     let withoutCommasandDollar = withoutCommas.replaceAll("$", "");
//     // console.log(withoutCommas);
//     console.log(withoutCommasandDollar);
//     // var n = parseInt(withoutCommas);
//     // console.log(n);
//     let n = parseInt(withoutCommasandDollar);
//     sum += n;
//   }
// }
// calCum();
// console.log(sum);

//===========================================================HUNGRY FOR MOREs============================================================
// let actors = [];
// function totalActors() {
//   for (i = 0; i < bondFilms.length; i++) {
//     actors.push(bondFilms[i].actor);
//   }
//   console.log(actors);
// }
// totalActors();

// // console.log(Object.keys(bondFilms[1]));

// const count = {};
// actors.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });
// console.log(count);

// const keys = Object.keys(bondFilms);

// for (let i = 0; i < keys.length; i++) {
//   console.log(bondFilms[keys[i]]);
// }

// let occurance = 0;
// function calLeastActors() {
//   for (i = 0; i < actors.length; i++) {
//     if (bondFilms[i].actor === "Pierce Brosnan") {
//       occurance += 1;
//     }
//   }
//   console.log(occurance);
// }
// calLeastActors();
