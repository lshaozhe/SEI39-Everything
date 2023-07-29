///////////////////////////////////////////////////////////////
//Common programming principles
///////////////////////////////////////////////////////////////
//DRY
//Write a ~1 sentence summary for each one
//Principle to not repeat ones self in code
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//Striving towards this in the constant pursuit of optimal code.
///////////////////////////////////////////////////////////////
//KISS
//Write a ~1 sentence summary for each one
//Refers to keeping code simple
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//For convulated, multi-step problems, this may be difficult.
///////////////////////////////////////////////////////////////
// Avoid creating a YAGNI
//Write a ~1 sentence summary for each one
//Refers to the exclusion of redundant code
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//NA
///////////////////////////////////////////////////////////////
// Do the simplest thing that could possibly work
//Write a ~1 sentence summary for each one
//Simplicity eases understanding and processing in some situations.
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//For convulated, multi-step problems, this may be difficult.
///////////////////////////////////////////////////////////////
// Don't make me think
//Write a ~1 sentence summary for each one
//Code should not be too difficult for others to comprehand
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//For convulated, multi-step problems, this may be difficult.
///////////////////////////////////////////////////////////////
// Write code for the maintainer
//Write a ~1 sentence summary for each one
//Input comments for ease of maintainer's understanding
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//NA
///////////////////////////////////////////////////////////////
// Single responsibility principle
//Write a ~1 sentence summary for each one
//Our classes should only be used for one purpose
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//NA
///////////////////////////////////////////////////////////////
// Avoid premature optimisation
//Write a ~1 sentence summary for each one
//Avoid wasting time optimizing code that is not final
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//NA
///////////////////////////////////////////////////////////////
// Separation of concerns
//Write a ~1 sentence summary for each one
//Each layer of code should not contain code pertaining to others.
//Which ones surprise you (if any)?
//NA
//Which one is currently giving you the most struggle?
//NA
///////////////////////////////////////////////////////////////
//Commenting Code
//Declares function f by arrow notation.
const f = (l) => {
  //creates variables es, p, c and n.
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  //runs a while loop while c is less than or equal to l.
  while (c <= l) {
    //makes n the sum of c and p.
    n = c + p;
    //makes c take the value of n and p the value of c.
    [c, p] = [n, c];
    //ternary operation that returns c if boolean before ? is true.
    //else return 0
    es += c % 2 === 0 ? c : 0;
  }
  //return es upon function call
  return es;
};
//logs the output of the function f for an argument of 55.
console.log(f(55));
///////////////////////////////////////////////////////////////
//In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//More semantic function name: evenFibonacciNumberSum()
//Rename variables: es, p, c, n, l.
//New names: evenSum, previous, current, next, limit
///////////////////////////////////////////////////////////////
//If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//Start with f as there is usable code to build on
///////////////////////////////////////////////////////////////
//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//Yes, it is necessary
