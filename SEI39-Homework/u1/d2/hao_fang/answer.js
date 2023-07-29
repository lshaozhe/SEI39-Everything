// Easy Going
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// Get Even
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.shift();
wolfy.unshift("Gameboy");

// Yell At The Ninja Turtles
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (i = 0; i < turtles.length; i++) {
  console.log(turtles[i].toUpperCase());
}

// Methods Revisted
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
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse;
favMovies.shift;
favMovies.splice(favMovies.indexOf("Django Unchained"), 0, "Avatar");
newSlice = favMovies.slice(Math.floor(favMovies.length / 2));
console.log(newSlice);

// Where Is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
whereIsWaldo[1].splice(2, 1, "No One");
console.log(whereIsWaldo[2][1][1]);

// Excited Kittens
for (let i = 0; i < 20; i++) {
  if (i % 2) {
    console.log("Love me, pet me! HSSSSSS");
  } else {
    const a = Math.floor(Math.random() * 3);

    if (a === 0) {
      console.log("...human...why you taking pictures of me?...");
    } else if (a === 1) {
      console.log("...the catnip made me do it...");
    } else {
      console.log("...why does the red dot always get away...");
    }
  }
}

// Find The Median
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();

console.log(nums[Math.floor(nums.length / 2)]);
