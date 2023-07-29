/////////////////////////////////////////////
//Part I: HTML & CSS
//Comfort: 3 - I almost feel like I've got it
/////////////////////////////////////////////
//Part II: JavaScript Reps
//Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(`The number is ${i}`);
}
//Get Even
for (let i = 1; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";
//Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
}
//Methods, Revisited
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
favMovies.unshift();
console.log(favMovies.indexOf("Django Unchained")); //14
favMovies.splice(14, 0, "Avatar");
console.log(favMovies.length);
favMovies.slice(10);
const sliceValue = favMovies.slice(10);
console.log(sliceValue);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
//Arrays are mutable.
//Hence, it does not matter if declared with let or const.
//Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);
//Excited Kitten
for (let i = 1; i <= 20; i++) {
  let num = Math.ceil(Math.random() * 3);
  if (i % 2 === 0) {
    if (num === 1) {
      console.log("...human...why you taking pictures of me?...");
    } else if (num === 2) {
      console.log("...the catnip made me do it...");
    } else if (num === 3) {
      console.log("...why does the red dot always get away...");
    }
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
//Find the Median
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
let medianIndex = Math.ceil(nums.length / 2);
console.log(nums[medianIndex]);
//Hungry for More?
//Fibonnacci
let fib1 = 0;
let fib2 = 1;
let fibi;
const fibonacci = [];
for (let i = 0; i < 32; i++) {
  fibi = fib1 + fib2;
  fibonacci.push(fibi);
  fib1 = fib2;
  fib2 = fibi;
}
console.log(fibonacci);
let evenFibSum = 0;
for (let j = 0; j < fibonacci.length; j++) {
  if (fibonacci[j] % 2) {
    evenFibSum += fibonacci[j];
  }
}
console.log(evenFibSum);
//Checkerboard
const boardSize = 20;
let evenLine = "";
let oddLine = "";
for (let i = 1; i <= boardSize / 2; i++) {
  oddLine += " #";
  evenLine += "# ";
}
for (let i = 1; i <= boardSize / 2; i++) {
  if (i % 2 === 0) {
    console.log(evenLine);
  } else {
    console.log(oddLine);
  }
}
//Return of the Closets
//Alien Attire
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
let kristynsShoe = kristynsCloset.splice(0, 1).toString();
console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);
//Dress Us Up
console.log(kristynsCloset.length); //6
const kristynsOufit = [];
for (let i = 0; i < 3; i++) {
  let num = Math.ceil(Math.random() * 5);
  kristynsOufit.push(kristynsCloset[num]);
}
console.log(kristynsOufit);
console.log(
  `Kristyn will be wearing ${kristynsOufit[0]}, ${kristynsOufit[1]} and ${kristynsOufit[2]}.`
);
let thomsOutfit = [];
thomsOutfit.push(thomsCloset[0][Math.ceil(Math.random() * 3)]);
thomsOutfit.push(thomsCloset[1][Math.ceil(Math.random() * 2)]);
thomsOutfit.push(thomsCloset[2][Math.ceil(Math.random() * 2)]);
console.log(
  `Thom will be wearing ${thomsOutfit[0]}, ${thomsOutfit[1]} and ${thomsOutfit[2]}.`
);
//Dirty Laundry
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}
//Inventory
for (let i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    console.log(thomsCloset[i][j]);
  }
}
