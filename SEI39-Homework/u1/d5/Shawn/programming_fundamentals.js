// ====================================================================================
// Section 1: Programming Fundamentals
// ====================================================================================

// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?

//DRY - avoid repetition
// KISS - Keep your codes simple
// Avoid creating a YAGNI - Don't add functionality unless necessary
// Do the simplest thing that could possibly work - Practice simple code that works to maintain simplicity
// Don't make me think - Write codes that can be understood easily, this is a form of simplicity
// Write code for the maintainer - write codes so that others can maintain them easilt
// Single responsibility principle - The purpose is every class, module, or function in a program should have one responsibility/purpose in a program.
// Avoid premature optimisation - getting user feedback early and often from your users.
// Separation of concerns - separate an application into units, with minimal overlapping between the functions of the individual units

// =========================Commenting Code=========================
const f = (l) => {
  //creating an arrow function with an argument l
  let es = 0, //assigning a variable es to 0
    p = 0, //assigning a variable p to 0
    c = 1, //assigning a variable c to 1
    n = 0; //assigning a variable n to 0
  while (c <= l) {
    //a while loop with a condition of c <= 1
    n = c + p; //as long as condition is met, n = c + p
    [c, p] = [n, c]; //as long as condition is met, c = n, p = c
    es += c % 2 === 0 ? c : 0; //if current is an even number, then throw current into es bucket
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

// What would have been a more semantic name for this function. sumEven
// are there any other variable names or things that would make this code easier to read and understand? we can make the names more descriptive, for e.g. previousNumber
// which code would you rather start working with f or f2? f2
// is this semi-colon necessary? Yes this semi-colon is necessary as it closes the variable assignment "let"
