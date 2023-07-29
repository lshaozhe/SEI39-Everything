//////////////////////////////////////////////////////////
// == Section 3: Array Methods with Callbacks ==
//////////////////////////////////////////////////////////

//

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

//========================================================
// == Every ==
//========================================================

// 1 >> Determine if every number is greater than or equal to 0

const checkNumsGreaterEqual0 = nums.map((x) => x >= 0);
console.log(checkNumsGreaterEqual0);

// 2 >> determine if every word shorter than 8 characters

const checkWordShorterThan8Char = panagram.map((x) => {
  return x.length < 8;
});
console.log(checkWordShorterThan8Char);

//========================================================
// == Filter ==
//========================================================

// 1 >> filter the array for numbers less than 4

const filterNumLessThan4 = nums.filter((x) => x < 4);
console.log(filterNumLessThan4);

// 2 >> filter words that have an even length

const filterWordEvenLength = panagram.filter((x) => x.length % 2 === 0);
console.log(filterWordEvenLength);

//========================================================
// == Find ==
//========================================================

// 1 >> Find the first value divisible by 5

const find1stNumDivisibleBy5 = nums.find((x) => x % 5 === 0);
console.log(find1stNumDivisibleBy5);

// 2 >> find the first word that is longer than 5 characters

const find1stWordLongerThan5Char = panagram.find((x) => x.length > 5);
console.log(find1stWordLongerThan5Char);

//========================================================
// == Find Index ==
//========================================================

// 1 >> find the index of the first number that is divisible by 3

const findIndex1stNumDivisibleBy3 = nums.findIndex((x) => x % 3 === 0);
console.log(findIndex1stNumDivisibleBy3);

// 2 >> find the index of the first word that is less than 2 characters long

const findIndex1stWordLessThan2Char = panagram.findIndex((x) => x.length < 2);
console.log(findIndex1stWordLessThan2Char);

//========================================================
// == For Each ==
//========================================================

// 1 >> console.log each value of the nums array multiplied by 3

const printNumMultipledBy3 = nums.forEach((x) => console.log(x * 3));

// 2 >> console.log each word with an exclamation point at the end of it

const printWordWithExclamation = panagram.forEach((x) => console.log(`${x}!`));

// console.log(nums); >> no change
// console.log(panagram); >> no change

// console.log(printNumMultipledBy3); >> no
// console.log(printWordWithExclamation); >> no

//========================================================
// == Map ==
//========================================================

// 1 >> make a new array of each number multiplied by 100

const newNumsArr = nums.map((x) => x * 100);
console.log(newNumsArr);

// 2 >> make a new array of all the words in all uppercase

const newPanagramArr = panagram.map((x) => x.toUpperCase());
console.log(newPanagramArr);

// console.log(nums); >> no change
// console.log(panagram); >> no change

// console.log(newNumsArr); >> yes
// console.log(newPanagramArr); >> yes

//========================================================
// == Some ==
//========================================================

// 1 >> Find out if some numbers are divisible by 7

const findNumsDivisibleBy7 = nums.some((x) => x % 7 === 0);
console.log(findNumsDivisibleBy7);

// 2 >> Find out if some words have the letter a in them

const findWordsWithA = panagram.some((x) => x.match(/a/g));
console.log(findWordsWithA);

//

//////////////////////////////////////////////////////////
// == Hungry for more ==
//////////////////////////////////////////////////////////

//========================================================
// == Reduce ==
//========================================================

// 1 >> Add all the numbers in the array together using the reduce method

const initialVal = 0;
const sumNums = nums.reduce(
  (prevNum, currNum) => prevNum + currNum,
  initialVal
);
console.log(sumNums);

// 2 >> concatenate all the words using reduce

const initalWord = "";
const joinWords = panagram.reduce(
  (prevWord, currWord) => prevWord + currWord,
  initalWord
);
console.log(joinWords);

// console.log(nums); >> no change
// console.log(panagram); >> no change

//========================================================
// == Sort ==
//========================================================

// Sort without arguments

console.log(nums.sort());
console.log(panagram.sort());
// both can be done but the sorting is not desirable since array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order

// Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b));

// Sort the numbers in descending order
console.log(nums.sort((a, b) => b - a));

// Sort the words in ascending order
const sortWordsAccending = panagram.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
});
console.log(sortWordsAccending);

// Sort the words in descending order
const sortWordsDecending = panagram.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return 1;
  if (a.toLowerCase() > b.toLowerCase()) return -1;
  return 0;
});
console.log(sortWordsDecending);

// console.log(nums); >> no change
// console.log(panagram); >> no change

//

//////////////////////////////////////////////////////////
// == Array Methods Challenge Problems ==
//////////////////////////////////////////////////////////

//========================================================
// == isPanagram ==
//========================================================

// splitting strings in panagram by first joining them then making the letters case insensitive
// lastly sort the letters in alphabetical order
const lettersUsed = panagram.join("").toLowerCase().split("").sort();
console.log(lettersUsed);

const occurrences = lettersUsed.reduce(function (countMap, word) {
  countMap[word] = ++countMap[word] || 1;
  return countMap;
}, {});

console.log(occurrences);
// yes, each letter is used at least once

//========================================================
// == Working with data ==
//========================================================

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

// filter for products with a price that is less than 10
const filterProductsLessThan10Bucks = products.filter((x) => x.price < 10);

console.log(filterProductsLessThan10Bucks);

// sort alphabetically by product name
const sortProductsByAlphabets = products.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
});

console.log(sortProductsByAlphabets);
