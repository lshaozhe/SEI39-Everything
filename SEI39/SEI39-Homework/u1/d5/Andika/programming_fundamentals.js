"use strict";

////////////////////////
// common programming principles
////////////////////////

// DRY
// not repeating codes by using loops,functions,etc

// KISS
// make the code simple, help to reduce time, lesser bugs, and easier to modify

// Avoid creating a YAGNI
// dont create a functionality until you need it

// Do the simplest thing that could possibly work
// keep our code simple along the way

// Don't make me think
// code should be easy to read and understood

// Write code for the maintainer
// write code as if it is for a stranger

// Single responsibility principle
// one component of code to do a single well defined task.

// Avoid premature optimization
// don't think about optimization until your code is working. not all things require optimization

// Separation of concerns
// assign an specific task to specific modules of code, don't overlap.

// Which ones surprise you (if any)?
// avoid premature optimization, i tends to spend too much time thinking of an optimized solution right off the bat.

// Which one is currently giving you the most struggle?
// don't make me think, i will strive for a more readable code.

////////////////////
// commenting code
////////////////////

const f = (l) => { //create a function called 'f', with 1 parameter 'l'.
  let es = 0, // create a variable called 'es', with value 0
    p = 0, // create a variable called 'p', with value 0
    c = 1, // create a variable called 'c', with value 1
    n = 0 // create a variable called 'n', with value 0
  while (c <= l) { //a while loop with running condition c is equal or below 1.
    n = c + p; // assign a new value (c + p) to n, 
    [c, p] = [n, c]; // using array format, assign value from n to c, and value from c to p
    es += c % 2 === 0 ? c : 0; // adding es with c if c is even.
  }
  return es; //the function will return es.
};

console.log(f(55));
// const f2 = (limit) => {
//   let evenSum = 0;
//   let previous = 0;
//   let current = 1;
//   while (current <= limit) {
//     let next = current + previous; //1 2 3 5 8 13
//     previous = current; // 1 1 2 3 5
//     current = next; // 1 2 3 5 8
//     if (current % 2 === 0) {
//       evenSum += current;
//     }
//   }
//   return evenSum;
// };

// console.log(f2(55));

// In keeping with one of our programming principals (write code for 
//the maintainer): What would have been a more semantic name for this 
//function (hint: this is a problem we had for either lab or hw and 
//is considered a classic ) - are there any other variable names or 
//things that would make this code easier to read and understand?

// function could be named as sumEvenFibbonaci, as it is calculating the sum of even fib number.
// i think adding fibb in each variable will show that it's tracking prev, current, and next fibb number


// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2 since it's easier to understand


// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// code is working in strict mode even when semi-colons is removed