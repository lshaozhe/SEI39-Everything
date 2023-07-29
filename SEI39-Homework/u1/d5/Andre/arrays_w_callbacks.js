///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 3 Array Methods with Callbacks
///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Every
//1.Determine if every number is greater than or equal to 0
//2.determine if every word shorter than 8 characters

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Filter
//1.filter the array for numbers less than 4
const numLessThan4 = (num) => num < 4;
console.log(nums.filter(numLessThan4));
//2.filter words that have an even length
const evenWordLength = (word) => word.length % 2 === 0;
console.log(panagram.filter(evenWordLength));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Find
//1.Find the first value divisible by 5
const divisibleBy5 = (num) => num % 5 === 0;
console.log(nums.find(divisibleBy5));
//2.find the first word that is longer than 5 characters
const longerThan5 = (word) => word.length > 5;
console.log(panagram.find(longerThan5));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Find Index
//1.find the index of the first number that is divisible by 3
const divisibleBy3 = (num) => num % 3 === 0;
console.log(nums.findIndex(divisibleBy3));
//2.find the index of the first word that is less than 2 characters long
const lessThan2 = (word) => word.length < 2;
console.log(panagram.findIndex(lessThan2));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//For Each
//1.console.log each value of the nums array multiplied by 3
const multiply3 = (num) => console.log(num * 3);
nums.forEach(multiply3);
//2.console.log each word with an exclamation point at the end of it
const wordEx = (word) => console.log(word + "!");
panagram.forEach(wordEx);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Thought Questions
//1.What happened to the original array?
//The original array is unchanged
//2.Can you store the values from a forEach method in a new array?
//Not possible
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Map
//1.make a new array of each number multiplied by 100
const multiply100 = (num) => num * 100;
console.log(nums.map(multiply100));
//2.make a new array of all the words in all uppercase
const upperCase = (word) => word.toUpperCase();
console.log(panagram.map(upperCase));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Thought Questions
//1.What happened to the original array?
//The original array is unchanged
//2.Can you store the values from a map method in a new array?
//Yes, for map, results are saved to a new array
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Some
//1.Find out if some numbers are divisible by 7
const divide7 = (num) => num % 7 === 0;
console.log(nums.some(divide7));
//Find out if some words have the letter a in them
const containsA = (word) => word.indexOf("a") > 0;
console.log(panagram.some(containsA));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Hungry for more
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reduce
//Add all the numbers in the array together using the reduce method
const sumAll = (total, num) => total + num;
console.log(nums.reduce(sumAll));
//concatenate all the words using reduce
const concatAll = (line, word) => line + word;
console.log(panagram.reduce(concatAll));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Thought Questions
//What happened to the original array?
//The array is unchanged
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sort
//Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort());
//Expected as the sort function is not a natural sort
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort());
//Similarly expected.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b));
//Sort the numbers in descending order
console.log(nums.sort((a, b) => b - a));
//Sort the words in ascending order
console.log(
  panagram.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
);
//Sort the words in descending order
console.log(
  panagram.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (x > y) {
      return -1;
    }
    return 0;
  })
);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Thought Questions
//What happened to the original array?
//The array is mutated due to the sort function call
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array Methods Challenge Problems
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//isPanagram
//Using the following array - test whether each letter a-z (case insensitive) is used at least once
const add = (big, individual) => big + individual;
const bigWord = panagram.reduce(add);
const letters = bigWord.toLowerCase().split("");
letters.sort((a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
let count = 0;
for (let i = 0; i < letters.length; i++) {
  if (letters[i] !== letters[i + 1]) {
    count += 1;
  }
}
const newLocal = "banana";
if (count === 26) {
  console.log("Each alphabet is used once.");
} else {
  console.log("Not all alphabets are used");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Working with data
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
    name: newLocal,
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
//filter for products with a price that is less than 10, using the array below:
const search = (obj) => obj.price < 10;
const cheapObj = products.filter(search);
const pull = (obj) => {
  return obj.name;
};
const cheapNames = cheapObj.map(pull);
console.log(cheapNames);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort alphabetically by product name
cheapNames.sort((a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(cheapNames);
