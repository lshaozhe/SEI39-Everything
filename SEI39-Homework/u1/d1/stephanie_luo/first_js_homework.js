// Section 1
// Question 1:
// DRY means Don't Repeat Yourself
// Paying attention to it helps avoid knowledge duplication thus making codes easier to maintain
// Tools include:
// 1. Writing for or while loops to automate parts of the code
// 2. Including comments to explain the logic of the code
// 3. Giving variables more meaningful names

// Question 2:
// var declarations are globally scoped or function scoped while let and const are block scoped.
// var and let variables can be updated and re-declared but not const

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a + b == c);
console.log(a > a - d);
console.log(e != "Kevin");
console.log(48 !== "48");
console.log(f !== e);

let g = 0;
console.log(g);

g = b + c;
console.log(g);

// Question 1:
// I used let. Because the variable g will change

// Question 2:
// No error

// Question 3:
// Error. Variable names cannot start with numbers.

// Bonus Challenge
// console.log(a _ (b || f) _ !f && e _ c);

// Section 3
// Infinite loop:
// Yes, because it does not have exit condition or break

// Infinite loop II
// No, because there is an exit condition
// Expected output: 'Do not run this loop' will appear once.

// Reading Code
let letters = "A";
let i = 0;

// start a while loop that will run as long as i is smaller than 20
while (i < 20) {
  // an additional "A" will be added to the first "A" with each iteration
  letters += "A";
  // serves as exit condition
  // the while loop will continue to run as i increase from 0 to 19, when i reaches 20 the condition will be false and the loop stops
  i++;
}
// prints the value of letters to the screen or terminal window
// Expected results: AAAAAAAAAAAAAAAAAAAAA
console.log(letters);

// Section 4
// For loops
// Key differences are:
// 1. The for-loop used only when we already knew the number of iterations, whereas while-loops is used when the number of iteration is not known
// 2. In case of no condition, the for-loop is repeated infinite times, whereas an error will be shown for the while-loop
// 3. Initialization can be in or out of the for-loop, whereas initialization is always out of the while-loop.
// Similarities:
// 1. Both are repetition control structures in programming

// For loop control panel
// The first part of the control panel is: let i = 0
// The second part of the control panel is: i < 100
// The third part of the control panel is: i++

// For loop II
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

// For loop in reverse
for (let i = 999; i >= 0; i--) {
  console.log(i);
}

// More counting
for (let i = 1; i < 11; i++) {
  console.log("The value of i is: " + i + " of 10");
}

// Bonus Challenge
for (let i = 1; i < 11; i++) {
  console.log(`The value of i is: ${i} of 10`);
}
