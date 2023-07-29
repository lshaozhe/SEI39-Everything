"use strict";
////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;
console.log(plantee[2]);
wolfy[3] = "Gotham City";
console.log(wolfy[3]);
dart.push("Hawkins");
console.log(dart);
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let names of ninjaTurtles) {
  console.log(names.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardian of the Galaxy");
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift()); //return the updated length of array 
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
console.log(favMovies.length);

let lastHalf = favMovies.slice(Math.floor(favMovies.length / 2), favMovies.length);
console.log(lastHalf);
console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious"));
// if not inside the array, indexOf will return -1


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);

whereIsWaldo[1][2] = "No One";

console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
//  Excited Kitten
////////////////////////////////

for (let i = 1; i <= 20; i++) {
  console.log('Love me, pet me! HSSSSSS!');
}

let catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let evenRandom = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenRandom = Math.floor(Math.random() * 3);
    console.log(catTalk[evenRandom]);
  } else {
    console.log('Love me, pet me! HSSSSSS!');
  }
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

const sortedNums = nums.sort();
console.log(sortedNums);

let medianIndex = Math.floor(sortedNums.length / 2);
let medianNums = sortedNums[medianIndex];
console.log(medianNums);

////////////////////////////////
//  Hungry for More?
////////////////////////////////

//fibbonaci
const fib = [];
fib[0] = 1;
fib[1] = 2;
for (let i = 2; i <= 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);

//checkerboard

const boardSize = 8;
for (let i = 0; i < boardSize / 2; i++) {
  let board = "";
  for (let j = 0; j < boardSize / 2; j++) {
    if (i % 2 === 0) {
      board += "# ";
    } else {
      board += " #";
    }
  }
  console.log(board);
}

//twoDArray

const twoDArray = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

for (let oneDArray of twoDArray.sort()) {
  for (let item of oneDArray.sort()) {
    console.log(item);
  }
}

// Alien Attire
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

let kristynShoe = kristynsCloset.shift();
console.log(kristynShoe);
thomsCloset[2].push(kristynShoe);
console.log(thomsCloset[2]);

//Dirty Laundry
for (let items of kristynsCloset) {
  console.log(`WHIRR: now washing ${items}`);
}

//Inventory
let thomsCloth = [];
for (let categories of thomsCloset) {
  for (let items of categories) {
    thomsCloth.push(items);
  }
}
console.log(thomsCloth);

//Dress Us Up
let kristynRandom = Math.floor(Math.random() * kristynsCloset.length);
let thomsRandom = Math.floor(Math.random() * 3);

console.log(`Kristyn and Thom have their outfits ready for the class: ${kristynsCloset[kristynRandom]}, ${thomsCloset[0][thomsRandom]}, and ${thomsCloset[1][thomsRandom]}.`);