// Verbal Questions

// 1. A parameter is a variable that a function takes in, an argument is the value of a parameter.
// 2. Return gives back the final resulting value of a function. Console.log is a function that prints the argument onto the console.

// Palindrome
function checkPalindrome(text) {
  arrText = text.split();
  textReversed = arrText.reverse();
  if (arrText === textReversed) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// Sum Array
function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers
function checkPrime(num) {
  let max = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(num) {
  let text = "";

  if (num >= 2) {
    text += "2 ";
  } else {
    console.log("No prime numbers");
    return;
  }

  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      text += `${i} `;
    }
  }
  console.log(text);
}

printPrimes(97);

// Rock Paper Scissors
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

// Digit Sum
function sumDigits(num) {
  const arrNum = String(num).split("");

  let sum = 0;
  for (const item of arrNum) {
    sum += Number(item);
  }

  console.log(sum);
}

sumDigits(42);

// Pythagoras
function calculateSide(sideA, sideB) {
  return Math.sqrt(sideA ** 2 + sideB ** 2);
}

console.log(calculateSide(3, 5));

// Triangles
function printTriangle(height) {
  let text = "";

  for (let i = 0; i < height; i++) {
    text += "#";
    console.log(text);
  }
}

printTriangle(7);

function printInvertedTriangle(height) {
  let text = "";

  for (let i = height; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      text += "#";
    }
    console.log(text);
    text = "";
  }
}

printInvertedTriangle(6);

// "Second" Numbers
function secondNumbers(arr) {
  const arrCopy = [...arr];
  arrCopy.sort(function (a, b) {
    return a - b;
  });
  console.log(`second highest: ${arrCopy[arrCopy.length - 2]}`);
  console.log(`second lowest: ${arrCopy[1]}`);
}

secondNumbers([4, 2, 6, 9, 5]);

// Unique String
function checkDuplicate(arr, index) {
  arrCopy = [...arr];
  arrCopy.splice(index, 1);

  for (let i = 0; i < arrCopy.length; i++) {
    if (arr[index] === arrCopy[i]) {
      return true;
    }
  }

  return false;
}

function uniqueString(text) {
  arrText = text.split("");

  for (let i = 0; i < arrText.length; i++) {
    if (checkDuplicate(arrText, i)) {
      arrText.splice(i, 1);
    }
  }

  return arrText;
}

console.log(uniqueString("icecream"));

// Insert Dash
function insertDash(num) {
  const numArray = String(num).split("");

  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] !== "-" && numArray[i + 1] !== "-") {
      if (Number(numArray[i]) % 2 === 1 && Number(numArray[i + 1]) % 2 === 1) {
        numArray.splice(i + 1, 0, "-");
      }
    }
  }

  return numArray.join("");
}

console.log(insertDash(454793));
