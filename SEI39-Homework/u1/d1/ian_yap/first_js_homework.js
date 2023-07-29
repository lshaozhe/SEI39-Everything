//Section 1
// 1. DRY stands for Don't Repeat Yourself. There should only be one copy of important information. HTML & Javascript.
// 2. const cannot be changed or re-declared. let can be changed but cannot be re-declared. var can be changed and can be re-declared.

//Section 2

// let const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kelvin";
// const f = false;

// a < b

// c > d

// 'Name' === 'Name'

// a < b < c

// a === a < d

// e !== 'Kevin'

// 48 == '48'

// f !== e

// Set a new variable g to 0

// let g = 0;

// console.log(g);

// Then set the variable g to be equal to b + c

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kelvin";
// const f = false;

// let g = b + c;

// console.log(g);

// 1. I used let as g is not a constant and needs to be changed.
// 2. Yes it will bring out a Syntax Error.
// 3. There will be an error.

// Section 3

// Questions:

// Is the code below an infinite loop? Why or why not? Yes as the code will keep running as nothing will change the boolean to false
// Don't worry about getting it 'wrong' - you'll     be graded on your reasoning, not if your ultimate answer is correct.
// You should NOT test (run) this code, so read it line by line and 'execute' the code in your head.

// while (true) {
// 	console.log('Do not run this loop');
// }
// Infinite loop II
// is this loop an infinite loop? Why or why not? No it is not.
// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
// Questions:

// Infinite or not infinite? What is the expected output? Not infinite. As the const runProgram is true, the code will not run as it will never be false.

// let letters = "A";
// let i = 0;

// start a while loop that will run as long as i is less than 20
// while (i < 20) {
//   adds "A" to the right of letters = "A"
//   letters += "A";
//   increase the value i by 1
//   i++;
// }
// prints the value of letters to the screen or terminal window
// console.log(letters);

//The code was what I expected.

//Section 4

//Question 1: The major difference between for loop and while loop is that for loop is used when the number of iterations is known whereas, in the while loop, execution is done until it is proven wrong.

// //Questions:

// What are the three components of the control panel? Each component is separated by a semicolon ;.

// Remember: Write your answers as comments in the file.

// The first part of the control panel is: initialization
// The second part of the control panel is: condition
// The third part of the control panel is: final expression

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// for (let i = 999; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   console.log("The value of i is : " + i + " of 10");
// }

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

console.log(StarWars);
