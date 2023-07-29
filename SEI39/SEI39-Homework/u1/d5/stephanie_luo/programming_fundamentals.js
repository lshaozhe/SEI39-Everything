//////////////////////////////////////////////////////////
// == Section 1: Programming Fundamentals ==
//////////////////////////////////////////////////////////

//

//========================================================
// == Common programming principles ==
//========================================================

// DRY (Don’t repeat yourself)
// >> Reduce repetition in codes
//========================================================

// KISS (Keep it simple, stupid!)
// >> Keep codes simple
//========================================================

// Avoid creating a YAGNI (You aren’t going to need it)
// >> Keep codes lean, don't add features unless required
//========================================================

// Do the simplest thing that could possibly work
// >> Find the simplest solution for a problem
//========================================================

// Don't make me think
// >> Codes should be easily read and understood with minimum effort required
//========================================================

// Write code for the maintainer
// >> Write more concise code and always code and comment in a way that an entry-level developer can understand.
//========================================================

// Single responsibility principle
// >> A piece of code should fulfill a single well-defined task
//========================================================

// Avoid premature optimisation
// >> Don't even consider optimization unless your code is working but running slowly.
//========================================================

// Separation of concerns
// >> Different areas of functionality should be handled by separate and minimally overlapping code modules.
//========================================================

// Which ones surprise you (if any)?
// >> Nope. All the principles above are very logical.
//========================================================

// Which one is currently giving you the most struggle?
// >> Finding the simplest solution for a problem while keeping the codes lean and simple.
//========================================================

//

//========================================================
// == Common programming principles ==
//========================================================

// f is a function to sum all the even numbers in the fibonacci series that run from 1 to l (i.e. the value that is passed into the function)
// this is "L" (looks like 1 on my screen)
const f = (l) => {
  // creating variables that will be used in the later part of the function
  let es = 0,
    p = 0,
    c = 1,
    n = 0;

  // creating a while-loop to from c (= 1) to l (the value run through the function)
  // >> will keep running as long it is smaller or equals to l
  while (c <= l) {
    // the purpose of the next line is to get the next number in the fibonacci series
    n = c + p;
    console.log("--- before reassignment ---");
    console.log({ n, p, c });
    // reassigning the variables
    // >> the reassignment will increase the value of c, thus serving as an exit condition
    [c, p] = [n, c]; // after reassignment: n = c, and c = p
    console.log("--- after reassignment ---");
    console.log({ n, p, c });
    // value of variable c will be added to variable es based on condition
    // >> If value of c is a even number (condition), value of c will be added to es (if true), otherwise zero will be added (if false)
    es += c % 2 === 0 ? c : 0;
    console.log({ es });
  }
  // returns the sum of the even numbers in variable c
  return es;
};

// p = previous
// c = current
// n = next
// es = evenSum

console.log(f(55));

//========================================================

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

// Are there any other variable names or things that would make this code easier to read and understand?
// >> An example of a more sematic name for this function would be evenSumOfFibonacciNums
//========================================================

// Which code would you rather start working with f or f2?
// >> f2, since the code is more concise and the naming of the variables are easier to understand
//========================================================

// Is this semi-colon (at fourth line) necessary?
// >> Yes
//========================================================
