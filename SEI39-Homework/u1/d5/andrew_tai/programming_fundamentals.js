// =======================================================================
// Common Programming Principle
// =======================================================================

// DRY
// Don't repeat yourself - avoid repetitive code by using variables, loops, functions, classes, etc.

// KISS
// Keep it simple, stupid! - simple codes takes lesser time to write, has fewer bugs and is easier to modify.

// Avoid creating a YAGNI
// Try not to add functionality until you need it.

// Do the simplest thing that could possibly work
// Focuses on simplicity in design, helps make codes easier to read.

// Don't make me think
// The purpose of codes and what the code is doing should be obvious at first glance.

// Write code for the maintainer
// Codes should be self-explanatory and straightforward to maintain.

// Single responsibility principle
// Components should perform a single well-defined task.

// Avoid premature optimisation
// Optimising codes should only come in if it is taking longer to run than expected.

// Separation of concerns
// There should not be multiple modules of code that do the same thing.

// Which ones surprise you (if any)?
// None actually.

// Which one is currently giving you the most struggle?
// Writing simple, efficient codes seem to be the hardest thing to do.

// =======================================================================
// Commenting Code
// =======================================================================

// declare a function with name "f" that has a parameter of "l"
const f = (l) => {
  let es = 0, // declare a list of variables and set their inital value
    p = 0,
    c = 1,
    n = 0;
  // commence a while loop with the condition that c is less than or equal to "l"
  while (c <= l) {
    n = c + p; // if the condition is true, assign the value of (c + p) to variable n

    [c, p] = [n, c]; // reassign the variable within [c, p] to that of [n, c]. ie. c and p in [c, p] will now be assigned the values of n and c in [n, c] respectively

    es += c % 2 === 0 ? c : 0; // check if the remainder of (c / 2) is 0. if so, the value of c is added to the variable es. if not, nothing is added to the variable es.

    // move on to the next iteteration of the while loop
  } // end of the while loop
  return es; // throws the current value of variable es after running through the while loop
}; // end of the function "f"

console.log(f(4)); // logs the result of the function "f" given the argument of 2.

// =======================================================================

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

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// The function should be called, sumOfEvenFabonacciNumbers

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// f2 would have been easier to start working with because the areas to modify are easily identifiable.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// Yes, semi-colons are necessary
