//================================================
// Verbal Questions
//================================================
// What is the difference between a parameter and an argument?
//A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.
// Within a function, what is the difference between return and console.log?
//The main purpose of the return value, is to use the function return value like you would have use a variable value. the console. log(); is a function (you can see the brackets) that will write the argument value on the console

//================================================
// Palindrome
//================================================
// const inputWord = "Radar";

// function checkPalindrome(inputWord) {
//   const splitInput = inputWord.split("");
//   console.log(splitInput);
//   const reverseInput = splitInput.reverse();
//   console.log(reverseInput);
//   const joinReverseInput = reverseInput.join("");
//   console.log(joinReverseInput);
//   const lowerInputWord = inputWord.toLowerCase();
//   console.log(lowerInputWord);
//   const lowerJoinReverseInput = joinReverseInput.toLowerCase();
//   console.log(lowerJoinReverseInput);
//   if (lowerInputWord == lowerJoinReverseInput) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
// checkPalindrome(inputWord);

//================================================
// Sum Array
//================================================
// let sum = 0;
// const arr = [1, 2, 3, 4, 5, 6];
// function sumArray() {
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray(arr));

//================================================
// Prime Numbers
//================================================
// const num = 9;
// let isPrime = true;
// function checkPrime() {
//   if (num === 1) {
//     isPrime = false;
//   } else if (num > 1) {
//     for (i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//       }
//     }
//   }
//   if (isPrime) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
// checkPrime(num);

// let isPrime = true;

// function checkPrime(number) {
//   if (number === 1) {
//     return false;
//   } else if (number > 1) {
//     for (i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// function printPrimes(number) {
//   for (j = 1; j <= number; j++) {
//     if (checkPrime(j)) {
//       console.log(j);
//     }
//   }
// }
// printPrimes(79);

//================================================
// Rock Paper Scissors
//================================================
// const choices = ["rock", "paper", "scissors"];

// function randomMove() {
//   const randomNum = Math.floor(Math.random() * 3);
//   return choices[randomNum];
// }

// let computersMove = randomMove();
// let usersMove = randomMove();

// function rockPaperScissors(computersMove, usersMove) {
//   if (computersMove === usersMove) {
//     console.log("this is a draw.");
//   } else if (computersMove === "rock") {
//     console.log("computer chose rock");
//     if (usersMove === "paper") {
//       console.log("user chose paper");
//       console.log("paper beats rock, user wins");
//     } else if (usersMove === "scissors") {
//       console.log("user chose scissors");
//       console.log("rock beats scissors, computer wins");
//     }
//   } else if (computersMove === "paper") {
//     console.log("computer chose paper");
//     if (usersMove === "rock") {
//       console.log("user chose rock");
//       console.log("paper beats rock, computer wins");
//     } else if (usersMove === "scissors") {
//       console.log("user chose scissors");
//       console.log("scissors beats paper, user wins");
//     }
//   } else if (computersMove === "scissors") {
//     console.log("computer chose scissors");
//     if (usersMove === "rock") {
//       console.log("user chose rock");
//       console.log("rock beats scissors, user wins");
//     } else if (usersMove === "paper") {
//       console.log("user chose paper");
//       console.log("scissors beats paper, computer wins");
//     }
//   }
// }
// rockPaperScissors(computersMove, usersMove);

//================================================
//  Digit Sum
//================================================
//Write a function sumDigits that accepts a number and returns the sum of its digits.
//console.log(sumDigits(42)); => 6
const inputNum = 424;

let sum = 0;
function sumDigits() {
  const arrOfDigits = Array.from(String(inputNum), Number);
  console.log(arrOfDigits); //becomes [2, 2, 2]
  for (i = 0; i < arrOfDigits.length; i++) {
    sum += arrOfDigits[i];
  }
  return sum;
}
console.log(sumDigits(inputNum));
