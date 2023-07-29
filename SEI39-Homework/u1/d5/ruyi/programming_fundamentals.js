/////////////////////////////
// Common programming principles

// Q. Write a ~1 sentence summary for each one
// DRY: It is a principle of avoiding repetition in coding, to avoid redundancy.
// KISS: Most systems work best if they are kept simple.
// Avoid creating a YAGNI: Only add functionalities when you actually need them, not if you foresee you need them.
// Do the simplest thing that could possibly work: Build something using the simplest way you could think of, and improve it to make it even simpler.
// Don't make me think: Write code as simply as possible, such that a layman can understand.
// Write code for the maintainer: Always make the code as understandable as possible for the next person who has to read it.
// Single responsibility principle: A code block should be responsible for only one purpose.
// Avoid premature optimisation: Do not make optimisation a consideration a part of the design process until the final stages.
// Separation of concerns: Different sets of information concerning different aspects of a program should be kept separated and individually maintained.

// Q. Which ones surprise you (if any)?
// Avoid premature optimisation - not something I would have realised until it was pointed out, but it makes a lot of sense

// Q. Which one is currently giving you the most struggle?
// Single responsibility principle & separation of concerns - they both sound like the same principle.

/////////////////////////////
// Commenting Code
// Q. Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// Defining a function called f using arrow function expression, which take a parameter l
// const f = (l) => {
// Declare variables with values
// let es = 0,
//   p = 0,
//   c = 1,
//   n = 0
// Declare a while loop that executes while c is smaller than or equal to l
// while (c <= l) {
// Assign the sum of c & p to n
// n = c + p;
//   console.log(
//     `es: ${es},
//     p: ${p},
//     c: ${c},
//     n: ${n}`
//   );
//  Assign the values n and c to variables c and p respectively
// [c, p] = [n, c];
// Find the remainder when c is divided by 2.
// Then, add the remainder to es, and the sum is declared as the new value for es.
// If es is strictly equal to 0, the value of c will be assigned to es, otherwise 0 will be assigned to es.
// es += c % 2 === 0 ? c : 0;
//   console.log(
//     `es: ${es},
//     p: ${p},
//     c: ${c},
//     n: ${n}`
//   );
// }
// Define es as the output of the function.
//   return es;
// };

// CORRECT ANSWER
const f = (l) => {
  let es = 0, // even sum
    p = 0, // previous number
    c = 1, // current number
    n = 0; // next number

  while (c <= l) {
    // run as long as the current number is not more than the value given in the parameter
    n = c + p; // the next number will be the sum of the previous and current number (https://www.cuemath.com/algebra/fibonacci-numbers/)
    [c, p] = [n, c]; // Updates the current number to be the next number, which will be checked in the next line
    // previous number also has to be updated in order to generate the fibonacci number for the next loop
    // Additionally, if c is not updated, the while loop will next break, as c never becomes more than l
    es += c % 2 === 0 ? c : 0; // adds current number to evenSum if current number is even
  }

  return es;
};

console.log(f(55)); // Returns the sum of all even Fibonacci numbers from 1 to the given number

// Call the function f with argument of 55, and print the return value to console.
console.log(f(55));

// Q. In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// The function could have been renamed as sumofEvenNumbersUpToLimit.

// Q. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2 would have been easier to understand.

// Q. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//  Code was executed and came out with the same result - semicolon was not required.
