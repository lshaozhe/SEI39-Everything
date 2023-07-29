"use strict";

////////////////////////////////
// Common programming principles
////////////////////////////////

// Q: Write a ~1 sentence summary for each one
// A:   DRY -- make sure your code does not have any repetition in doing something, if there is, create a function so that you can call that function each time you want to execute that.
//      KISS -- make your code straightforward as much as possible so that it is easier to debug the code if there are any issues and modify them for other uses.
//      Avoid creating a YAGNI -- dont include any code that is not used e.g. remove any unused variables/functions from your code and add them only when needed
//      Do the simplest thing that could possibly work -- try to figure out 2 ways to do one thing and choose the simpler option
//      Don't make me think -- name your variables and functions in a way that tells what they are used for so that others can understand your code when they read and comment any parts that may not appear straightforward
//      Write code for the maintainer -- write a documentation / comment out parts of the code so that someone else reading your code can understand the flow process
//      Single responsibility principle -- each component should execute only 1 well defined task
//      Avoid premature optimisation -- dont focus on making your code run faster/efficiently until you have successfully managed to get the end result that you want in your code
//      Separation of concerns -- separate your end result into distinct sections with each section addressing a particular need

// Q: Which ones surprise you (if any)?
// A: None of them, it kinda make sense to follow these programming principles (after reading them).

// Q: Which one is currently giving you the most struggle?
// A: Doing the simplest thing that could possibly work. I realise that usually the method I used to solve a problem turns out to be long winded and can be shorten/cut a few steps.

////////////////////////////////
// Commenting Code
////////////////////////////////

// Q: Comment each line of this code and describe what it is doing
const f = (l) => {
  // function f takes in parameter l
  let es = 0, // declare variables es=0, p=0, c=1, n=0
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    // while loop executes while c is less than or equal to 1
    n = c + p; // n is equal to c plus p
    [c, p] = [n, c]; // array element c given value of array element n, while array element p given value of array element c
    es += c % 2 === 0 ? c : 0; // conditional(ternary) operator. es is set to be equal to es + c. check if this new es value is divisible by 2. if true, es is equal to es + c. if false, es remain as it is (0 is added to es)
  }
  return es; // function f returns es
};

console.log(f(55)); // print out return of function f with parameter 55 given to it. (I dont get the purpose of function f if I only read the above code)

const f2 = (limit) => {
  // function f2 takes in parameter limit
  let evenSum = 0; // declare variables evenSum=0, previous=0, current=1
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    // while loop executes while current is less than or equal to limit
    let next = current + previous; // next is equal to sum of current and previous
    previous = current; // previous is reassigned to current (moving on to next whole number)
    current = next; // current is reassigned to next
    if (current % 2 === 0) {
      // check if current is an even number
      evenSum += current; // if current is an even number, add it to evenSum
    }
  }
  return evenSum; // return evenSum
};

console.log(f2(55)); // print out return of f2. f2 calculates the sum of even numbers from 1 to 55.

// Q: In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// A: Rename f2 to sumEvenFromOneToLimit. Rename previous, current, next to previousNum, currentNum, nextNum.
// Q: If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// A: f2 definitely
// Q: Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// A: The semi-colon is necessary as it indicates the end of a line. Without the semi-colon, the code cannot run because n = c + p [c,p] = [n,c] is viewed as a single line, which does not make sense to JS since there is no relation given between p and [c,p]
