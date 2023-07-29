////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i < 21; i++) {
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
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
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

plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let x of ninjaTurtles) {
  console.log(x.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

// .sort method sorts the elements of an array and permanently alters it, in this example favMovies is sorted in alphabetical order.
favMovies.sort();

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

favMovies.shift();

// unshift() adds new element "The Dark Knight" to the start of favMovies array
favMovies.unshift("The Dark Knight");
// unshift() returns the new length of favMovies array
console.log(favMovies.unshift());

let indexDjangoUnchained = favMovies.indexOf("Django Unchained"); // to find index of "Django Unchained"
favMovies.splice(indexDjangoUnchained, 1, "Avatar"); // splice() permanently altered favMovies

let middleIndexOfArray = Math.floor(favMovies.length / 2);
let sliceLastHalf = favMovies.slice(middleIndexOfArray); // slice() does not change the original array
console.log(sliceLastHalf);

console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious"));
// "Fast and Furious" was not removed from the array. If we look for the index of something that is not in the array, indexOf() will return -1

// (Based on what I read up, not too sure) Thought question: const allows mutation but not reassigning whereas let allows both mutation and reassigning.

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// remove Eggbert
whereIsWaldo.splice(1, 1);

// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";

console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
// Excited Kitten
////////////////////////////////

const kittenText = "Love me, pet me! HSSSSSS!";
const randomTextOne = "...human...why you taking pictures of me?...";
const randomTextTwo = "...the catnip made me do it...";
const randomTextThree = "...why does the red dot always get away...";

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
      console.log(randomTextOne);
    } else if (randomNumber === 2) {
      console.log(randomTextTwo);
    } else if (randomNumber === 3) {
      console.log(randomTextThree);
    }
  } else {
    console.log(kittenText);
  }
}

////////////////////////////////
// Find the Median
////////////////////////////////

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();

const middleIndex = Math.floor(nums.length / 2);
const medianNumber = nums[middleIndex];

console.log(medianNumber);

////////////////////////////////
// Checkerboard
////////////////////////////////

const boardSize = 8;

let evenRow = "";
let oddRow = "";

for (let i = 1; i <= boardSize / 2; i++) {
  oddRow += " #";
  evenRow += "# ";
}

for (let i = 1; i <= boardSize / 2; i++) {
  if (i % 2 === 0) {
    console.log(evenRow);
  } else {
    console.log(oddRow);
  }
}

////////////////////////////////
// Return of the Closets
////////////////////////////////

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

const kristynsShoe = kristynsCloset[0];
thomsCloset[2].splice(0, 0, kristynsShoe);

let kristynsOutfit = [];
let thomsOutfit = [];

for (let i = 1; i <= 3; i++) {
  kristynsOutfit.push(
    kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
  );
}

for (let i = 0; i < 3; i++) {
  thomsOutfit.push(thomsCloset[i][Math.floor(Math.random() * 4)]);
}

console.log(`Kristyn's outfit is ${kristynsOutfit}`);
console.log(`Thom's outfit is ${thomsOutfit}`);
