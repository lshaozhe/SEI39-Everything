//============================================================
// Answer the following
//============================================================
// A light switch that can be either on or off.
// => datatype: boolean
// => datastructure example: const lightSwitch = true;

// A user's email address.
// => datatype: strings
// => datastructure example: const userEmail = "example@email.com"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: array
// => datastructure example:
// const spaceShip = ["hull", "laser blasters", "tractor beam", "warp drive"];

// A list of student names from our class.
// => datatype: array
// => datastructure example:
// const className = [{ name: "Shawn" }, { name: "Wayne" }];

// A list of student names from our class, each with a location.
// => datatype: object
// => datastructure example:
// const students = {
//   student1: ["Shawn", "row1"],
//   student2: ["Wayne", "row2"],
// };
// console.log(students);
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: object
// => datastructure example:
// const classRoom = {
//   student1: {
//     name: "Shawn",
//     location: "Row1",
//     favouriteTv: "GOT",
//   },
//   student2: {
//     name: "Wayne",
//     location: "Row2",
//     favouriteTv: "GOT2",
//   },
// };

// console.log(classRoom);

//============================================================
//  Take it Easy
//============================================================
// const rainbowColors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "violet",
// ];

// const accessBlue = rainbowColors[4];
// console.log(accessBlue);
// function accessBlue() {
//   return rainbowColors[4];
// }
// console.log(accessBlue());

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// const aboutMe = {
//   name: "shawn",
//   favoriteFood: "chickenRice",
//   hobby: "soccer",
//   nameTown: "singapore",
//   favDataType: "object",
// };
// console.log(aboutMe);

// const shawnHobby = aboutMe.hobby;
// console.log(shawnHobby);

//============================================================
//  Crazy Object!
//============================================================
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

//============================================================
//  Object-ception
//============================================================
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

//============================================================
//  Bond Films
//============================================================
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
// //Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// let bondTitles = [];
// function accessTitles() {
//   for (i = 0; i < bondFilms.length; i++) {
//     // console.log(bondFilms[i].title);
//     // bondTitles += bondFilms[i].title + " ";
//     bondTitles.push(bondFilms[i].title);
//   }
// }
// //   for (const item of bondFilms) {
// //     console.log(item.title);
// //   }
// accessTitles();
// console.log(bondTitles);

// //Create a new array oddBonds, of only the Bond films released on odd-numbered years.

// let oddBondTitles = [];
// const copyBondFilms = [...bondFilms];
// function accessOddTitle() {
//   for (i = 0; i < copyBondFilms.length; i++) {
//     if (copyBondFilms[i].year % 2 === 0) {
//       oddBondTitles.push(copyBondFilms[i].title);
//     }
//   }
//   console.log(oddBondTitles);
// }
// accessOddTitle();

// //Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
// let cumGross = 0;
// function calCum() {
//   for (i = 0; i < bondFilms.length; i++) {
//     let withoutCommas = bondFilms[i].gross.replaceAll(",", "");
//     let withoutCommasDollar = withoutCommas.replaceAll("$", "");
//     // console.log(withoutCommasDollar);
//     let n = parseInt(withoutCommasDollar);
//     cumGross += n;
//   }
//   console.log(cumGross);
// }
// calCum();

// // var n2 = parseInt(bondFilms[0].gross);
// // console.log(n2);

//============================Hungry for More? Bond Films Challenge============================
//Console log the single movie object that contains the actor who starred in the least number of films.
// let actors = [];
// function accessActors() {
//   for (i = 0; i < bondFilms.length; i++) {
//     actors.push(bondFilms[i].actor);
//   }
//   console.log(actors);
// }
// accessActors();

// let actors = [];
// for (i = 0; i < bondFilms.length; i++) {
//   let data1 = [bondFilms[i].actor];
//   console.log(data1);
//   console.log(Object.values(bondFilms[i]));
//   actors.push(Object.values(bondFilms[i]));
// }
// console.log(actors);

// function leastActors() {
//   let danielCraig = 0;
//   for (i = 0; i < actors.length; i++) {
//     if (actors[i] === "Daniel Craig") {
//       danielCraig += 1;
//     }
//   }
//   console.log(danielCraig);
// }
// accessActors();
// leastActors();
