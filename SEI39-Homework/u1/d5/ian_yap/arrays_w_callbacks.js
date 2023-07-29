"use strict";

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

// Every 1
nums.every(function (x) {
  return x >= 0;
});

// Every 2
panagram.every(function (x) {
  return x.split("").length <= 8;
});

// Filter 1
nums.filter(function (x) {
  return x < 4;
});

// Filter 2
panagram.filter(function (x) {
  return x.split("").length % 2 === 0;
});

// Find 1
nums.find(function (x) {
  return x % 5 === 0;
});

// Find 2
panagram.find(function (x) {
  return x.split("").length > 5;
});

// Find index 1
nums.findIndex(function (x) {
  return x % 3 === 0;
});

// Find index 2
panagram.findIndex(function (x) {
  return x.split("").length < 2;
});

// For each 1
nums.forEach(function (x) {
  console.log(x * 3);
});

// For each 2
panagram.forEach(function (x) {
  console.log(`${x}!`);
});
// Map 1
const mapNumbers = nums.map(function (x) {
  return x * 100;
});
console.log(mapNumbers);

// Map 2
const mapWords = panagram.map(function (x) {
  return x.toUpperCase();
});
console.log(mapWords);

// Some 1
nums.some(function (x) {
  return x / 7;
});

// Some 2
panagram.some(function (x) {
  return x.split("").indexOf("a") > -1;
});
