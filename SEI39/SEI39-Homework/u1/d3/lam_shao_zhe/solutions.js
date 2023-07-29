//////////////////////////////////////
//Verbal Questions
//1. Parameters refer to the variables within the function declaration that are input into the function during function declaration,
//   whereas arguments refer to the variables to be passed into the function during invocation of the function.
//
//2. Return within a function passes a value or reference back into the root file,
//   whereas console.log within functions calls the .log function.
//////////////////////////////////////

//////////////////////////////////////
//Palindrome
function checkPalindrome(inputVar) {
  let compareVar = reverseString(inputVar.toLowerCase());
  if (inputVar.toLowerCase() === compareVar) {
    return true;
  } else {
    return false;
  }
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(checkPalindrome("Radar")); //expect return to be true
console.log(checkPalindrome("Borscht")); //expect return to be false
//////////////////////////////////////

//////////////////////////////////////
//Sum Array
function sumArray(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
//////////////////////////////////////

//////////////////////////////////////
//Prime Numbers
function checkPrime(inputNum) {
  switch (inputNum) {
    case 1:
      return false;
    case 2:
      return true;
    case 3:
      return true;
    default:
      for (let i = 2; i <= inputNum ** 0.5; i++) {
        if (inputNum % i === 0) {
          return false;
        }
      }
      return true;
  }
}

function printPrime(inputNum) {
  for (let i = 1; i <= inputNum; i++) {
    if (checkPrime(i)) {
      console.log(`${i} is a prime number.`);
    }
  }
}

printPrime(97);
//////////////////////////////////////

//////////////////////////////////////
//Rock Paper Scissors
function randomMove() {
  const decisionNum = Math.ceil(Math.random() * 5);
  switch (decisionNum) {
    case 1:
      return "rock";
    case 2:
      return "scissor";
    case 3:
      return "paper";
    case 4:
      return "lizard";
    case 5:
      return "spock";
  }
}
function rockPaperScissors(userInput, comInput) {
  console.log(`computer chose ${comInput}`);
  console.log(`user chose ${userInput}`);
  switch (userInput) {
    case "scissor":
      switch (comInput) {
        //tie case
        case "scissor":
          return console.log(
            `${userInput} is the same as ${comInput}, nobody wins`
          );
        //win case
        case "rock":
        case "spock":
          return console.log(`${comInput} beats ${userInput}, computer wins`);
        //lose case
        case "paper":
        case "lizard":
          return console.log(`${userInput} beats ${comInput}, user wins`);
      }
    case "paper":
      switch (comInput) {
        //tie case
        case "paper":
          return console.log(
            `${userInput} is the same as ${comInput}, nobody wins`
          );
        //win case
        case "scissor":
        case "lizard":
          return console.log(`${comInput} beats ${userInput}, computer wins`);
        //lose case
        case "rock":
        case "spock":
          return console.log(`${userInput} beats ${comInput}, user wins`);
      }
    case "rock":
      switch (comInput) {
        //tie case
        case "rock":
          return console.log(
            `${userInput} is the same as ${comInput}, nobody wins`
          );
        //win case
        case "paper":
        case "spock":
          return console.log(`${comInput} beats ${userInput}, computer wins`);
        //lose case
        case "scissor":
        case "lizard":
          return console.log(`${userInput} beats ${comInput}, user wins`);
      }
    case "lizard":
      switch (comInput) {
        //tie case
        case "lizard":
          return console.log(
            `${userInput} is the same as ${comInput}, nobody wins`
          );
        //win case
        case "rock":
        case "scissor":
          return console.log(`${comInput} beats ${userInput}, computer wins`);
        //lose case
        case "paper":
        case "spock":
          return console.log(`${userInput} beats ${comInput}, user wins`);
      }
    case "spock":
      switch (comInput) {
        //tie case
        case "spock":
          return console.log(
            `${userInput} is the same as ${comInput}, nobody wins`
          );
        //win case
        case "lizard":
        case "paper":
          return console.log(`${comInput} beats ${userInput}, computer wins`);
        //lose case
        case "rock":
        case "scissor":
          return console.log(`${userInput} beats ${comInput}, user wins`);
      }
  }
}
let computersMove = randomMove();
let usersMove = randomMove();
rockPaperScissors(computersMove, usersMove);
