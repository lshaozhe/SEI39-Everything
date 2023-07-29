// ===============================================================================
// Easy Going
// ===============================================================================

// Write a for loop that will log the numbers 1 through 20.

for (i = 1; i < 21; i++) {
  console.log(i);
}

// ===============================================================================
// Get Even
// ===============================================================================

// Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i < 201; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===============================================================================
// Fizz Buzz
// ===============================================================================

for (i = 1; i < 101; i++) {
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

// ===============================================================================
// Wild Wild Life
// ===============================================================================

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins".
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";

// ===============================================================================
// Yell at the Ninja Turtles
// ===============================================================================

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (turtle of turtles) {
  console.log(turtle.toUpperCase());
}

// ===============================================================================
// Methods, Revisited
// ===============================================================================

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

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort(); // It sort all the movies alphabetically and permanently altered it.

// Use the method pop
favMovies.pop();

// push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

// Reverse the array
favMovies.reverse();

// Use the shift method
favMovies.shift();

// unshift - what does it return?
favMovies.unshift(); // unshift returns the length of the array.

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
const arrayIndex = favMovies.indexOf("Django Unchained");
favMovies.splice(arrayIndex, 0, "Avatar"); // Yes, this permanently altered the array.

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
const arrayLength = favMovies.length;
favMovies.slice(arrayLength / 2); // No, this did not permanently alter the array.

// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
const arraySlice = favMovies.slice(arrayLength / 2); // The last half of the array is now stored in the new variable arraySlice.

// console.log your final results
console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious")); // It was not removed. indexOf returns a -1 if the element is not found.

// There is no requirement to use let to declare the array unless there is an intent to change the array to something else (i.e. a variable or an object).

// ===============================================================================
// Where is Waldo
// ===============================================================================

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);

// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";

// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

// ===============================================================================
// Excited Kitten
// ===============================================================================

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (i = 0; i < 20; i++) {
  // console.log("Love me, pet me! HSSSSSS!");
}

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

const randMsg = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    const randIndex = Math.round(Math.random() * (randMsg.length - 1));
    console.log(randMsg[randIndex]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

// ===============================================================================
// Find the Median
// ===============================================================================

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();

const median = Math.floor(nums.length / 2);
console.log(nums[median]);

// ===============================================================================
// Lab Time Revisited - Checkerboard
// ===============================================================================

const boardSize = 8;
let grid = "";

for (x = 1; x <= boardSize / 2; x++) {
  for (y = 1; y <= boardSize; y++) {
    if ((x % 2 === 0 && y % 2 !== 0) || (y % 2 === 0 && x % 2 !== 0)) {
      grid += "#";
    } else {
      grid += " ";
    }
  }
  grid += "\n";
}

console.log(grid);

// ===============================================================================
// Return of the Closets
// ===============================================================================

let kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
let thomsCloset = [
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

const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

let kristynOutfit = [];
let thomOutfit = [];

for (i = 1; i < 4; i++) {
  let kristynRandItem = Math.round(Math.random() * (kristynsCloset.length - 1));
  let kristynItem = kristynsCloset[kristynRandItem];
  kristynsCloset.splice(kristynRandItem, 1);
  kristynOutfit.push(kristynItem);
}

let thomRandShirt = Math.round(Math.random() * (thomsCloset[0].length - 1));
let thomShirt = thomsCloset[0][thomRandShirt];
thomOutfit.push(thomShirt);

let thomRandPants = Math.round(Math.random() * (thomsCloset[1].length - 1));
let thomPants = thomsCloset[1][thomRandPants];
thomOutfit.push(thomPants);

let thomRandAcc = Math.round(Math.random() * (thomsCloset[2].length - 1));
let thomAcc = thomsCloset[2][thomRandAcc];
thomOutfit.push(thomAcc);

console.log(`Kristyn will be wearing ${kristynOutfit[0]} with ${kristynOutfit[1]} and ${kristynOutfit[2]}.
Thom will be wearing ${thomOutfit[0]} with ${thomOutfit[1]} and ${thomOutfit[2]}.`);

kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
thomsCloset = [
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

for (i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`);
}

for (i = 0; i < thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}
