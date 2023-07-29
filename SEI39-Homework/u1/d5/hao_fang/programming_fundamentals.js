// ===============================
// Common Programming Principles
// ===============================
/* 
Dry - create abstractions instead of repeating yourself
KISS - Keep code simple
Avoid creating a YAGNI - Don't add functionality until required
Do the simplest thing that could possibly work - self-explanatory
Don't make me think - Make code easy to read and understand
Write code for the Maintainer - write code as if it is to be read by a complete stranger
Single responsibility principle - Each piece of code should perform only 1 task 
Avoid premature optimisation - Prioritise making the code works first before trying to optimise it
Separation of concerns - Minimise overlap of functions between pieces of code

The surprising one was 'write code for the maintainer' as I have never thought about that before and am still in the
mindset of "it's fine as long as I myself can understand it".

I probably am struggling the most with the single responsibility principle. I am having functions that do too much instead
of breaking them up into smaller functions.
*/

// ===============================
// Commenting Code
// ===============================
// Defining a function named "f" that takes a parameter of variable "l"
const f = (l) => {
  // Defining variables
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  // A loop that repeatedly iterates until c is greater than l
  while (c <= l) {
    // Assign n a new value that is the sum of c and p
    n = c + p;
    // Assigns c the same value as n. Assign p the same value as c.
    [c, p] = [n, c];
    // check if c is an odd number. If true, add c to es. Otherwise, add 0 to es.
    es += c % 2 === 0 ? c : 0;
  }
  // return es
  return es;
};

console.log(f(55));

// A good name would be addEvenFibonacci as the function adds all even numbers of the Fibonacci sequence up till the parameter
// I would rather start working on f2
// No the semi-colon is not necessary
