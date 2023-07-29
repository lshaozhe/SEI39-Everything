//1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//DRY code is a software principle that stands for Don’t Repeat Yourself (DRY), where the goal is to reduce the repetition of code.
//To prevent redundancies in processes for easy maintenance, readability, reusability, cost and testing.
//You can use functions in our code to replace tasks that you are performing over and over.
//2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
//Var variables can be re-declared and updated, while let can be updated but not re-declared. Lastly, const cannot be updated or re-declared.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a < b);
console.log(c > d);
console.log("a" != "b");
console.log(a < b < c);
console.log((a === a) !== d);
console.log(e != "Kevin");
console.log(48 == "48");
console.log(f !== e);

var g = 0;
console.log(g);
var g = b + c;
console.log(g);

// 10 = g;
// console.log(g);

//1. Did you use const, let or var? Why did you choose the one you chose?
//I used var. Var variables can be re-declared and updated.
//2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//No errors.
//3. what happens if you write 10 = g?
//Uncaught SyntaxError: Invalid left-hand side in assignment

console.log(a < (b || f) === !f && e !== c);

//while (true) {
//	console.log('Do not run this loop');
//}
//Is the code below an infinite loop? Why or why not?
//Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.
//Yes this is an infinite loop. As long as the condition is "True", the function will run and in this case it will indefinitely console.log("Do not run this loop").

//const runProgram = true;
//while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;
//}
//is this loop an infinite loop? Why or why not?
//Yes this is an infinite loop as the condition is always true", the function will run and in this case it will indefinitely console.log("Do not run this loop").

//Infinite or not infinite? What is the expected output?
//Do not run this loop

let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
  //The JavaScript += operator takes the values from the right of the operator and adds it to the variable on the left. i.e. A = A+A..
  letters += "A";
  // increments the value of i by 1
  i++;
  // closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}
// prints the value of letters to the screen/Terminal window
console.log(letters);
//The code was what I expected, there are 21 As.

//A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//for loop is used when the number of iterations is known whereas, in the while loop, execution is done until the statement in the program is proved wrong.

//The first part of the control panel is: declare the variable
//The second part of the control panel is: continuation criteria, keep running until i does not satisfy the criteria
//The third part of the control panel is: increments the value of i by 1

// for (i = 0; i <= 999; i++) {
//   console.log(i);
// }

// for (i = 999; i >= 0; i--) {
//   console.log(i);
// }

for (i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}
