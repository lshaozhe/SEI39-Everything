// Part I: HTML and CSS

// Part II: JavaScript Reps

// Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Get Even
for (let j = 0; j <= 200; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

// Fizz Buzz
for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz");
  } else if (k % 3 === 0) {
    console.log("Fizz");
  } else if (k % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(k);
  }
}

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;

wolfy[3] = "Gotham City";

dart[3] = ["Upside Down", "Hawkins"];

wolfy[0] = "Gameboy";

// Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const element of ninjaTurtles) {
  console.log(element.toUpperCase());
}

// Methods, Revisited
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

favMovies.sort();

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

favMovies.shift();

console.log(favMovies.unshift("Spirited Away")); // This returns the length of the new array.

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");

let slicedArray = console.log(
  favMovies.slice(Math.ceil(favMovies.length / 2 - 1))
);

console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious"));
/* "Fast and Furious" was not removed from the array after slicing. If we look for something that is not in the array,
the resulting index we get is -1.
*/

// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);

whereIsWaldo[1][2] = "No One";

console.log(whereIsWaldo[2][1][1]);

// Excited Kitten
for (let x = 0; x < 20; x++) {
  if (x % 2 === 0) {
    const kittenComplains = [
      "...human...why you taking pictures of me?...",
      "...the catnip made me do it...",
      "...why does the red dot always get away...",
    ];
    let indexOfRandomKittenComplains = Math.floor(Math.random() * 3);
    console.log(kittenComplains[indexOfRandomKittenComplains]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

// Find the Median

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
console.log(nums[Math.ceil(nums.length / 2)]);

// Hungry for More?

// Return of the Closets
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

// Alien Attire
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

// console.log(kristynsCloset);
// console.log(thomsCloset)

// Dress Us Up
const kristynsOutfits = [kristynsCloset[2], kristynsCloset[3], kristynsCloset[4]];
const thomsOutfits = [thomsCloset[0][0], thomsCloset[1][0], thomsCloset[2][0]];

console.log(`Kristyn's outfits are ${kristynsOutfits.join(", ")}.`);
console.log(`Thom's outfits are ${thomsOutfits.join(", ")}.`);

// Dirty Laundry
for (item of kristynsCloset) {
  console.log(`WHIRR: Now washing ${item}`);
}

// Inventory
for (let i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    console.log(thomsCloset[i][j]);
  }
}