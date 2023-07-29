////////////////////////////////
// Easy Going
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
////////////////////////////////

////////////////////////////////
//Get Even
for (let i = 1; i <= 200; i += 2) {
  console.log(i);
}
////////////////////////////////

////////////////////////////////
//FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    //use if instead of else if so as to not break loop if number divisible by both 3 and 5
    console.log("Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
////////////////////////////////

////////////////////////////////
//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0, 0, "Gameboy");

console.log(plantee, "\n", wolfy, "\n", dart, "\n", wolfy);
////////////////////////////////

////////////////////////////////
//Yell at the Ninja turtle
const arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const element of arr) {
  console.log(element.toUpperCase()); //note that arr is not changed, only logging the uppercase
}
////////////////////////////////

////////////////////////////////
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

favMovies.sort(); //arranged the elements of the array based on ASCII value
favMovies.pop(); //removes the last element of array
favMovies.push("Guardian of the Galaxy"); //add move as the last element of array
favMovies.reverse(); //reverse the array
favMovies.shift(); //remove the first element from the array
favMovies.unshift("Spiderman"); //add Spiderman into the array as first element, it should return the new length of the array
let indexDjango = favMovies.indexOf("Django Unchained");
favMovies.splice(indexDjango, 0, "Avatar"); //insets Avatar before Django Unchained. arr is permanently altered
favMovies.slice(favMovies.length); //slide the arr from index 0 to half of the total length i.e. half the array
console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious")); //finding index does not alter the array
//Using const to declare array allows elements to be change, let should only be used to declare array that needs to be changed to another datatype i.e change array to strings
////////////////////////////////

////////////////////////////////
//Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(1, 1); //remove Eggbert
whereIsWaldo[1][2] = "No One"; //changing Neff to No one
console.log(whereIsWaldo[2][1][1]); //accessing and logging Waldo
////////////////////////////////

////////////////////////////////
//Excited Kitten
for (let i = 0; i < 20; i++) {
  const msgArr = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
  ];
  if (i % 2 === 0) {
    let val = Math.floor(Math.random() * msgArr.length); //used floor to include 0, 1 and 2 when random is applied - considering index of arrays start from 0
    console.log(msgArr[val]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}
////////////////////////////////

////////////////////////////////
//Find the Median
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();

if (nums.length % 2 === 0) {
  //median if dataset has even number of elements
  let numsMedian = (nums[nums.length / 2] + nums[nums.length / 2 + 1]) / 2;
  console.log(numsMedian);
} else {
  //median if dataset has odd number of elements
  let numsMedian = nums[Math.floor(nums.length / 2)];
  console.log(numsMedian);
}
////////////////////////////////

////////////////////////////////
//Return of the Closet
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

let kristynsShoe = kristynsCloset.shift(); //moving kristyn shoes to thom closet
thomsCloset[2].push(kristynsShoe);

for (let i = 0; i < 3; i++) {
  //iterates 3 times for 3 sets of outfit
  let kristynOutfit = [];
  let thomOutfit = [];

  for (let j = 0; j < 3; j++) {
    //each j loops pick an item from respective closet, they will be wearing 3 items each hence loops 3 time
    let randKristyn = Math.floor(Math.random() * kristynsCloset.length); //picks for kristyn
    kristynOutfit[j] = kristynsCloset[randKristyn];

    let randThom = Math.floor(Math.random() * thomsCloset[j].length); //picks for thom. Note slightly different due to nested array for thom's closet
    thomOutfit[j] = thomsCloset[j][randThom];
  }

  console.log(
    `Kristyn will be wearing ${kristynOutfit[0]}, ${kristynOutfit[1]}, ${kristynOutfit[2]}`
  );
  console.log(
    `Thom will be wearing ${thomOutfit[0]}, ${thomOutfit[1]}, ${thomOutfit[2]}`
  );
}
////////////////////////////////

////////////////////////////////
//Dirty Laundry
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}
////////////////////////////////

////////////////////////////////
//Inventory
const newThomArr = [];
for (let i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    //array is 2D hence need 2 loops (nested) to scan thru all elements
    newThomArr.push(thomsCloset[i][j]);
  }
}
console.log(newThomArr);
////////////////////////////////

////////////////////////////////
//Hungry for more FIBONACCI
const fibonacciTerms = [1, 2];
let sumEvenTerms = 0;
let x = 1; //initial index of 3rd fibonnaci term. Note 1st and 2nd terms are alreadt populated in array
while (fibonacciTerms[x] < 4 * 10 ** 6) {
  fibonacciTerms.push(fibonacciTerms[x - 1] + fibonacciTerms[x]);
  x++;
}
fibonacciTerms.pop(); //the while loop above will generate the last element which is bigger than 4 million. pop removes this element
for (let i = 0; i < fibonacciTerms.length; i++) {
  if (fibonacciTerms[i] % 2 === 0) {
    sumEvenTerms += fibonacciTerms[i];
  } else {
    continue;
  }
}
console.log(
  `The sum of even fibonacci terms considering terms lesser than 4 million is ${sumEvenTerms}`
);
////////////////////////////////
