//verbal Questions
//1. Parameters are the aliases for the values that will be passed to the function.
//Whereas, arguments are the actual values
//2. Console.log is a function that will write the argument value to the console.
//Whereas, the main purpose of return is to stop the execution of a function and return a specified value.
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Palindrome
function checkPalindrome(word) {
  const midLetter = Math.ceil(word.length / 2);
  const lowerCase = word.toLowerCase();
  const wordArr = lowerCase.split("");
  const firstHalf = [];
  const secondHalf = [];
  for (let i = 0; i < midLetter - 1; i++) {
    firstHalf.push(wordArr[i]);
  }
  for (let i = midLetter; i < word.length; i++) {
    secondHalf.push(word[i]);
  }
  const secondHalfReverse = secondHalf.reverse();
  if (firstHalf.toString() === secondHalfReverse.toString()) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
////////////////////////////////////////////////////////////////
//Sum Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
//////////////////////////////////////////////////////////////////
//Prime Numbers
//Step One
function checkPrime(n) {
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(20));
//Step Two
function printPrimes(n) {
  if (n === 2) {
    return console.log(2);
  }
  console.log(2);
  for (let i = 3; i <= n; i++) {
    let primeStatus = checkPrime(i);
    if (primeStatus === true) {
      console.log(i);
    }
  }
}
printPrimes(97);
/////////////////////////////////////////////////////////////
//Rock Paper Scissors
function randomMove() {
  const moves = ["rock", "paper", "scissors"];
  let choice = moves[Math.round(Math.random() * 2)];
  return choice;
}
function rockPaperScissors(comp, user) {
  console.log(`computer chose ${comp}`);
  console.log(`user chose ${user}`);
  switch (comp) {
    case "rock":
      switch (user) {
        case "rock":
          return "draw";
        case "paper":
          return "paper beats rock, user wins!";
        case "scissors":
          return "rock beats scissors, computer wins!";
      }
    case "paper":
      switch (user) {
        case "rock":
          return "paper beats rock, computer wins!";
        case "paper":
          return "draw";
        case "scissors":
          return "scissors beat paper, user wins!";
      }
    case "scissors":
      switch (user) {
        case "rock":
          return "rock beats scissors, user wins!";
        case "paper":
          return "scissors beat paper, computer wins!";
        case "scissors":
          return "draw";
      }
  }
}

let computersMove = randomMove();
let usersMove = randomMove();
console.log(rockPaperScissors(computersMove, usersMove));
////////////////////////////////////////////////////////////////
//Hungry for More??
//Digir Sum
function sumDigits(digits) {
  const digiStr = digits.toString();
  console.log(digiStr);
  const digiArr = digiStr.split("");
  console.log(digiArr);
  const digiArrNum = [];
  let sum = 0;
  for (let i = 0; i < digiArr.length; i++) {
    digiArrNum.push(Number(digiArr[i]));
    console.log(digiArrNum);
  }
  for (let i = 0; i < digiArrNum.length; i++) {
    sum += digiArrNum[i];
  }
  return sum;
}
console.log(sumDigits(42));
//Pythagoras
function calculateSide(sideA, sideB) {
  let sideC = Math.sqrt(sideA ** 2 + sideB ** 2);
  return sideC;
}
console.log(calculateSide(8, 6));
//Triangles
let arg1 = 7;
let printLn = "";
for (let i = 0; i <= arg1; i++) {
  printLn += "#";
  console.log(printLn);
}
let arg2 = 6;
for (let i = arg2; i > 0; i--) {
  console.log("#".repeat(i));
}
