// Common programming principles

// DRY
// Use abstractions (hide unnecessary details) instead of repeating redundant lines

// KISS
// Keep codes as short and simple as possible, which will cause fewer bugs and are easier to modify.

// Avoid creating a YAGNI
// Only add functionalities when they are needed.

// Do the simplest thing that could possibly work
// Don't overcomplicate, find the easiest/most straightforward way to write code to tackle the problem.

// Don't make me think
// Codes should be easily understood by another programmer with minimal effort required.

// Write Code for the Maintainer
// Similar to above - codes are easier to maintain if they can be easily understood, whether by yourself or someone else.

// Single Responsibility Principle
// Codes shouldn't multitask. 1 block of code handles only 1 well-defined task.

// Avoid Premature Optimization
// Focus on making the code work first, only focus on optimization if we are sure that the code is already working well.

// Separation of Concerns
// Codes should be separated into distinct sections that each focus on different areas of functionality.

// Single Responsibility Principle/Separation of Concerns surprised me at first as
// combining might help to shortern the code, but the principles make sense when
// understood together with the other principles, allowing the code to be more easily
// understood, explained and/or fixed.

// I currently struggle most with KISS, and tend to add in more lines of code than is necessary to achieve the same result.

////////////////////
// Commenting Code

const f = (l) => {
  // declares function f with l as the parameter
  let es = 0,
    // when function f is called, variable es has a value of 0
    p = 0,
    // when function f is called, variable p has a value of 0
    c = 1,
    // when function f is called, variable c has a value of 1
    n = 0;
  // when function f is called, variable n has a value of 0
  while (c <= l) {
    // next section of code will execute as long as the value of c is smaller than or equal to l
    n = c + p;
    // as long as c <= l, value of n is c + p
    [c, p] = [n, c];
    console.log([c, p], [n, c]);
    // c is redefined as n, and p is redefined as c
    es += c % 2 === 0 ? c : 0;
    // if the remainder of c % 2 equals to 0, es = es + c
  }
  return es;
  // returns the value of es as calculated above
};

/*
n = 1 + 0;
[c, p] = [1, 1];
*/
console.log(f(10));
// logs the return value of the executed function

//////////////////////////
// Answer with comments

// 1. Naming the function "fibonacci" would make it's purpose clear at first glance.

// 2. I would rather work with f2, where each variable name is more descriptive and easier to understand.

// 4. It is necessary, if not there will be a syntax error.
