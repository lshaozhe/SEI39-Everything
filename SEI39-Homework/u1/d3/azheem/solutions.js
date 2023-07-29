"use strict";

////////////////////////////////
// Verbal Questions
////////////////////////////////

// Q: What is the difference between a parameter and an argument?
// A: Parameter is the variable that is passed into a function. Argument is the values that is passed into the function.

// Q: Within a function, what is the difference between return and console.log?
// A: return is the output of the function whereas console.log simply "prints" or logs in the console whatever that is specified in the brackets.

////////////////////////////////
// Palindrome
////////////////////////////////

let inputString = "Borscht";

function checkPalindrome(inputString) {
  let lowercaseInput = inputString.toLowerCase();
  let letters = lowercaseInput.split("");
  const result = "";
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== letters[letters.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

checkPalindrome(inputString);

////////////////////////////////
// Sum Array
////////////////////////////////

function sumArray(inputNumArray) {
  let sum = 0;
  for (let i = 0; i < inputNumArray.length; i++) {
    sum = sum + inputNumArray[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

////////////////////////////////
// Prime Numbers
////////////////////////////////

// Step One

function checkPrime(num) {
  let checkLimit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= checkLimit; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
}

console.log(checkPrime(19));

// Step Two

function printPrimes(input) {
  for (let i = 2; i <= input; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(20);

////////////////////////////////
// Rock Paper Scissors
////////////////////////////////

function randomMove() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function rockPaperScissors(compChoice, userChoice) {
  switch (compChoice === "rock") {
    case userChoice === "rock":
      return "Draw!";
    case userChoice === "paper":
      return "User wins!";
    case userChoice === "scissors":
      return "Computer wins!";
  }
  switch (compChoice === "paper") {
    case userChoice === "paper":
      return "Draw!";
    case userChoice === "scissors":
      return "User wins!";
    case userChoice === "rock":
      return "Computer wins!";
  }
  switch (compChoice === "scissors") {
    case userChoice === "scissors":
      return "Draw!";
    case userChoice === "rock":
      return "User wins!";
    case userChoice === "paper":
      return "Computer wins!";
  }
}

let computersMove = randomMove();

let usersMove = randomMove();

console.log(`computer chose ${computersMove}`);
console.log(`user chose ${usersMove}`);
console.log(rockPaperScissors(computersMove, usersMove));

////////////////////////////////
// Hungry for More -- Digit Sum
////////////////////////////////

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumDigits(42));

////////////////////////////////
// Hungry for More -- Pythagoras
////////////////////////////////

function calculateSide(sideA, sideB) {
  let sideC = Math.sqrt(sideA ** 2 + sideB ** 2);
  return sideC;
}

console.log(calculateSide(8, 6));

////////////////////////////////
// Hungry for More -- Triangles
////////////////////////////////

function printRightIsoscelesTriangle(input) {
  let toPrint = "";
  let row = 1;

  for (let row = 1; row <= input; row++) {
    toPrint += "#"; // adds "#" to toPrint
    console.log(toPrint); // console.log toPrint row by row
  }
}

function printUpsideDownRightIsoscelesTriangle(input) {
  let toPrint = "";

  for (let i = 1; i <= input; i++) {
    toPrint += "#"; // to create toPrint for the top most row
  }

  for (let row = 1; row <= input; row++) {
    console.log(toPrint); // console.log toPrint row by row
    toPrint = toPrint.replace("#", ""); // remove 1 "#" from toPrint
  }
}

printRightIsoscelesTriangle(7);
printUpsideDownRightIsoscelesTriangle(6);
