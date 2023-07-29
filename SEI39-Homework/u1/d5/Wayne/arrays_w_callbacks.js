// //================================================Section 3 Array Methods with Callbacks
// // A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// // But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array,
// //it wouldn't be very flexible.
// // By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// // Two arrays to work with

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

// //The first question is for the numbers array. The second question is for the words array.
// // You don't have to write an answer to the thought questions.

// //========================Every
// // =============Determine if every number is greater than or equal to 0

// function greaterThan0(num) {
//   return num >= 0;
// }
// console.log(nums.every(greaterThan0));

// // ============= determine if every word shorter than 8 characters

// function shorterThan8(wordLength) {
//   return wordLength.length < 8;
// }

// console.log(panagram.every(shorterThan8));

// // ============= Filter
// // filter the array for numbers less than 4
// // filter words that have an even length

// const filterLess4 = (num) => {
//   return num < 4;
// };
// console.log(nums.filter(filterLess4));

// const filterWordsEvenLength = (evenWords) => {
//   return evenWords.length % 2 === 0;
// };
// console.log(panagram.filter(filterWordsEvenLength));

// // ============= Find
// // Find the first value divisible by 5
// //find the first word that is longer than 5 characters

// const valDiv5 = (val) => {
//   return val % 5 === 0;
// };
// console.log(nums.find(valDiv5));

// const firstWordLonger5 = (words) => {
//   return words.length >= 5;
// };
// console.log(panagram.find(firstWordLonger5));

// // ============= Find Index
// // find the index of the first number that is divisible by 3
// // find the index of the first word that is less than 2 characters long

// const firstDivisible3 = (num) => {
//   return num % 3 === 0;
// };
// console.log(nums.findIndex(firstDivisible3));

// const firstWordLess2Char = (words) => {
//   return words.length < 2;
// };
// console.log(panagram.findIndex(firstWordLess2Char));

// // ============= For Each
// //console.log each value of the nums array multiplied by 3
// // console.log each word with an exclamation point at the end of it

// const valMult3 = (val, index) => {
//   console.log(val * 3);
// };
// console.log(nums.forEach(valMult3));

// const newArr = [];
// const wordsWithEx = (words) => {
//   console.log(`${words}!`);
//   newArr.push(words + "!");
// };

// panagram.forEach(wordsWithEx);
// console.log(newArr);
// console.log(panagram.map(wordsWithEx));

// ============= Map
//make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase

// let newArrMult100 = [];

// const numMult100 = (num) => {
//   return num * 100;
// };

// for (const item of nums) {
//   newArrMult100.push(numMult100(item));
// }
// console.log(nums.map(numMult100));
// console.log(newArrMult100);

// let newArrayUpperCase = [];

// const wordsUpperCase = (words) => {
//   return words.toUpperCase();
// };

// for (const item of panagram) {
//   newArrayUpperCase.push(wordsUpperCase(item));
// }

// panagram.map(wordsUpperCase);
// console.log(newArrayUpperCase);

// ============= Some
// Find out if some numbers are divisible by 7
// Find out if some words have the letter a in them
// const someNumbersDiv7 = (num) => {
//   return num % 7 === 0;
// };

// console.log(nums.some(someNumbersDiv7));

// const haveLetterA = (word) => {
//   return word.includes("a");
// };

// console.log(panagram.some(haveLetterA));

//======================================Hungry for More
//=========================Reduce
// Add all the numbers in the array together using the reduce method
// concatenate all the words using reduce

// const reduceNum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(nums.reduce(reduceNum));

// const concatenateWords = (word1, word2) => {
//   return word1 + word2;
// };
// console.log(panagram.reduce(concatenateWords));

////======================================Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// Try to sort without any arguments, do you get what you'd expect with the words array?
// Sort the numbers in ascending order
// Sort the numbers in descending order
// Sort the words in ascending order
// Sort the words in descending order

// console.log(nums.sort()); //sort numerically by JavaScript method
// console.log(panagram.sort()); //sort by Capital Letter, followed by alphabetical order

// const acsendingOrderNumbers = (num1, num2) => {
//   return num1 - num2;
// };
// console.log(nums.sort(acsendingOrderNumbers));

////======================================Working with data
const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

const filterPrice = (products) => {
  return products.price < 10;
};
console.log(products.filter(filterPrice));

//==========

const productNameLowerCase = (namesLower) => {
  return namesLower.name.toLowerCase();
};

let lowerCaseArr = products.map(productNameLowerCase);

console.log(lowerCaseArr.sort());
