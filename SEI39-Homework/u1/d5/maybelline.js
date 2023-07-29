//DRY
//KISS
//Avoid creating a YAGNI
//Do the simplest thing that could possibly work
//Don't make me think
//Write code for the maintainer
//Single responsibility principle
//Avoid premature optimisation
//Separation of concerns

//Questions
//Write a ~1 sentence summary for each one
//Which ones surprise you (if any)?
//Which one is currently giving you the most struggle?

////////////////////////////////
// COMMENTING CODE
///////////////////////////////
const f = (l) => {
  //arrow function
  let es = 0, //return results
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    // while loop
    n = c + p;
    [c, p] = [n, c];
    es += c % 2 === 0 ? c : 0;
  }
  return es;
};

console.log(f(55)); //pass 55 into (1)

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

//////////////////////////////////////////////////////////////////////////////////////////

///////////////////
//COMBINING DATATYPES
//////////////////

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  color: ["yellow", "blue", "green", "red"],
  brand: "stabilio",
  quantity: 20,
};

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "plastic",
    color: "blue",
    type: "large",
  },
};

console.log(bottle.cap.material);

//3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
  {
    receiptNumber: "#1",
    reason: "meal reimbursement",
    amount: "$12",
  },
  { receiptNumber: "#2", reason: "taxi", amount: "20" },
];

console.log(receipt[1].reason);

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  { level: 1, tenantName: ["shawn", "desmond", "kent"] },
  { level: 2, tenantName: ["steph", "lydia"] },
  { level: 3, tenantName: ["greg", "sylvia"] },
];

console.log(apartmentBuilding[0].tenantName[2]);

/////////////////////////////////
//Combine objects, arrays, and functions more than one level deep
/////////////////////////////////

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = function (item, size, colour) {
  return { clothing: item, clothingSize: size, clothingColour: colour };
};
console.log(knit("scarf", "xl", "blue"));

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = function (crayonBox) {
  return crayonBox;
};

console.log(crayonSelector(crayonBox.brand));

//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

// const powerButton = function (options) {
//   if (powerButton = "on"
//       return options;)
//  else console log ("Power Off")};

// const options = function () {
//   console.log("select a song");
// };

// console.log(powerButton("on"));

///////////////////////////////////////////////////////////
//VENDING MACHINE
/////////////////////////////////////////////////////////////
// Model a vending machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

// const vendingMachine = (vend[index]) =>
// {
//   let snacks = [
//     {
//       name: "chocolate",
//       price: 3,
//     },
//     { name: "biscuit", price: 1 },
//     { name: "sweets", price: 2 },
//   ],
// };

// vendingMachine.vend(input);
// console.log(`vend[input]);

// vendingMachine(snacks[1]);

////////////////////////
//CALLBACKS
////////////////////////

// Make a function add that takes two arguments (numbers) and sums them together
// Make a function subtract that takes two arguments (numbers) and subtracts them
// Make a function multiply that takes two arguments and multiplies them
// Make a function divide that takes two arguments and divides them
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote

// Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place
const bar = () => {
  console.log("bar here");
};

bar();

const foo = () => {
  console.log("foo here");
};

foo();

// Error reading
// What is meant by the error(s) this produces?
//equal sign missing, initialize food after

const food = () => {
  console.log("hi");
};

food();

/////////////////////////////////
//Section 3 Array Methods with Callbacks
/////////////////////////////////
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
function positiveNumber(number) {
  return number >= 0;
}
console.log(nums.every(positiveNumber));

// determine if every word shorter than 8 characters
function wordShorterThan8Characters(word) {
  return word.length < 8;
}
console.log(panagram.every(wordShorterThan8Characters));

// Filter
// filter the array for numbers less than 4
function numbersLessThan4(number) {
  return number < 4;
}

console.log(nums.filter(numbersLessThan4));

// filter words that have an even length
function wordsWithEvenLength(word) {
  return word.length % 2 === 0;
}

console.log(panagram.filter(wordsWithEvenLength));

// Find
// Find the first value divisible by 5
const firstValueDivisibleBy5 = (num) => num % 5 === 0;

console.log(nums.find(firstValueDivisibleBy5));

// find the first word that is longer than 5 characters
const firstWordLongerThan5Char = (panagram) => panagram.length > 5;
console.log(panagram.find(firstWordLongerThan5Char));

// Find Index
// find the index of the first number that is divisible by 3
const firstNumberDivisibleBy3 = (value) => value % 3 === 0;
console.log(nums.findIndex(firstNumberDivisibleBy3));

// find the index of the first word that is less than 2 characters long
const firstWordLessThan2Char = (value) => value.length < 2;
console.log(panagram.findIndex(firstWordLessThan2Char)); // cannot find anyword less than 2 characters long

// For Each
// console.log each value of the nums array multiplied by 3
const multiplyBy3 = (value) => console.log(value * 3);

nums.forEach(multiplyBy3);
// console.log each word with an exclamation point at the end of it

const exclamationPoint = (word) => console.log(word + "!");
panagram.forEach(exclamationPoint);

// Thought Questions

// What happened to the original array?
// Can you store the values from a forEach method in a new array? Yes

// Map
// make a new array of each number multiplied by 100
const newArrayMultiply100 = (value) => value * 100;
const answer = nums.map(newArrayMultiply100);
console.log(answer);

// make a new array of all the words in all uppercase
const newArrayUppercase = panagram.map((value) => {
  return value.toUpperCase();
});
console.log(newArrayUppercase);

// Thought Questions

// What happened to the original array?
// Can you store the values from a map method in a new array?

// Some
// Find out if some numbers are divisible by 7
const numbersDivisibleBy7 = nums.some((value) => value < 7);
console.log(numbersDivisibleBy7);

// Find out if some words have the letter a in them

console.log(
  panagram.some((word) => {
    return word.includes("a");
  })
);
