//========================================================================================
//Combine objects, arrays, and functions
//========================================================================================
// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  crayonNames: ["greenCrayon", "blueCrayon", "redCrayon"],
};
console.log(crayonBox.crayonNames[0]);

// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "plastic",
    color: "blue",
  },
};
console.log(bottle.cap.material);

// 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [
  {
    toiletries: {
      toothpaste: "$2",
      handwash: "$5",
      toiletPaper: "$5",
    },
  },
  {
    food: {
      pasta: "$2",
      chicken: "$3",
      fish: "$7",
      tomatoes: "$2",
    },
  },
];
console.log(receipt[1].food.pasta);

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [["john", "jacob", "jane", "jermaine", "jessica"]];

console.log(apartmentBuilding[0][2]);

//========================================================================================
// Combine objects, arrays, and functions more than one level deep
//========================================================================================
//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
  return {
    item: "scarf",
    size: "6ft",
  };
};
console.log(knit().item);

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = () => {
  return {
    crayonNames: ["greenCrayon", "blueCrayon", "redCrayon"],
  };
};
console.log(crayonSelector());

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
// const options = function () {
//   console.log("pick a song!");
// };
const powerButton = () => {
  return function options() {
    console.log("pick a song!");
  };
};
powerButton()();

//========================================================================================
//Model a Vending Machine
//========================================================================================

const vendingMachine = {
  snacks: [{ twisties: "$1.50" }, { lays: "$3" }, { cookie: "$5" }],
  vend: function (number) {
    return this.snacks[number];
  },
};
console.log(vendingMachine.vend(0));

//========================================================================================
//Callbacks
//========================================================================================
// Make a function add that takes two arguments (numbers) and sums them together
function sum(num1, num2) {
  return num1 + num2;
}

// Make a function subtract that takes two arguments (numbers) and subtracts them
function subtract(num1, num2) {
  return num1 - num2;
}

// Make a function multiply that takes two arguments and multiplies them
function multiply(num1, num2) {
  return num1 * num2;
}
// Make a function divide that takes two arguments and divides them
function divide(num1, num2) {
  return num1 / num2;
}

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate(num1, num2, operates) {
  return operates(num1, num2);
}

// Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(5, 2, sum));
console.log(calculate(5, 2, subtract));
console.log(calculate(5, 2, multiply));
console.log(calculate(5, 2, divide));

//Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

//Error reading
//What is meant by the error(s) this produces?

// foo();
// const foo () => {
//   console.log("hi");
// };

//The error was "Missing initializer in const declaration". This means that the variable is declared however it is not assigned a value

//========================================================================================
//Section 3 Array Methods with Callbacks
//========================================================================================
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every
// Determine if every number is greater than or equal to 0
const greaterOrEqual0 = (number) => number >= 0;
console.log(nums.every(greaterOrEqual0));

// Determine if every word shorter than 8 characters
const wordShorterThan8Characters = (word) => word.split("").length < 8;
console.log(panagram.every(wordShorterThan8Characters));

// Filter
// filter the array for numbers less than 4
const numberLessThan4 = (number) => number < 4;
console.log(nums.filter(numberLessThan4));

// filter words that have an even length
const evenLengthWords = (word) => word.split("").length % 2 === 0;
console.log(panagram.filter(evenLengthWords));

// Find
// Find the first value divisible by 5
const divisibleByFive = (number) => number % 5 === 0;
console.log(nums.find(divisibleByFive));

// find the first word that is longer than 5 characters
const longerThan5Characters = (word) => word.split("").length > 5;
console.log(panagram.find(longerThan5Characters));

// Find Index
// find the index of the first number that is divisible by 3
const divisibleBy3 = (number) => number % 3 === 0;
console.log(nums.findIndex(divisibleBy3));

// find the index of the first word that is less than 2 characters long
const lessThan2Characters = (word) => word.split("") < 2;
console.log(panagram.findIndex(lessThan2Characters));

// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach((number) => {
  number = number * 3;
  console.log(number);
});
// console.log each word with an exclamation point at the end of it
panagram.forEach((word) => {
  word = `${word}!`;
  console.log(word);
});

// Make
// make a new array of each number multiplied by 100
const newNumArr = nums.map((x) => x * 100);
console.log(newNumArr);

// make a new array of all the words in all uppercase
const newWordArr = panagram.map((x) => x.toUpperCase());
console.log(newWordArr);

// Some
// Find out if some numbers are divisible by 7
const divisibleBy7 = (number) => number % 7 === 0;
console.log(nums.some(divisibleBy7));

// Find out if some words have the letter a in them
const haveLetterA = (word) => word.includes("a");
console.log(panagram.some(haveLetterA));
