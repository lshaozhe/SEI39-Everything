//========================================================================================
// Common programming principles
//========================================================================================

// Write a ~1 sentence summary for each one
// DRY
/* Avoid repetition by creating a abstraction such as functions if there concepts or statement that requires repitition */

// KISS
/* Keep the codes as simple as possible and easily modifiable*/

// Avoid creating a YAGNI
/* Only add things when you need them and not add because you think you might need them */

// Do the simplest thing that could possibly work
/* During programming always ask yourself which way is the simplest to make the thing work. */

// Don't make me think
/* Code should be easily readable and understood for the observer*/

// Write code for the maintainer
/* Write your code as if you are writing for a complete stranger who will be maintain, make it easy to maintain, include lots of comments, scope your variables properly*/

// Single responsibility principle
/*A class or function should not be assigned to do multiple tasks, and should be responsible for a single task only */

// Avoid premature optimisation
/* Dont try to make your code more efficient if it doesnt even work in the first place, make the code work first and then make it more efficiet if necessary */

// Separation of concerns
/* The program should be seperated into different distinct sections based on the concern it addresses or the function, this makes the code more maintainable  */

// Which ones surprise you (if any)?
/* Avoid premature optimisation surpised me the most as i always thought that efficiency is as important as making the code work.*/

// Which one is currently giving you the most struggle?
/* The one i am struggling with is KISS as when it takes me longer to search understand the ways to make certain aspects of my code more efficient*/

//Create a function f
// const f = (l) => {
//   //Declaration of variables es, p, c and n
//   let es = 0,
//     p = 0,
//     c = 1,
//     n = 0;
//   //While loop where if c is less than or equals to 1, variable n equals to sum of c and p, c equals to n, p equals to c.
//   while (c <= l) {
//     n = c + p;
//     [c, p] = [n, c];

//     //if es+c divided by 2 does not have a remainder of 0, es=c, else es=0
//     es += c % 2 === 0 ? c : 0;
//   }
//   //value of es is returned to the function
//   return es;
// };
// console.log(f(55));

//In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//A more semantic name would be sumOfEvenNums
//Other variable names that can be changed would be previous to previousNum, current to currentNum and next to nextNum. I would also declare all the variables at the start first

//If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//f2, as it is more readable and easier to understand if there is a need to maintain it in the future as the variables names are clear

//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//Yes, the semi colon is necessary as it will return an 'Syntaxerror:Invalid left-hand side in assignment' as it tries to combine line 4 and 5
