"use strict";

/////////////////////////////////////////
// Section 3 Array Methods with Callbacks
/////////////////////////////////////////

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
// 1. Determine if every number is greater than or equal to 0
const greaterThanEqualToZero = (num) => num >= 0;
console.log(nums.every(greaterThanEqualToZero));

// 2. Determine if every word shorter than 8 characters
const lessThanEightCharacters = (word) => {
  let arr = word.split("");
  if (arr.length < 8) {
    return true;
  } else {
    return false;
  }
};
console.log(panagram.every(lessThanEightCharacters));

// Filter
// 1. filter the array for numbers less than 4
const lessThanFour = (num) => num < 4;
console.log(nums.filter(lessThanFour));

// 2. filter words that have an even length
const evenWords = (word) => {
  let arr = word.split("");
  if (arr.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(panagram.filter(evenWords));

// Find
// 1. Find the first value divisible by 5
const valueDivisibleByFive = (num) => num % 5 === 0;
console.log(nums.find(valueDivisibleByFive));

// 2. find the first word that is longer than 5 characters
const longerThanFiveCharacters = (word) => {
  let arr = word.split("");
  if (arr.length > 5) {
    return true;
  } else {
    return false;
  }
};
console.log(panagram.find(longerThanFiveCharacters)); // returns undefined since panagram array does not have any word longer than 5 characters

// Find Index
// 1. find the index of the first number that is divisible by 3
const divisibleByThree = (num) => num % 3 === 0;
console.log(nums.findIndex(divisibleByThree));

// 2. find the index of the first word that is less than 2 characters long
const lessThanTwoCharacters = (word) => {
  let arr = word.split("");
  if (arr.length < 2) {
    return true;
  } else {
    return false;
  }
};
console.log(panagram.findIndex(lessThanTwoCharacters)); // returns -1 because panagram array does not have any word less than 2 characters long

// For Each
// 1. console.log each value of the nums array multiplied by 3
let numsMultipliedByThree = [];
const multiplyByThree = (num) => {
  numsMultipliedByThree.push(num * 3);
};
nums.forEach(multiplyByThree);
console.log(nums);
for (let item of numsMultipliedByThree) {
  console.log(item);
}

// 2. console.log each word with an exclamation point at the end of it
let panagramExclamation = [];
const addExclamation = (word) => {
  panagramExclamation.push(`${word}!`);
};
panagram.forEach(addExclamation);
for (let item of panagramExclamation) {
  console.log(item);
}

// Thought Questions
// 1. What happened to the original array?
// A: Original array remains unchanged.

// 2. Can you store the values from a forEach method in a new array?
// A: No, because .forEach() method does not return anything unlike a .map() which returns a new array

// Map
// 1. make a new array of each number multiplied by 100
const multiplyByHundred = (num) => num * 100;
console.log(nums.map(multiplyByHundred));
console.log(nums);

// 2. make a new array of all the words in all uppercase
const uppercase = (word) => {
  return word.toUpperCase();
};
const uppercaseArr = panagram.map(uppercase);
console.log(uppercaseArr);

// Thought Questions
// 1. What happened to the original array?
// A: Original array remains unchanged.

// 2. Can you store the values from a map method in a new array?
// A: Yes, since .map() method creates a new array with the return value of the function called on each element in the original array

// Some
// 1. Find out if some numbers are divisible by 7
const divisibleBySeven = (num) => num % 7 === 0;
console.log(nums.some(divisibleBySeven));

// 2. Find out if some words have the letter a in them
const checkLetterA = (word) => {
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A" || arr[i] === "a") {
      return true;
    }
  }
  return false;
};
console.log(panagram.some(checkLetterA));
