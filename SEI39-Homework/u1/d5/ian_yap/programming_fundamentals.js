"use strict";

///////////////////////
// Combine objects, arrays, and functions
///////////////////////
// DRY - don't repeat yourself to keep code clean
// KISS -simple code is always easy to understand and to troubleshoot if necessary
// Avoid creating a YAGNI -there is no need to add in unnecessary code unless its needed
// Do the simplest thing that could possibly work - simplicity should always be targeted
// Don't make me think - code should be easily understood by anyone
// Write code for the maintainer - always remember to write code in such a way its easily understood by everyone
// Single responsibility principle - code should be written for one purpose only
// Avoid premature optimisation - do not think about optimisation until the code is working
// Separation of concerns -different functionalities of code should be managed separately with minimal overlap

// Nothing really surprises me.

// Do the simplest thing that can possibly work is difficult, unless I already have full grasp of the language.

//define function
const f = (l) => {
  //define variable
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    //while loop from c to 1, will keep running as long as c is smaller or equals to 1
    n = c + p;
    [c, p] = [n, c];
    es += c % 2 === 0 ? c : 0;
    //if c is an even number, if it is true add value to es. if false add 0.
  }
  return es;
};

console.log(f(55));

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

//A better name will be sumEvenFibonacci
//I would rather work with f2 as the code is presented more clearly for the maintener to understand.
//yes it works, it is not necessary.
