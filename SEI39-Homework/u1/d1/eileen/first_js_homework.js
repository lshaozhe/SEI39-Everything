// Section 1
//1. DRY stands for "Don't Repeat Yourself". It is important for efficiency and accurancy, as its easier to maintain one copy of the code so that i there are any changes to be made, it only needs to be changed in one place. Programming tools we have learned to write DRY code are functions, for loops, while loops and if statements.
//2. constant variables cannot be redeclared, while let and var can be redeclared. var creates a global variabale, while for let and constant, it is function scoped if its declared within a function and a global variable if its declared outside of a function.

// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a !== b);
console.log(c !== d);
console.log("Name" === "Name");
console.log((a !== b) !== c);
console.log((a === a) !== d);
console.log(e !== "Kevin");
console.log(48 !== "48");
console.log(f !== e);

let g = 0;

g = b + c;

console.log(g);

//1. I used let for the variable g. As let allows the variable to be redeclared.
//2. If i used const, it returns an error. The error says "TypeError: Assignment to constant variable."
//3. It returns an error "Unexpected number".

//Bonus Challenge
console.log(a < (b || f) === !f && e !== c);

//Section 3
//Infinite loop I
//1. The code is an infinite loop as there is no exit criteria in the loop and the code will thus always remain true and satisfy the constant criteria and keep running.

//Infinite loop II
//1. This is not an infinite loop as there is an exit criteria where runProgram would not satisfy the constant criteria, thus exiting the loop. The expected output would be "Do not run this loop".

//declares the Variable letters
let letters = "A";

//declares the Variable i
let i = 0;
//starts a while loop that will run as long as i is smaller than 20
while (i < 20) {
  // Conconates the letter A to variable A
  letters += "A";
  //Increment the value of I by 1
  i++;
  //Closes while loop and the code will continue to run as long as the condition is evaluated to false.
}

console.log(letters);

//Section 4
//For loops
//1. For loops will continue to run until the specified number of interations is reached, whereas a while loop will continue to run until the condition is evaluated to be false.

//For loop control panel
//1. The first part of the cowntrol panel is : Declaration
//2. The second part of the control panel is : Conditional Statement
//3. The third part of the control panel is: Final expression

//For loop II

for (i = 0; i <= 999; i++) {
  console.log(i);
}

//Bonus Challenge
//The forward slash is used to seperate directory while the backslash is used as an escape character usually to escape a single or double quote.

//For loop in reverse
for (i = 999; i >= 0; i--) {
  console.log(i);
}

//More counting
for (i = 1; i <= 10; i++) {
  console.log("The value of i is: " + i + " of 10");
}

//Bonus challenge
for (i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}

//Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
  console.log(i);
}

//Bonus Challenge
for (i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);
}
