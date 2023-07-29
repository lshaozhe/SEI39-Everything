//Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Get Even
for (i = 0; i <= 200; i += 2) {
  console.log(i);
}

//Fizz Buzz
for (i = 0; i <= 100; i++) {
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

for (let n of ninjaTurtles) {
  n = n.toUpperCase();
  console.log(n);
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
//Console log: the index of Titanic
console.log(favMovies[favMovies.indexOf("Titanic")]);

//use the .sort method
console.log(favMovies.sort());

//Use the method pop
favMovies.pop();
console.log(favMovies);

//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//Reverse the array
favMovies.reverse();
console.log(favMovies);

//Use the shift method
favMovies.shift();
console.log(favMovies);

//unshift - what does it return?
favMovies.unshift();
console.log(favMovies);

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself)
favMovies.splice(favMovies.indexOf("Django Unchained"), 0, "Avatar");
console.log(favMovies);

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
const position = (favMovies.length - 1) / 2;
const middleArray = favMovies.slice(position);

//store the value of your slice in a variable, console.log it
console.log(middleArray);

//console.log your final results
console.log(favMovies);

//Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1].splice(2, 1, "No one");
console.log(whereIsWaldo);

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

//Excited Kitten
const catTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(catTalk[Math.floor(Math.random() * 3)]);
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
console.log(nums[Math.ceil(nums.length / 2)]);
