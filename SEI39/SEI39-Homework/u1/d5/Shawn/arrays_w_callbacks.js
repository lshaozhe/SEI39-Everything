//========================================= Section 3 Array Methods with Callbacks =========================================

// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.
// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.
// Two arrays to work with

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const panagram = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
//   "caterpillar",
// ];
// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

// ================== Every
// Determine if every number is greater than or equal to 0
// determine if every word shorter than 8 characters

// function greaterThan0(num) {
//   return num >= 0;
// }
// console.log(nums.every(greaterThan0));

// function shorterThan8(wordLength) {
//   return wordLength.length < 8;
// }
// console.log(panagram.every(shorterThan8));

// ================== Filter
// filter the array for numbers less than 4
// filter words that have an even length

// const filterShorterThan4 = (num) => {
//   return num < 4;
// };
// console.log(nums.filter(filterShorterThan4));

// const filterEvenLength = (evenWords) => {
//   return evenWords.length % 2 === 0;
// };
// console.log(panagram.filter(filterEvenLength));

// ================== Find
// Find the first value divisible by 5
// find the first word that is longer than 5 characters
// const divisibleBy5 = (num) => {
//   return num % 5 === 0;
// };
// console.log(nums.find(divisibleBy5));

// const wordLonger5 = (word5) => {
//   return word5.length >= 5;
// };
// console.log(panagram.find(wordLonger5));

// ================== Find Index
// find the index of the first number that is divisible by 3
// find the index of the first word that is less than 2 characters long
// const divisibleBy3 = (num) => {
//   return num % 3 === 0;
// };
// console.log(nums.findIndex(divisibleBy3));

// const wordLess2 = (word2) => {
//   return word2.length < 2;
// };
// console.log(panagram.findIndex(wordLess2));

// ================== For Each
// console.log each value of the nums array multiplied by 3
// console.log each word with an exclamation point at the end of it
// const multiply3 = (nums, index, array) => {
//   console.log(nums * 3);
// };
// console.log(nums.forEach(multiply3));

// const newArr = [];
// const giveExclamation = (wordExclamation) => {
//   console.log(wordExclamation + "!");
//   newArr.push(wordExclamation + "!");
// };
// panagram.forEach(giveExclamation);
// console.log(newArr);

// ================== MAP
//make a new array of each number multiplied by 100
//make a new array of all the words in all uppercase

// const mult100 = (num) => {
//   return num * 100;
// };
// let arrMult = [];
// for (const item of nums) {
//   arrMult.push(mult100(item));
// }
// nums.map(mult100);
// console.log(arrMult);

// const arrUpperCase = [];
// const wordsUpper = (words) => {
//   return words.toUpperCase();
// };

// for (const item of panagram) {
//   arrUpperCase.push(wordsUpper(item));
// }
// panagram.map(wordsUpper);
// console.log(arrUpperCase);

// ================== Some
// Find out if some numbers are divisible by 7
// Find out if some words have the letter a in them
// const div7 = (nums) => {
//   return nums % 7 === 0;
// };
// console.log(nums.some(div7));

// const letterA = (words) => {
//   return words.includes("a");
// };
// console.log(panagram.some(letterA));

// ================== Reduce
// Add all the numbers in the array together using the reduce method
// concatenate all the words using reduce
// const sumNum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(nums.reduce(sumNum));

// const joinWords = (words1, words2) => {
//   return words1 + words2;
// };
// console.log(panagram.reduce(joinWords));

// ================== Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// Try to sort without any arguments, do you get what you'd expect with the words array?
// Sort the numbers in ascending order
// Sort the numbers in descending order
// Sort the words in ascending order
// Sort the words in descending order

// console.log(nums.sort()); //sort numerically by JavaScript method
// console.log(panagram.sort()); //sort by capital letter followed by alphabetically

// const sortNum = (num1, num2) => {
//   return num1 - num2;
// };
// console.log(nums.sort(sortNum));

// ================== WORKING WITH DATA
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

// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name
// const lessThan10 = (price10) => {
//   return price10.price < 10;
// };
// console.log(products.filter(lessThan10));

const lowerCase = (product) => {
  return product.name.toLowerCase();
};
let lowerCaseArr = products.map(lowerCase);
console.log(lowerCaseArr.sort());
