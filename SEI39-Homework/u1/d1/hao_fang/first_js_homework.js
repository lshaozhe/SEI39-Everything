/* [Section 1]

Qn 1: DRY stands for "Don't Repeat Yourself", it is inefficient to type the same code multiple times.
Loops will execute the same code multiple times and only have to be written once.

Qn 2: "const" creates a variable where the value can never be exchanged, whereas the variable created from 
"let" can still be changed. "var" creates a global variable, while "const" and "let" create local variables. */

// [Section 2]
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

if (a < b) {
  console.log("1 is true");
}
if (c > d) {
  console.log("2 is true");
}
if ("Name" === "Name") {
  console.log("3 is true");
}
if (a < b < c) {
  console.log("4 is true");
}
if ((a === a) !== d) {
  console.log("5 is true");
}
if (e !== "Kevin") {
  console.log("6 is true");
}
if (48 == "48") {
  console.log("7 is true");
}
if (f !== e) {
  console.log("8 is true");
}

let g = 0;
g = b + c;
console.log(g);

/* Qn 1: I used "let" because the value of a variable created with "const" cannot be changed and I would want to avoid
creating a global variable with "var". 

Qn 2: I get an error if I use "const". It says Type Error: Assignment to constant variable. With "var" the program
would still work fine.

Qn 3: Syntax Error: Unexpected number
*/

if (a < (b || f) === !f && e !== c) {
  console.log("Bonus is true");
}

/* [Section 3]
Loop 1: Yes. The value inside the bracket in this case is always true, as the code does not ever change the value to false.
The while loop will thus keep repeating infinitely.

Loop 2: Yes. Although the code within the curly brackets make an attempt to change the value within the round brackets to
"False", the variable runProgram is defined as a const and thus its value cannot be changed. runProgram will thus always
be true and the while loop will keep repeating infinitely.

*/

// declares a string-type variable called "A".
let letters = "A";
// declares a number-type variable called "i" and it is assigned a value of 0.
let i = 0;

// check if (i < 20) is true. If it is, execute the code within the curly brackets
while (i < 20) {
  // it doesn't seem like the  += operator is valid so I expect there to be an error.
  letters += "A";
  // increase i by 1 then go back to line 75 again
  i++;
}

// print out "A" once
console.log(letters);

// I ran the code and the result was totally unexpected. There was no error and 20 consecutive "A"s were printed
// instead of just 1 "A". After googling the += operator I learned that the value on the right of the operator is added
// to the variable on the left, and it works even for strings, not just numbers.

/* [Section 4]
Qn: One difference is that a "for loop" is written concisely with the variable declaration, conditions for the loop and 
the increment at the end of each loop, all being included in 1 line. In a "while loop", these would all have to be written
separately. Another difference is that the "while" loop will be executed an indefinite amount of times whereas
the "for loop" has a definite ending.

Qn 1: The first part of the control panel is the initial variable "i = 0"
Qn 2: The second part of the control panel is the condition to break out of the loop "i < 100"
Qn 3: The third part of the control panel is the increment at the end of each loop "i++"

Loop 2:
for (let i = 0; i <= 999; i++) {
    console.log (i);
}

Loop in reverse:
for (let i = 999; i >= 0; i--) {
    console.log (i);
}

Loop concatenation:
for (let i = 0; i <= 10; i++) {
    console.log (`The value of i is: ${i} of 10`);
}

*/
