// Q1. What is the difference between a parameter and an argument?
// A1. A parameter is the named variable that is passed into the function whereas an argument is the actual value passed into the function.

// Q2. Within a function, what is the difference between return and console.log?
// A2. return throws out a thing after the function is run. The thing could be a variable, array, object, string, number, boolean, etc. The thing does not do anything on its own, but can be utilised for other purposes (calculations or logging). console.log takes an argument and prints it in the console.

// =========================================================================
// Palindrome
// =========================================================================

function checkPalindrome(string) {
  const reversedString = string.toLowerCase().split("").reverse().join("");
  if (string.toLowerCase() === reversedString) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("Radar"));

// =========================================================================
// Sum Array
// =========================================================================

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

function sumArray(array) {
  let sum = 0;

  for (number of array) {
    if (typeof number !== "number") {
      return "Please ensure that all elements in the array are numbers.";
    }
    sum += number;
  }
  return sum;
}
console.log(sumArray(arrayOfNumbers));

// =========================================================================
// Prime Numbers
// =========================================================================

function checkPrime(num) {
  if (num === 1) {
    return false;
  } else {
    for (i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(checkPrime(4));

function printPrimes(num) {
  for (j = 1; j <= num; j++) {
    if (checkPrime(j)) {
      console.log(j);
    }
  }
}
printPrimes(100);

// =========================================================================
// Rock Paper Scissors
// =========================================================================

const rpsOptions = ["Rock", "Paper", "Scissors"];

function rpsRandomMove() {
  const randomIndex = Math.round(Math.random() * (rpsOptions.length - 1));
  const randomChoice = rpsOptions[randomIndex];
  return randomChoice;
}

let rpsComputersMove = rpsRandomMove();
let rpsUsersMove = rpsRandomMove();

function rockPaperScissors(rpsUsersMove, rpsComputersMove) {
  if (rpsUsersMove === rpsComputersMove) {
    return `User chose ${rpsUsersMove}, Computer chose ${rpsComputersMove}. It's a tie!`;
  } else {
    switch (rpsUsersMove + rpsComputersMove) {
      case "RockScissors":
      case "ScissorsPaper":
      case "PaperRock":
        return `User chose ${rpsUsersMove}, Computer chose ${rpsComputersMove}. User wins!`;
      default:
        return `User chose ${rpsUsersMove}, Computer chose ${rpsComputersMove}. Computer wins!`;
    }
  }
}
console.log(rockPaperScissors(rpsUsersMove, rpsComputersMove));

// =========================================================================
// Rock Paper Scissors Lizard Spock
// =========================================================================

const rpslsOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function rpslsRandomMove() {
  const randomIndex = Math.round(Math.random() * (rpslsOptions.length - 1));
  const randomChoice = rpslsOptions[randomIndex];
  return randomChoice;
}

let rpslsComputersMove = rpsRandomMove();
let rpslsUsersMove = rpslsRandomMove();

function rockPaperScissorsLizardSpock(rpslsUsersMove, rpslsComputersMove) {
  if (rpslsUsersMove === rpslsComputersMove) {
    return `User chose ${rpslsUsersMove}, Computer chose ${rpslsComputersMove}. It's a tie!`;
  } else {
    switch (rpslsUsersMove + rpslsComputersMove) {
      case "RockScissors":
      case "RockLizard":
      case "ScissorsPaper":
      case "ScissorsLizard":
      case "PaperRock":
      case "PaperSpock":
      case "LizardSpock":
      case "LizardPaper":
      case "SpockScissors":
      case "SpockRock":
        return `User chose ${rpslsUsersMove}, Computer chose ${rpslsComputersMove}. User wins!`;
      default:
        return `User chose ${rpslsUsersMove}, Computer chose ${rpslsComputersMove}. Computer wins!`;
    }
  }
}
console.log(rockPaperScissorsLizardSpock(rpslsUsersMove, rpslsComputersMove));
