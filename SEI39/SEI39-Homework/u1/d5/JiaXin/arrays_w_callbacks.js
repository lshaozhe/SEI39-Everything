const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The", //3
  "quick", //5
  "brown", //5
  "fox", //3
  "jumps", //5
  "over", //4
  "the", //3
  "lazy", //4
  "dog", //3
];

/*
Every
1. Determine if every number is greater than or equal to 0
2. determine if every word shorter than 8 characters
*/
const greaterThanOrEqual0 = (num) => num >= 0;
console.log(nums.every(greaterThanOrEqual0));

const wordLessThan8 = (panagram) => panagram.length < 8;
console.log(panagram.every(wordLessThan8));

/*
Filter
1. filter the array for numbers less than 4
2. filter words that have an even length
*/
const lessThan4 = (num) => num < 4;
console.log(nums.filter(lessThan4));

function wordEven(panagram) {
  if (panagram.length % 2 === 0) {
    return panagram;
  }
}

console.log(panagram.filter(wordEven));
//or
const wordEvens = (panagram) => panagram.length % 2 === 0;
console.log(panagram.filter(wordEvens));

/*Find
1. Find the first value divisible by 5
2. find the first word that is longer than 5 characters
*/
const firstValueDivisibleBy5 = (num) => num % 5 === 0;
console.log(nums.find(firstValueDivisibleBy5));

const firstWordLongerThan5 = (panagram) => panagram.length >= 5;
console.log(panagram.find(firstWordLongerThan5));

/*Find Index
1. find the index of the first number that is divisible by 3
2. find the index of the first word that is less than 2 characters long
*/

const firstNumberDivisibleBy3 = (num) => num % 3 === 0;
console.log(nums.findIndex(firstNumberDivisibleBy3));

const firstWordLessThan2 = (panagram) => panagram.length < 2;
console.log(panagram.findIndex(firstWordLessThan2));

/*For Each
console.log each value of the nums array multiplied by 3
console.log each word with an exclamation point at the end of it
*/

nums.forEach((element) => console.log(element * 3));

//panagram.forEach((element) => console.log(element + "!"));
panagram.forEach(myFunction);

function myFunction(element) {
  console.log(element + "!");
}

/*
/*Thought Questions

What happened to the original array?
ans: it call out each element in an array (from array to individual element)

Can you store the values from a forEach method in a new array?
no
*/

/*
Map
1. make a new array of each number multiplied by 100
2. make a new array of all the words in all uppercase
*/
const newNumArray = nums.map((num) => {
  return num * 100;
});

console.log(newNumArray);

const upperCase = panagram.map((element) => {
  return element.toUpperCase();
});

console.log(upperCase);

/*
Thought Questions

What happened to the original array?
ans: it will excuete each element in the array and return a new return array.

Can you store the values from a map method in a new array?
ans: yes
*/
/*
Some
1. Find out if some numbers are divisible by 7
2. Find out if some words have the letter a in them
*/

function someNumberDivisibleBy7(nums) {
  if (nums % 7 === 0) {
    return nums;
  }
}

console.log(nums.some(someNumberDivisibleBy7));

function someWordsHaveA(panagram) {
  if (panagram.indexOf("a")) {
    return panagram;
  }
}

console.log(panagram.some(someWordsHaveA));
