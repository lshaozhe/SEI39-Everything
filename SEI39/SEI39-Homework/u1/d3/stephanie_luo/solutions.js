/////////////////////////////////////////
// Verbal Questions //
/////////////////////////////////////////

// Q1 //
// my commented answer: The values that are declared within a function when the function is called are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.

// Q2 //
// my commented answer: console. log is function that logs passed in argument to console. return is keyword, which part of the return statement, used to end function execution. Once line with it is executed, the function is exited and function returns whatever is defined in the return statement.

/////////////////////////////////////////
// Palindrome //
/////////////////////////////////////////
function checkPalindrome(word) {
  let wordToUpperCase = word.toUpperCase();
  let wordReversed = wordToUpperCase.split("").reverse().join("");
  let results = wordToUpperCase === wordReversed;
  return results;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

/////////////////////////////////////////
// Sum Array //
/////////////////////////////////////////
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

/////////////////////////////////////////
// Prime Numbers //
/////////////////////////////////////////

// Step 1 //
// using trial division

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

console.log(checkPrime(4));

// Step 2 //
// expected results: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function printPrimes(num) {
  for (i = 0; i <= num; i++) {
    if (checkPrime(i) === true) {
      console.log(i);
    }
  }
}

printPrimes(97);

/////////////////////////////////////////
// Rock Paper Scissors //
/////////////////////////////////////////
const move = ["rock", "paper", "scissors"];

function randomMove() {
  let randomIndex = Math.floor(Math.random() * move.length);
  let choice = move[randomIndex];
  return choice;
}

// game play //
function rockPaperScissors(computersMove, usersMove) {
  const userWin = `computer chose ${computersMove}\nuser chose ${usersMove}\nuser wins!`;
  const computerWin = `computer chose ${computersMove}\nuser chose ${usersMove}\ncomputer wins!`;
  const draw = `computer chose ${computersMove}\nuser chose ${usersMove}\nit's a draw!`;

  if (computersMove === usersMove) {
    return console.log(draw);
  } else if (computersMove === move[0]) {
    if (usersMove === move[1]) {
      return console.log(userWin);
    } else {
      return console.log(computerWin);
    }
  } else if (computersMove === move[1]) {
    if (usersMove === move[2]) {
      return console.log(userWin);
    } else {
      return console.log(computerWin);
    }
  } else if (computersMove === move[2]) {
    if (usersMove === move[0]) {
      return console.log(userWin);
    } else {
      return console.log(computerWin);
    }
  }
}

let computersMove = randomMove();
let usersMove = randomMove();
rockPaperScissors(computersMove, usersMove);

// Super bonuses for rock paper scissors //
