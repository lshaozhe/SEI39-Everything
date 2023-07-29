"use strict";

///////////////////////
// Verbal questions completed
//////////////////////

// 1. The argument is the input, the parameter is how the input is represented in the function.
// 2. console.log is to print or output, return is to get the result from a function.

////////////////////////
// palindrome completed
////////////////////////

function checkPalindrome(word) {
  let wordToLowerCase = word.toLowerCase();
  let wordReversed = wordToLowerCase.split("").reverse().join("");
  let results = wordToLowerCase === wordReversed;
  return results;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

///////////////////////////
// sum array completed
///////////////////////////

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

//////////////////////////
// prime numbers completed
//////////////////////////

function checkPrime(num) {
  if (num < 2) {
    return false;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }

  return isPrime;
}

console.log(checkPrime(13));

//////////////////////////
// rock paper scissors completed
//////////////////////////

function randomMove() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function rockPaperScissors(computersMove, usersMove) {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);

  // Tie
  if (computersMove === usersMove) {
    console.log("Tie!");

    // Computer Wins
  } else if (computersMove === "rock" && usersMove === "scissors") {
    console.log(`${computersMove} beats ${usersMove}, computer wins!`);
  } else if (computersMove === "paper" && usersMove === "rock") {
    console.log(`${computersMove} beats ${usersMove}, computer wins!`);
  } else if (computersMove === "scissors" && usersMove === "paper") {
    console.log(`${computersMove} beats ${usersMove}, computer wins!`);

    // Player Wins
  } else if (computersMove === "rock" && usersMove === "paper") {
    console.log(`${usersMove} beats ${computersMove}, user wins!`);
  } else if (computersMove === "paper" && usersMove === "scissors") {
    console.log(`${usersMove} beats ${computersMove}, user wins!`);
  } else if (computersMove === "scissors" && usersMove === "rock") {
    console.log(`${usersMove} beats ${computersMove}, user wins!`);
  }
}

let computersMove = randomMove();
let usersMove = randomMove();

rockPaperScissors(computersMove, usersMove);
