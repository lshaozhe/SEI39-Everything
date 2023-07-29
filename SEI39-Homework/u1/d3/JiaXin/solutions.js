//What is the difference between a parameter and an argument?
//Parameter is the variable in the declaration of the function.
//Argument is the actual value of this variable that gets passed to the function.

//Within a function, what is the difference between return and console.log?
// console. log(); is a function that will write/print the argument value on the console.
//return value is use the function return value and end the execution of the function.
//"verbal questions completed"

//Palindrome
/*Return true if the given string is a palindrome.
A palindrome is a word or sentence that’s spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.
*/

function checkPalindrome(input) {
  const newString = input.split("").reverse().join("").toLowerCase();
  input = input.toLowerCase();
  if (newString === input) {
    return true;
  }
  return false;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

//"palindrome completed"

//Sum Array

function sumArray(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i]; // add each element in an array to total
  }
  return sum; // return sum of elements in array
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
//"sum array completed"

//Step one
function checkPrime(i) {
  let iSqRt = Math.sqrt(i);

  if (i === 2) {
    return true;
  } else if (i === 1) {
    return false;
  } else {
    for (num = 2; num <= iSqRt; num++) {
      if (i % num === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(checkPrime(4));

//Step two
function printPrimes(limit) {
  for (let i = 1; i <= limit; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}
//"prime numbers completed"
printPrimes(97);

function randomMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)]; // a value that is randomly chose
}

function rockPaperScissors(computersMove, usersMove) {
  console.log("computer chose " + computersMove); // print the value of computer chose
  console.log("user chose " + usersMove); // print the value of user chose

  if (computersMove == usersMove) {
    console.log("It is a tie!");
  } else {
    if (computersMove == "rock" && usersMove == "paper")
      console.log(usersMove + " beats " + computersMove + ", user wins!");
    else if (computersMove == "scissors" && usersMove == "rock")
      console.log(usersMove + " beats " + computersMove + ", user wins!");
    else if (computersMove == "paper" && usersMove == "scissors")
      console.log(usersMove + " beats " + computersMove + ", user wins!");
    else
      console.log(computersMove + " beats " + usersMove + ", computer wins!");
  }
}
rockPaperScissors(randomMove(), randomMove());
//"rock paper scissors completed"
