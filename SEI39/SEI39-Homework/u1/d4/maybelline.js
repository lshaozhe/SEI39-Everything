//////////////////////////////////////////
// ANSWER THE FOLLOWING
//////////////////////////////////////////

// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

//1. A light switch that can be either on or off.
//datatype: boolean
//data structure : const lightSwitch = off;

//2. A user's email address.
//datatype: string
//data structure : const userEmailAddress = "maybelline.ang@gmail.com"

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: array
// data structure:
///// const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"]

//4. A list of student names from our class.
// datatype:arrays
// data structure:
/////// const ourClassStudentNames = ["Andrew", "Andika", "Vithya"]

//5. A list of student names from our class, each with a location.
//datatype: object
//data structure:
//////////// const ourClassStudentNames = {
// Name: "Maybelline",
// Location: "Singapore" }

//6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: objects + arrays
// data structure
//////////// constant ourClassStudentNames = {
// Name: "Maybelline"
// Location: "Singapore"
// List of Favourite TV Shows: ["hello", "world"]

//////////////////////////////////////////
/// TAKE IT EASY
///////////////////////////////////////////

//1. Make an array that holds all of the colors of the rainbow.
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "indigo",
];

//2. Write code that will access "blue" from the rainbow array.
console.log(rainbowColors[4]);

//3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const aboutMe = {
  name: "Ang Maybelline",
  favouriteFood: "Laksa",
  hobby: "Exercising",
  nameOfTown: "Singapore",
  favouriteDatatype: "Boolean",
};

//4. Write code that will access your hobby from the object that you just created.
console.log(aboutMe.hobby);

////////////////////////////////////////////////////
//CRAZY OBJECT
////////////////////////////////////////////////
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

//1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby);

//4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//5. The object the contains the name funkhauser
console.log(crazyObject.larry.characters);

///////////////// NOT REALLY SURE//////////////////////

//6. Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);

console.log(crazyObject.larry.quotes);

//////////////////////////////////////
//  OBJECT-CEPTION
/////////////////////////////////////
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

////////////////////////////////////////////////
// BOND FILMS
/////////////////////////////////////////////////
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

//1. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];
for (const item of bondFilms) {
  bondTitles.push(item.title);
}

console.log(bondTitles);

//2. Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = [];
for (const item of bondFilms) {
  if (item.year % 2 != 0) {
    oddBonds.push(item);
  }
}

console.log(oddBonds);

//loop through all the years --> bondfilms.year
//find odd years --> year/2 !=0
//let oddBonds = [], push above answers into it

//3. Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
let total = 0;
for (const item of bondFilms) {
  const movieGross = item.gross;
  const movieGrossWithoutDollarSign = movieGross.replace("$", "");
  const num = parseInt(movieGrossWithoutDollarSign);
  total = total + num;
}
console.log(total);
// loop through all the gross amount
// remove dollar sign
// the gross amount into usable string ==> parseInt(bondFilms.gross)
// sum total.
