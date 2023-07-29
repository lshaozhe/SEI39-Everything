// Array Methods with Callbacks
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
const greaterThan0 = (num) => num > 0;
const lessThan8Chars = (str) => str.valueOf().length < 8;

console.log(nums.every(greaterThan0));
console.log(panagram.every(lessThan8Chars));

// Filter

const numBelow4 = (num) => num < 4;
const evenWords = (str) => str.valueOf().length % 2 === 0;

console.log(nums.filter(numBelow4));
console.log(panagram.filter(evenWords));

// Find
const firstDivideBy5 = (num) => num % 5 === 0;
const firstLongerThan5 = (str) => str.valueOf().length > 5;

console.log(nums.find(firstDivideBy5));
console.log(panagram.find(firstLongerThan5));
// returns undefined as none of the words are longer than 5 characters

// Find Index
const firstDivideBy3 = (num) => num % 3 === 0;
const firstLessThan2 = (str) => str.valueOf().length < 2;

console.log(nums.findIndex(firstDivideBy3));
console.log(panagram.findIndex(firstLessThan2));
// returns -1 as index not found: none of the words are shorter than 2 characters

// For Each
const multiplyBy3 = (number) => {
  console.log(number * 3);
};

nums.forEach(multiplyBy3);

const addExclamation = (str) => {
  console.log(str + "!");
};

panagram.forEach(addExclamation);

// self-note: original array values are not changed
// values can be stored by using push method into a new array

// Map

const multiplyBy100 = (num) => num * 100;

console.log(nums.map(multiplyBy100));

const changeUpperCase = (str) => str.toUpperCase();

console.log(panagram.map(changeUpperCase));

// self-note: original array values are not changed
// newArray = panagram.map(changeUpperCase);
// console.log(newArray);
// new value can be stored by declaring a new const = result of the map method

// Some
const divisibleBy7 = (num) => num / 7;

console.log(nums.some(divisibleBy7));

const hasLetterA = (str) => str.includes("a");

console.log(panagram.some(hasLetterA));

///////////////
// Reduce
console.log(nums.reduce((a, b) => a + b));

console.log(panagram.reduce((a, b) => a + " " + b));

///////////////
// Sort
console.log(nums.sort());

console.log(panagram.sort());

// sort does not follow natural sort
// default hierarchy for string: uppercase => alphabetical
console.log(nums.sort((a, b) => a - b));

console.log(nums.sort((a, b) => b - a));
// compare function only needed for numbers

// sort words
const changeLowerCase = (str) => str.toLowerCase();

const lowerCaseArray = panagram.map(changeLowerCase);
console.log(lowerCaseArray.sort());
console.log(lowerCaseArray.sort().reverse());
// original array remains unchanged

///////////////
// Array Methods Challenge Problems
// isPanagram
console.log(
  panagram
    .toString()
    .includes(
      "a" &&
        "b" &&
        "c" &&
        "d" &&
        "e" &&
        "f" &&
        "g" &&
        "h" &&
        "i" &&
        "j" &&
        "k" &&
        "l" &&
        "m" &&
        "n" &&
        "o" &&
        "p" &&
        "q" &&
        "r" &&
        "s" &&
        "t" &&
        "u" &&
        "v" &&
        "w" &&
        "x" &&
        "y" &&
        "z"
    )
);

// Working with data
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

////////
const priceAbove10 = products.filter(function (a) {
  return a.price > 10;
});
console.log(priceAbove10);

const sortedProducts = products.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(sortedProducts);
