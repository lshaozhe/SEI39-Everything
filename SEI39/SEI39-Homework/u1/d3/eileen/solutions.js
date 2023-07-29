//Verbal line questions
//1. Arguments are the declared variables that is passed into the function. Parameters are the names listed in the function definition.
//2. console.log logs the value that is passed in on the console whereas return stores the values and return the specified object or variable only when the function is called.

//Palindrome
function checkPalindrome(string) {
  string = string.toLowerCase();
  const reverseString = string.split("").reverse().join("").toLowerCase();
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

//Sum Array
let sum = 0;

function sumArray(Array) {
  for (i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  return sum;
}

//Prime Numbers
function checkPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(number) {
  primeNums = [];
  for (i = 2; i < number; i++) {
    if (checkPrime(i) === true) {
      primeNums.push(i);
    }
  }
  return primeNums;
}
console.log(printPrimes(97));

//Rock paper scissors
movesArr = ["rock", "paper", "scissors"];
function randomMove() {
  return movesArr[Math.floor(Math.random() * 3)];
}

function rockPaperScissors(computersMove, usersMove) {
  console.log(`computer chose ${computersMove}`);
  console.log(`user chose ${usersMove}`);
  if (
    (computersMove === movesArr[0] && usersMove === movesArr[2]) ||
    (computersMove === movesArr[1] && usersMove === movesArr[0]) ||
    (computersMove === movesArr[2] && usersMove === movesArr[1])
  ) {
    return `${computersMove} beats ${usersMove}, computer wins`;
  }
  if (computersMove === usersMove) {
    return "its a tie!";
  }
  return `${usersMove} beats ${computersMove}, user wins`;
}

let computersMove = randomMove();

let usersMove = process.argv[2];

console.log(rockPaperScissors(computersMove, usersMove));
