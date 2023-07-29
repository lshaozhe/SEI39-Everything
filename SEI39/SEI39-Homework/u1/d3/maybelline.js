//////////////////////////////
//VERBAL QUESTIONS
//////////////////////////////

//1. What is the difference between a parameter and an argument?
//Function parameters are the names listed in the function's definition. Function arguments are the real values passed to the function.

//2. Within a function, what is the difference between return and console.log?
//console. log is function that logs passed in argument to console. return is keyword, which part of the return statement, used to end function execution

//////////////////////////////
//PALINDROME
//////////////////////////////

const checkPalindrome = (word) => {
  let reverseString = word.split("").reverse().join("");
  if (word.toLowerCase() == reverseString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
/////////////////////////////

///////////////////////////////
//SUM ARRAY
////////////////////////////////

//Write a function sumArray that takes an array as an argument.
//The array should contain numbers. The function should return the sum of the numbers in the array.
//Use a for loop within the function to iterate over the array and sum the contents.
//Use a variable such as

const sumArray = [(1, 2, 3, 4, 5, 6)];

function addArray(array) {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumArray);

/////////////////////////////
// PRIME NUMBERS
/////////////////////////////

//Step One
//Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
//Hint: Check every number up to the square root. To do this, try a for loop.
function checkPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log(checkPrime(150));

//Step Two
//Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
//This function can call on the previous checkPrime function.
function printPrimes(max) {
  let store = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
}
console.log(printPrime(97));
//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/// Rock Paper Scissors
////////////////////////////////////////////////////////
//Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players throw out one of the three options, rock, paper, or scissors. To determine who wins, use the following guidelines: rock beats scissors, scissors beats paper, paper beats rock.

//Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors).

const randomMove = () => {
  const randomReturn = Math.floor(Math.random() * 3);
  if (randomReturn === 0) {
    return "Rock";
  } else if (randomReturn === 1) {
    return "Paper";
  } else if (randomReturn === 2) {
    return "Scissor";
  }
};
console.log(randomMove());

//Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments, the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.
