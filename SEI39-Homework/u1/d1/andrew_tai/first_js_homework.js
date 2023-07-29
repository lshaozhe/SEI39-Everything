// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Section 1
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// A1. DRY stands for Don't Repeat Yourself. DRY code allows for the ease of modification of portions of code without having to repeat the changes. Variables are a tool to write DRY code. The use of variables ensure that as long as the assigned value is changed, all areas of code utilising the variable will use the new assigned value.

// Q2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// A2. const is a variable whose assigned value cannot be changed. let on the other hand can be modified and re-declared at a later time. var creates a function-scoped or globally-scoped variable.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Section 2
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a < b < c);
console.log((a === a) !== d);
console.log(e !== "Kevin");
console.log(48 == "48");
console.log(f != e);

let g = 0;
console.log(g);
g = b + c;
console.log(g);

// Q1. Did you use const, let or var? Why did you choose the one you chose?
// A1. let was used to declare variable g. let was chosen because g would first be assigned the value of 0 and there after re-assigned a value of b + c. let would allow the value of the variable to be changed.

// Q2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// A2. An error would occur if const was used. The error would be "assignment to constant variable" which means that I am trying to change something which is not supposed to change.

// Q3. What happens if you write 10 = g?
// A3. A syntax error would occur as a number was used in the left-hand side of the assignment.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Section 3
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1. Is the code below an infinite loop? Why or why not?
/*
while (true) {
	console.log('Do not run this loop');
}
*/

// A1. The code above is an infinite loop because there is no statement that turns the conditional false.

// Q2. Infinite or not infinite? What is the expected output?
/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
*/

// A2. The code above is not an infinite loop. runProgram is declared as a const. As such, within the while loop, the statement 'runProgram = false' will break the loop cycle and return an error message of "assignment to constant variable".

// Q3. Without running this loop, what is the expected output?
/*
let q = 20;

// start a while loop that will run as long as q is greater than 10
while (q > 10){
  // prints the value of q to the screen/Terminal window
  console.log(q)
  // decrements the value of q by 1
  q--
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
} 
*/

// A3. The above code will print: 20, 19, 18, 17, 16, 15, 14, 13, 12 ,11

// Declare variables letters and i and assign them the values of 'A' and 0 respectively
let letters = "A";
let i = 0;

// Begin a while loop for as long as variable i is less than 20.
while (i < 20) {
  // If variable i is less than 20, append "A" to the letters string.
  letters += "A";
  // Increase the value of variable i by 1.
  i++;
  // Closes the loop. The loop will keep running until the contional i < 20 is false.
}

// Return the variable letters in the console.
console.log(letters);

// Expected Result:
// AAAAAAAAAAAAAAAAAAAAA
// Code result was as expected.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Section 4
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

// A1. One difference is that the for loop includes a final expression which dictates the changes in the variables evaluated after each loop is completed. The while loop requires any changes in variables evaluated to be made within the code block itself. Another is that the initial declaration of the evaluated variable is made within the for loop whereas the while loop requires the evaluated variable to have been declared. Both will include a conditional which will run the code block as long as the conditional equates to true.

// Q2. What are the three components of the control panel?

// A2.
// The first part of the control panel is: the initial declaration of the evaluated variable
// The second part of the control panel is: the condition statement
// The third part of the control panel is: the increment experession

// Q3. Write a for loop that will console.log the numbers 0 to 999.

for (i = 0; i < 1000; i++) {
  console.log(i);
}

// Q4. What is the difference between \ and /? What is \ doing in the string?

// A4. / simply indicates a forward-slash whereas a \ indicates an escape of special characters. \ is telling the console that the character following it should be represented as the literal character.

// Q5. Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (i = 999; i >= 0; i--) {
  console.log(i);
}

// Q6. Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

// Using string concantenation.
for (i = 1; i <= 10; i++) {
  console.log("The value of i is : " + i + " of 10.");
}

// Using template literals.
for (i = 1; i <= 10; i++) {
  console.log(`The value of i is : ${i} of 10.`);
}

// Q7. Iterate over the StarWars array and print each element to the console.

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

// While loop
let x = 0;

while (x < StarWars.length) {
  console.log(StarWars[x]);
  x++;
}

// For loop
for (i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
}

// Q8. Iterate over the StarWars array again and print each character's name as well as the value of x.

for (i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i], i);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Section 5
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
