///////////////////////////////////
// Verbal Questions
// 1. The parameter is the variable for the inputs that needs to be passed into the functions.
// The argument is the actual input that is passed into the function when it is called.

// 2. Return saves the final value of the function as a defined output.
// Console.log prints the specified value to the console, but it does not save it as the value for the function, so the
// function's output remains undefined.

///////////////////////////////////
// Palindrome
// function checkPalindrome(x) {
//   let len = x.length;
//   let mid = Math.floor(x.length / 2);

//   for (i = 0; i < mid; i++) {
//     if (x[i] === x[x.length - 1 - i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// // console.log(checkPalindrome("RADAR"));

// ///////////////////////////////////
// // Sum Array
// function sumArray(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// ///////////////////////////////////
// // Prime Numbers
// // Step One
// function checkPrime(num) {
//   let numSqRt = Math.sqrt(num);

//   if (num === 2) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   } else {
//     for (i = 2; i <= numSqRt; i++) {
//       if (num % i === 0) {
//         return false; // function ends with result true as long as there is a single false encountered
//       }
//     }
//     return true; // function ends with true if it did not end with false after going through the full loop
//   }
// }

// // console.log(checkPrime(4));

// // Step Two
// function printPrimes(x) {
//   for (let i = 1; i <= x; i++) {
//     if (checkPrime(i) === true) {
//       console.log(i);
//     }
//   }
// }

// printPrimes(97);

// ///////////////////////////////////
// // Rock Paper Scissors
// // 1.

// function randomMove() {
//   let options = ["rock", "paper", "scissors"];

//   return options[Math.floor(Math.random() * 3)];
// }

// // 2.

// let computersMove = randomMove();

// let usersMove = randomMove();

// function rockPaperScissors(computersMove, usersMove) {
//     console.log(`Computer chose ${computersMove}. User chose ${usersMove}.`);

//     if (computersMove === usersMove) {
//         return "It was a draw!";
//     } else if (computersMove === "rock") {
//         if (usersMove === "scissors") {
//             return "Computer has won!"
//         } else if (usersMove === "paper") {
//             return "User has won!"
//         }
//     } else if (computersMove === "paper") {
//         if (usersMove === "scissors") {
//             return "User has won!"
//         } else if (usersMove === "rock") {
//             return "Computer has won!"
//         }
//     } else if (computersMove === "scissors") {
//         if (usersMove === "rock") {
//             return "User has won!"
//         } else if (usersMove === "paper") {
//             return "Computer has won!"
//         }
//     }
// }

// console.log(rockPaperScissors(computersMove, usersMove));

// ///////////////////////////////////
// // Digit Sum
// function sumDigits(num) {
//   let digits = num.toString().split("");
//   console.log(digits);

//   let sum = 0;

//   for (let i = 0; i < digits.length; i++) {

//     let integer = parseInt(digits[i]);
//     sum += integer;
//   }

//   return sum;
// }

// console.log(sumDigits(42));

// ///////////////////////////////////
// // Pythagoras
// function calculateSide(sideA, sideB) {
//   return sideC = Math.sqrt(sideA ** 2 + sideB ** 2);
// }

// console.log(calculateSide(8, 6));

// ///////////////////////////////////
// // Triangles
// function isoscelesTriangle(number) {
//   let array = [];
//   let string = "";

//     for (let i = 1; i <= number; i++) {
//         string += "#";
//       array.push(string);
//     }
 
//     for (let k = 0; k < array.length; k++) {
//       console.log(`${array[k]}`);
//     }
// }

// isoscelesTriangle(7);

// function upsideDownIsoscelesTriangle(number) {
//   let array = [];
//   let string = "";

//   for (let i = 1; i <= number; i++) {
//     string += "#";
//     array.push(string);
//   }
 
//     for (let k = (array.length - 1); k >= 0; k--) {
//       console.log(`${array[k]}`);
//     }
// }

// upsideDownIsoscelesTriangle(6);

// ///////////////////////////////////
// // "Second" Numbers
// function secondNumbers(arr) {
//   arr.sort(function(a, b) {return a - b})
//   console.log(`second highest: ${arr[arr.length - 2]} \nsecond lowest: ${arr[1]}`)
// }

// secondNumbers([4,2,6,9,5])

// ///////////////////////////////////
// // Unique String
// function uniqueString(str) {
//   const arr = str.split("");
//   const uniqueArr = [...new Set(arr)];
//   const newStr = uniqueArr.join("");

//   return newStr;
// }

// console.log(uniqueString("helloworld"));

///////////////////////////////////
// Insert Dash
function insertDash(num) {
  let digits = num.toString().split("");

  console.log(digits)

  let newArray = [];

  newArray.push(digits[0]);

  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] % 2 !== 0 && digits[i] % 2 !== 0) {
      newArray.push("-", digits[i]);
    } else {
      newArray.push(digits[i]);
    }
  }

  let newStr = newArray.join("");

  return newStr;

}

console.log(insertDash(454793));
