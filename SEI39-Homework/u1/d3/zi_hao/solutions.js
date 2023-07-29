// Verbal Questions

// 1.
// A parameter refers to the variables that are defined
// when the function is declared, while an argument refers
// to the values that are declared within a function when
// the function is called.

// 2.
// Return is used to return values from a function, while
// console.log helps to print information to the console.

// Palindrome

const checkPalindrome = (stringToCheck) => {
  const stringLength = stringToCheck.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (
      stringToCheck[i].toLowerCase() !=
      stringToCheck[stringLength - 1 - i].toLowerCase()
    ) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// Sum Array
const sumArray = (arrayName) => {
  let sum = 0;
  for (let i = 0; i < arrayName.length; i++) {
    sum += arrayName[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers
const checkPrime = (numberToCheck) => {
  for (let i = 2; i < numberToCheck; i++)
    if (numberToCheck % i === 0) {
      return false;
    } else {
      return true;
    }
};
console.log(checkPrime(5));

function printPrimes(numberToCheck) {
  for (let i = 1; i < numberToCheck; i++) {
    const number2 = checkPrime(i);
    if (number2) {
      console.log(i);
    }
  }
}

printPrimes(97);

// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
function randomMove() {
  const selectedChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(selectedChoice);
  return selectedChoice;
}

let computersMove = randomMove();
let usersMove = randomMove();

console.log({ computersMove, usersMove });

const rockPaperScissors = (computersMove, usersMove) => {
  console.log(`${computersMove} ${usersMove}`);
  if (computersMove === usersMove) {
    console.log(`Both players chose ${computersMove}, it's a tie`);
  } else if (computersMove === "rock" && usersMove === "paper") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, player wins`
    );
  } else if (computersMove === "rock" && usersMove === "scissors") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, computer wins`
    );
  } else if (computersMove === "paper" && usersMove === "rock") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, computer wins`
    );
  } else if (computersMove === "paper" && usersMove === "scissors") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, player wins`
    );
  } else if (computersMove === "scissors" && usersMove === "rock") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, player wins`
    );
  } else if (computersMove === "scissors" && usersMove === "paper") {
    console.log(
      `Computer chose ${computersMove}, player chose ${usersMove}, computer wins`
    );
  }
};
rockPaperScissors(computersMove, usersMove);
