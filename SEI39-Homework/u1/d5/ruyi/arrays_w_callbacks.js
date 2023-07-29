/////////////////////////////
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
const checkIfPositive = num => {
    if (num >= 0) {
        return true;
    } return false;
}

console.log(nums.every(checkIfPositive));

// 2. determine if every word shorter than 8 characters
const checkLengthShorterThanEight = (list) => {
    if (list.length < 8) {
        return true;
    } return false;
} 

console.log(panagram.every(checkLengthShorterThanEight));

/////////////////////////////
// Filter
// 1. filter the array for numbers less than 4
const filterIfLessThanFour = num => {
    if (num < 4) {
        return true;
    } return false;
}

console.log(nums.filter(filterIfLessThanFour));

// 2. filter words that have an even length
const filterIfEvenLength = list => {
    if (list.length % 2 === 0) {
        return true;
    } return false;
}

console.log(panagram.filter(filterIfEvenLength));

/////////////////////////////
// Find
// 1. Find the first value divisible by 5
const findFirstValueDivisibleByFive = num => {
    if (num % 5 === 0) {
        return true;
    } return false;
}

console.log(nums.find(findFirstValueDivisibleByFive));

// 2. find the first word that is longer than 5 characters
const findFirstWordLongerThanFiveChar = list => {
    if (list.length > 5) {
        return true;
    } return false;
}

console.log(panagram.find(findFirstWordLongerThanFiveChar));

/////////////////////////////
// Find Index
// 1. find the index of the first number that is divisible by 3
const findIndexOfFirstNumDivisibleByThree = num => {
    if (num % 3 === 0) {
        return true;
    } return false;
}

console.log(nums.findIndex(findIndexOfFirstNumDivisibleByThree));

// 2. find the index of the first word that is less than 2 characters long
const findIndexOfFirstWordLessThanTwoChar = list => {
    if (list.length < 2) {
        return true;
    } return false;
}

console.log(panagram.findIndex(findIndexOfFirstWordLessThanTwoChar));

/////////////////////////////
// For Each
// 1. console.log each value of the nums array multiplied by 3
const multiplyByThree = num => {
    console.log(num * 3);
}

nums.forEach(multiplyByThree);

// const multiplyByThree = num => {
//     return (num * 3);
// }

// console.log(nums.forEach(multiplyByThree)); // => returns undefined because the return value of forEach is undefined

// 2. console.log each word with an exclamation point at the end of it
const printWithExclamation = list => {
    console.log(`${list}!`);
}

panagram.forEach(printWithExclamation);

/////////////////////////////
// Map
// 1. make a new array of each number multiplied by 100
const multiplyByTen = num => {
    return num * 10;
}

console.log(nums.map(multiplyByTen));

// 2. make a new array of all the words in all uppercase
const changeToUpperCase = list => {
    return list.toUpperCase();
}

console.log(panagram.map(changeToUpperCase));

/////////////////////////////
// Some
// 1. Find out if some numbers are divisible by 7
const checkIfDivisibleBySeven = num => {
    if (num % 7 === 0) {
        return true;
    } return false;
}

console.log(nums.some(checkIfDivisibleBySeven));

// 2. Find out if some words have the letter a in them
const checkIfThereIsA = list => {
    const listCharacters = list.split("");
    
   for (let i = 0; i < listCharacters.length; i++) {
    if (listCharacters[i] === "a") {
        return true;
    }
   } return false;
}

console.log(panagram.some(checkIfThereIsA));