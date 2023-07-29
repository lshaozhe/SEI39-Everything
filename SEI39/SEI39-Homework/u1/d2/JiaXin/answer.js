////////////////////////////////
// Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////

////////////////////////////////
// Get Even

for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

////////////////////////////////

////////////////////////////////
// Fizz Buzz

for (let i = 1; i <= 100; i++) {
  let divby3 = i % 3;
  let divby5 = i % 5;

  if (divby3 == 0 && divby5 == 0) {
    console.log("FizzBuzz");
  } else if (divby5 == 0) {
    console.log("Buzz");
  } else if (divby3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

////////////////////////////////

////////////////////////////////
// Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
//Give D'Art a second hometown by adding "Hawkins".
dart.push("Hawkin");
console.log(dart);
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy.spice(0, 1, "Gameboy");
console.log(wolfy);

////////////////////////////////

////////////////////////////////
// Yell at the Ninja Turtles

const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const element of ninjaTurtle) {
  console.log(element.toUpperCase());
}

////////////////////////////////

////////////////////////////////
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
//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies.sort());
//Sorts elements alphabetically.it overwrites the original array therefore permanently alter

//Use the method pop
let x = favMovies.pop(); // remove the last element
console.log(x); //to check the removed element
//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy"); // push or add to the last element
console.log(favMovies);
//Reverse the array
console.log(favMovies.reverse());

//Use the shift method
let y = favMovies.shift(); // remove the first element
console.log(y); //to check the removed element

//unshift - what does it return?
let z = favMovies.unshift(); // adds new elements to the beginning of an array.
console.log(z); // it return number of element

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar"); // ( index of the item, no of item to remove, new element)
console.log(favMovies);

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//store the value of your slice in a variable, console.log it - Thought question: what is going on here?
let i = favMovies.slice(favMovies.unshift() / 2);
console.log(i);
//console.log your final results
console.log(favMovies);

////////////////////////////////
////////////////////////////////
// Where is Waldo

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
whereIsWaldo[1].splice(whereIsWaldo[1].indexOf("Neff"), 1, "No One");
console.log(whereIsWaldo);

//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////

////////////////////////////////
//  Excited Kitten
/*
Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // even
    const kittyTalk = [
      "...human...why you taking pictures of me?...",
      "...the catnip made me do it...",
      "...why does the red dot always get away...",
    ];

    let random = Math.floor(Math.random() * kittyTalk.length);
    console.log(random, kittyTalk[random]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

////////////////////////////////

////////////////////////////////
//  Find the Median
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();
console.log(nums[Math.floor(nums.length / 2)]);

////////////////////////////////
