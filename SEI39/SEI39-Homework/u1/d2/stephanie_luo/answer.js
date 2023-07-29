/////////////////////////////////////////////////////////
// Part I: HTML & CSS
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Part II: JavaScript Reps

/////////////////////////////////////////////////////////
// Easy Going
/////////////////////////////////////////////////////////
for (i = 1; i < 21; i++) {
  console.log(i);
}
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Get Even
/////////////////////////////////////////////////////////
for (i = 0; i <= 200; i += 2) {
  console.log(i);
}
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Fizz Buzz
/////////////////////////////////////////////////////////
for (i = 1; i <= 100; i++) {
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

/////////////////////////////////////////////////////////
// Wild Wild Life
/////////////////////////////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Q1 //
plantee[2] = 5001;
console.log(plantee);

// Q2 //
wolfy[3] = "Gotham City";
console.log(wolfy);

// Q3 //
dart.push("Hawkins");
console.log(dart);

// Q4 //
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

/////////////////////////////////////////////////////////
// Yell at the Ninja Turtles
/////////////////////////////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtles of ninjaTurtles) {
  console.log(turtles.toUpperCase());
}

/////////////////////////////////////////////////////////
// Methods, Revisited
/////////////////////////////////////////////////////////
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

// Q1 //
favMovies.sort();
// Ans: The .sort method will sort the elements in the favMovies in alphabetical order. It will permanently alter the array.

// Q2 //
favMovies.pop();

// Q3 //
favMovies.push("Guardians of the Galaxy");

// Q4 //
favMovies.reverse();

// Q5 //
favMovies.shift();

// Q6 //
favMovies.unshift();
// Ans: It returns the same array after Q5

// Q7 //
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 1, "Avatar");
console.log(favMovies);
// Ans: It permanently altered the array

// Q8 //
console.log(favMovies.length);
// The total number of elements in the array is 18. So, middle of array will be at index 9.
favMovies.slice(9);
// Ans: .slice method does not permanently alter the array

// Q9 //
favMoviesSliced = favMovies.slice(9);
console.log(favMoviesSliced);
// Ans: We are creating a new sliced version of the original array

// Q10 //
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
// Ans: "Fast and Furious" is not being removed
// Ans: -1 will appear as the index of something that is not in the array

// Ans: Since favMovies is an array, we do not have to declare it with const or let

/////////////////////////////////////////////////////////
// Where is Waldo
/////////////////////////////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// Remove Eggbert //
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

// Change "Neff" to "No One" //
whereIsWaldo[1][2] = "No One";

// Access and console.log "Waldo"
for (let i = 0; i < whereIsWaldo.length; i++) {
  for (let j = 0; j < whereIsWaldo[i].length; j++) {
    for (let k = 0; k < whereIsWaldo[i][j].length; k++) {
      if (whereIsWaldo[i][j][k] === "Waldo") {
        console.log(`Waldo is located at ${i} ${j} ${k}`);
      }
    }
  }
}

/////////////////////////////////////////////////////////
// Excited Kitten
/////////////////////////////////////////////////////////

// Q1 //
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// Q2 //
kittenTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 1; i <= 20; i++) {
  let randomMeow = kittenTalk[Math.floor(Math.random() * kittenTalk.length)];
  if (i % 2 === 0) {
    console.log(randomMeow);
  }
}

/////////////////////////////////////////////////////////
// Find the Median
/////////////////////////////////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();
len = nums.length; // length is 25
middleIndex = Math.floor(len / 2);
median = nums[middleIndex];
console.log(median);

// Expected output:
// => 15
