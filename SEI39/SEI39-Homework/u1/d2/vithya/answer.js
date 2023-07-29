///////////////////////////////////////////////
//  Easy Going
for (i = 1; i <= 20; i++) {
  console.log(i);
}
///////////////////////////////////////////////

///////////////////////////////////////////////
// Get Even
for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
///////////////////////////////////////////////

///////////////////////////////////////////////
// Fizz Buzz
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
///////////////////////////////////////////////

///////////////////////////////////////////////
// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);
///////////////////////////////////////////////

///////////////////////////////////////////////
// Yell at the Ninja Turtles
const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const names of ninja) {
  console.log(names.toUpperCase());
}
///////////////////////////////////////////////

///////////////////////////////////////////////
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
favMovies.unshift(); // nothing happens as there is no element being passed in
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 0, "Avatar");
const someMovies = favMovies.slice(Math.floor(favMovies.length - 1) / 2);
console.log(someMovies);
console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious"));
// Fast and Furious is at index 13. If something is not in the array, the value will be -1.
///////////////////////////////////////////////

///////////////////////////////////////////////
// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);
///////////////////////////////////////////////

///////////////////////////////////////////////
// Excited Kitten
const kittenTalks = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    const option = Math.floor(Math.random() * kittenTalks.length);
    console.log(kittenTalks[option]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
///////////////////////////////////////////////

///////////////////////////////////////////////
// Find the Median
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();
console.log(nums[Math.floor((nums.length - 1) / 2)]);
///////////////////////////////////////////////

///////////////////////////////////////////////
//Hungry for More?
///////////////////////////////////////////////

///////////////////////////////////////////////
// Fibonnacci
let fibonnacci = [1, 1];

for (i = 2; i < 33; i++) {
  fibonnacci[i] = fibonnacci[i - 2] + fibonnacci[i - 1];
}

let sum = 0;
for (j = 0; j < fibonnacci.length; j++) {
  if (fibonnacci[j] % 2 === 0) {
    sum += fibonnacci[j];
  }
}
console.log(sum);
///////////////////////////////////////////////

///////////////////////////////////////////////
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
kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

// Dress Us Up

for (i = 0; i < 3; i++) {
  let kristynsChoice = Math.floor(Math.random() * kristynsCloset.length);
  let kristynsOutfit = kristynsCloset[kristynsChoice];
  let thomsChoice = Math.floor(Math.random() * thomsCloset.length);
  let thomsOutfit = thomsCloset[thomsChoice][thomsChoice];
  console.log(
    `Kristyn will wear ${kristynsOutfit} and Thom will wear ${thomsOutfit}`
  );
}
///////////////////////////////////////////////

///////////////////////////////////////////////
// Dirty Laundry
let k = 0;
while (k < kristynsCloset.length) {
  console.log(`WHIRR: Now washing ${kristynsCloset[k]}`);
  k++;
}

console.log(
  `Thom's shirts: ${thomsCloset[0]},\nThom's pants: ${thomsCloset[1]}\nThom's accessories: ${thomsCloset[2]}`
);
///////////////////////////////////////////////