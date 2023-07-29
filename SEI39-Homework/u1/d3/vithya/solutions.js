////////////////////////////////////////////////////////////////
// Verbal questions

/*
What is the difference between a parameter and an argument?

Parameters are the variables which are defined in the function declaration.
They are local variables as they are only available witin the function.

Arguments are the variables given to the function for execution. The local variables of the function
will take the values of the arguments and can process these parameters for the final output. 

Within a function, what is the difference between return and console.log?

console.log outputs a message to the web console.
return statement ends the function execution and if specified, a given value is returned to the function caller.
*/
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Palindrome
function checkPalindrome(str) {
  str = str.toLowerCase();
  let reverseString = str.split("").reverse().join("");
  if (reverseString === str) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Sum Array
let sum = 0;
const array = [1, 2, 3, 4, 5, 6];

function sumArray(arr) {
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray(array));
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Prime Numbers
function checkPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(number) {
  for (let i = 1; i <= number; i++) {
    if (checkPrime(i) === true) {
      console.log(i);
    }
  }
}

printPrimes(97);
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Rock Paper Scissors
let options = ["rock", "paper", "scissors"];

function randomMove() {
  return options[Math.floor(Math.random() * options.length)];
}

let computersMove = randomMove();
let usersMove = randomMove();

function win() {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);
  console.log(`${computersMove} beats ${usersMove}, computer wins!`);
}

function lose() {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);
  console.log(`${usersMove} beats ${computersMove}, user wins!`);
}

function draw() {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);
  console.log("It is a draw!");
}

function rockPaperScissors(computersMove, usersMove) {
  if (computersMove === usersMove) {
    draw();
  } else {
    switch (computersMove + usersMove) {
      case "paperrock":
      case "scissorspaper":
      case "rockscissors":
        win();
        break;
      case "paperscissors":
      case "rockpaper":
      case "scissorsrock":
        lose();
    }
  }
}

rockPaperScissors(computersMove, usersMove);
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Rock, Paper, Scissors, Lizard, Spock
let gameOptions = ["rock", "paper", "scissors", "lizard", "spock"];

function randomNewMove() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

let computersNewMove = randomNewMove();
let usersNewMove = process.argv[2];

function winOption() {
  console.log(`computer chose ${computersNewMove}`);
  console.log(`user chose ${usersNewMove}`);
  console.log(`${computersNewMove} beats ${usersNewMove}, computer wins!`);
}

function loseOption() {
  console.log(`computer chose ${computersNewMove}`);
  console.log(`user chose ${usersNewMove}`);
  console.log(`${usersNewMove} beats ${computersNewMove}, user wins!`);
}

function drawOption() {
  console.log(`computer chose ${computersNewMove}`);
  console.log(`user chose ${usersNewMove}`);
  console.log("It is a draw!");
}

function rpsls(computersNewMove, usersNewMove) {
  if (computersNewMove === usersNewMove) {
    drawOption();
  } else {
    switch (computersNewMove + usersNewMove) {
      case "paperrock":
      case "scissorspaper":
      case "rocklizard":
      case "lizardspock":
      case "sporkscissors":
      case "scissorslizard":
      case "lizardpaper":
      case "paperspork":
      case "sporkrock":
      case "rockscissors":
        winOption();
        break;
      case "paperscissors":
      case "rockpaper":
      case "scissorsrock":
      case "lizardrock":
      case "scissorsspork":
      case "lizardscissors":
      case "paperlizard":
      case "sporkpaper":
      case "rockspork":
        loseOption();
    }
  }
}

rpsls(computersNewMove, usersNewMove);
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Digit Sum
let sumUp = 0;

function sumDigits(num) {
  let digits = num.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    // convert string to integer
    sumUp += parseInt(digits[i]);
  }
  return sumUp;
}

console.log(sumDigits(42));
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Pythagoras
function calculateSide(sideA, sideB) {
  return (sideC = Math.sqrt(sideA ** 2 + sideB ** 2));
}
console.log(calculateSide(8, 6));
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Triangles
function makeTriangle(height) {
  for (i = 1; i <= height; i++) {
    console.log("#".repeat(i));
  }
}
makeTriangle(7);

// Upside Down Triangle
function makeNewTriangle(newHeight) {
  for (i = newHeight; i > 0; i--) {
    console.log("#".repeat(i));
  }
}

makeNewTriangle(6);
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// "Second" Numbers
let newArray = [4, 2, 6, 9, 5];

function secondNumbers(array1) {
  array1.sort(function (a, b) {
    return a - b;
  });
}

secondNumbers(newArray);

console.log(`second highest: ${newArray[newArray.length - 2]}`);
console.log(`second lowest: ${newArray[1]}`);

////////////////////////////////////////////////////////////////
// Unique String
function uniqueString(string) {
  let uniqueChars = [...new Set(string)];
  console.log(uniqueChars);
}

uniqueString("helloworld");
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Insert Dash
function insertDash(newNumber) {
  let newString = newNumber.toString().split("");
  const arrayNumber = newString.map(Number);
  for (i = 0; i < arrayNumber.length - 1; i++) {
    if (
      arrayNumber[i] % 2 !== 0 &&
      (arrayNumber[i - 1] % 2 !== 0 || arrayNumber[i + 1] % 2 !== 0)
    ) {
      arrayNumber[i] = arrayNumber[i] + "-";
    }
  }
  console.log(arrayNumber.join(""));
}

insertDash(454793);
////////////////////////////////////////////////////////////////
