//////////////////////////////////////////////////////////////////////////////////////
// Common Programming Principles
/*
1. Write a ~1 sentence summary for each one:
- DRY
    Don't repeat yourself so as to avoid repetition.

- KISS
    Keep it simple, stupid is to remind one that simplicity is a key goal as it doesn't waste time, has fewer bugs, and is easier to modify.

- Avoid creating a YAGNI (You aren't going to need it)
    Don't add things you don't need

- Do the simplest thing that could possibly work
    Do the simplest thing that solves the problem

- Don't make me think
    Ensure code is easily read and understood.

- Write code for the maintainer
    Ensure whatever you write can be understood by someone who needs to maintain your code.

- Single responsibility principle
    Each component of the code should perform one well-defined task.

- Avoid premature optimisation
    Only optimise code after your code is working, if it is slower than what you want.

- Separation of concerns
    Each section should address a separate concern

2. Which ones surprise you (if any)?
    At this point, none.

3. Which one is currently giving you the most struggle?
    Writing code for the mainainer is a struggle for me. I feel that i should write in a clearer manner so that 
    it can be easily understood by others.
*/

//////////////////////////////////////////////////////////////////////////////////////
// Commenting Code

// Comment each line of this code and describe what it is doing.

// Creates a function f with the parameter l
const f = (l) => {
  // Assigns a value to the variables es, p, c and n
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  // initiates a while loop while c is less than or equal to l
  while (c <= l) {
    // If, c is less than or equal to l, n will equal to (c + p)
    n = c + p;
    console.log(c);
    // c in [c,p] will take the value of n. p in [c,p] will take the value of c.
    [c, p] = [n, c];
    console.log(c);
    // Uses a ternary operator. If the remainder of c divided by 2 is 0, add the value of c to es. If it is not equal to zero, add the value of 0 to es.
    es += c % 2 === 0 ? c : 0;
    // moves on to next round of while loop
  }
  // returns the final value of es when the while loop ends because c is greater than l.
  return es;
};

// Logs the result of f given argument of 55 in the console.
console.log(f(55));

// Qn: In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// Ans: The code is to calculate the sum of even Fibonacci numbers up to 55. As such, a more appropriate function name would be sumOfEvenFibonacci. The variables could be previousTerm, currentTerm and nextTerm to be even clearer.

// Qn: If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// Ans: F2 is clearer and easier to understand so I would prefer to work with that.

// Qn: Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// Ans: Yes, it is necessary.
//////////////////////////////////////////////////////////////////////////////////////
