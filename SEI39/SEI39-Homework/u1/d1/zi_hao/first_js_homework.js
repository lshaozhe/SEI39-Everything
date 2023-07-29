// Section 1

/* 1. DRY refers to 'Don't Repeat Yourself', which means cutting down on 
unnecessarily repetitive code. It helps to keep our code concise and easier for
both ourselves and others to understand. Loops are ways to repeat the same tasks
for X number of times utilizing just a few lines of code, rather than have to
manually type in many lines of code to achieve the same effect. */

/* 2. let declares a variable whose value can still be changed afterward.
const declares a (constant) variable whose value cannot be edited.
var was the old way to declare variables. We should now use let or const
instead of var. */

// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

a < b;
console.log(a < b);

c > d;
console.log(c > d);

"Name" === "Name";
console.log("Name" === "Name");

a < b < c;
console.log(a < b < c);

a < a + d;
console.log(a < a + d);

e != "Kevin";
console.log(e != "Kevin");

48 == "48";
console.log(48 == "48");

f !== e;
console.log(f !== e);

let g = 10;
console.log(g);
g = b + c;
console.log(g);

// 1. I used let as we will be changing the value of g.

/* 2. There is no error when "use strict" is not used. g still prints as 0 and 110.

When "use strict" is active, the console returns 'ReferenceError: g is not defined'. */

// 3. I receive a SyntaxError: Unexpected number.

// Bonus
console.log(a < (b || f) === !f && e !== c);

// Section 3

/* 1. This is an infinite loop, as there isn't anything in the code that would stop
the loop by changing the value of true. */

/* 2. This is also an infinite loop. Although the loop changes the value of 
runProgram to false, it is not defined that a value of false will end the loop. */

let letters = "A";
let i = 0;

// starts a loop that runs as long as i is smaller than 20
while (i < 20) {
  //adds an additional A to letters each time the loop runs
  letters += "A";
  // adds +1 to the value of i each time the loop runs
  i++;
  // closes the while loop, but it will keep running until the condition becomes false
}
// The loop will run 20 times, adding an additional 20 As to the original letters value
console.log(letters);

// The code and console.log result was what I expected.

// Section 4

// For loops
/* 1. while loops through a block of code once, then the condition is evaluated.
The statement will continue to repeat as long as the condition remains true.
for loops through a block of code until the counter reaches a specified number.
Both can be used to repeat the same statement over and over again. */

// For loop control panel
// 1. sets the variable
// 2. the conditional statement that decides if the loop will continue or end
// 3. what is executed every time the loop runs

// For loop 2
for (let i = 0; i <= 999; i++) {
  console.log(i);
}

// Bonus

// The forward slash / is a quotation mark for regular expressions.
/* The backward slash \ is used to allow additional inverted commas ' or " in a string
to be read properly, instead of erroneously closing the string. */

for (let i = 999; i >= 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log("The value of i is " + i + " of 10.");
}

for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is ${i} of 10.`);
}
