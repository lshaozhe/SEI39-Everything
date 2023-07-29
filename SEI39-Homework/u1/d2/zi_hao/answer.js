// Part II: Javascript Reps

// Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Get Even
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

// Fizz Buzz
for (let j = 1; j <= 100; j++) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }
}

// Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1.
plantee[2] = 5001;

// 2.
wolfy[3] = "Gotham City";

// 3.
dart.push("Hawkins");

// 4.
wolfy.shift();
wolfy.unshift("Gameboy");

// Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
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

// 1.
favMovies.sort();

// 2.
favMovies.pop();

// 3.
favMovies.push("Guardians of the Galaxy");

// 4.
favMovies.reverse();

// 5.
favMovies.shift();

// 6.
favMovies.unshift("Star Trek");
console.log(favMovies.unshift("Star Trek"));
// This returns 20, which is the number
// of elements remaining in the array after
// all the changes made above.

// 7.
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(16, 0, "Avatar");
console.log(favMovies);

// 8.
favMovies.slice(Math.ceil(favMovies.length / 2));

// 9.
let slicedMovieList = favMovies.slice(Math.ceil(favMovies.length / 2));
console.log(slicedMovieList);

// 10.
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
// It was not removed from the array, as we did a sort
// method to reshuffle the elements within, before
// starting to make edits to the elements.

// We receive a value of -1 if we try to find the index
// of an element that is not in the array.

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
const kittyTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
for (let k = 1; k <= 20; k++) {
  if (k % 2 === 0) {
    let meow = Math.round(Math.random() * 2);
    console.log(kittyTalk[meow]);
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
console.log(nums[Math.floor(nums.length / 2)]);
