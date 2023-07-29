//===============================================Verbal Questions========================================
//What is the difference between a parameter and an argument?
//A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.
//Within a function, what is the difference between return and console.log?
//The main purpose of the return value, is to use the function return value like you would have use a variable value. the console. log(); is a function (you can see the brackets) that will write the argument value on the console.

//===============================================Palindrome========================================

// const inputWord = "Radar";

// function checkPalindrome(inputWord) {
//   const inputWordL = inputWord.toLowerCase(); //lower case
//   console.log(inputWordL);
//   const splitInput = inputWordL.split(""); //splitting
//   console.log(splitInput);
//   const reverseInput = splitInput.reverse(); //reversing
//   console.log(reverseInput);
//   const joinReverse = reverseInput.join(""); //joining
//   console.log(joinReverse); //combining
//   if (inputWordL === joinReverse) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// checkPalindrome(inputWord);

//===============================================Sum Array========================================
// let sum = 0;
// const inputArr = [1, 2, 3, 4, 5, 6];
// function sumArray() {
//   for (i = 0; i < inputArr.length; i++) {
//     sum += inputArr[i];
//   }
//   return sum;
// }

// console.log(sumArray(inputArr));

//===============================================Prime Numbers===============================================

// const num1 = 12;
// let isPrime = true;
// function checkPrime() {
//   if (num1 === 1) {
//     console.log("false");
//   } else if (num1 > 1) {
//     for (i = 2; i <= Math.sqrt(num1); i++) {
//       if (num1 % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// }
// checkPrime(num1);

//Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit.
//For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
//This function can call on the previous checkPrime function.

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

// printPrimes(43);

//===============================================Rock Paper Scissors===============================================
//Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players throw out one of
//the three options, rock, paper, or scissors.
//To determine who wins, use the following guidelines: rock beats scissors, scissors beats paper, paper beats rock.
//Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors).
//Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments,
//the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.

// const choices = ["rock", "paper", "scissors"];
// let computersMove = randomMove();
// let usersMove = randomMove();

// function randomMove() {
//   const randNum = Math.floor(Math.random() * 3); //creating a random number 1-3
//   // console.log(choices[randNum]);
//   return choices[randNum];
// }

// function rockPaperScissors(computersMove, usersMove) {
//   if (computersMove === usersMove) {
//     console.log("This is a draw!");
//   } else if (computersMove === "rock") {
//     console.log("computer chose rock");
//     if (usersMove === "paper") {
//       console.log("user chose paper");
//       console.log("paper beats rock, user wins!");
//     } else if (usersMove === "scissors") {
//       console.log("user chose scissors");
//       console.log("rock beats scissors, computer wins!");
//     }
//   } else if (computersMove === "paper") {
//     console.log("computer chose paper");
//     if (usersMove === "rock") {
//       console.log("user chose rock");
//       console.log("paper beats rock, computer wins!");
//     } else if ((usersMove = "scissors")) {
//       console.log("user chose scissors");
//       console.log("scissors beats paper, user wins!");
//     }
//   } else if (computersMove === "scissors") {
//     console.log("computer chose scissors");
//     if (usersMove === "rock") {
//       console.log("user chose rock");
//       console.log("rock beat scissors, user wins!");
//     } else if (usersMove === "paper") {
//       console.log("user chose paper");
//       console.log("scissors beat paper, computer wins!");
//     }
//   }
// }

// rockPaperScissors(computersMove, usersMove);

//===============================================Digit Sum===============================================
//Write a function sumDigits that accepts a number and returns the sum of its digits.

// const inputNum = 1274;

// let sum = 0;
// function sumDigits() {
//   const arrOfDigits = Array.from(String(inputNum), Number);
//   console.log(arrOfDigits); // 👉️ [1, 2, 3, 4]
//   for (i = 0; i < arrOfDigits.length; i++) {
//     sum += arrOfDigits[i];
//   }
//   return sum;
// }

// console.log(sumDigits(inputNum));
