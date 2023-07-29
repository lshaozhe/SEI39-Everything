// Section 1

// 1.DRY stands for Do not Repeat Yourself, good practice coding aims to minimise repetitions and redundancy.

// 2.const is for declaration of constants which should be unchanged in the code,
// let is for declaration of variables which can be assigned different values.
// var declares a global variable

//Section 2

//remove comment block to run codes
/*const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a !== b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a < b < c);
console.log(a <= a <= d);
console.log(e !== "kevin");
console.log(48 == "48");
console.log(f !== e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);
let _10 = g;
console.log(_10);*/

//1. Since variable g needs to be re-assigned to a different value, the let variable is used.
//2. const would not be allowed as g changes along the codes. Var can be used.
//3. the variable name in JS cannot start with a number, a _ needs to be used before the number for a number to be used as a variable.

//console.log(a < (b || f) && !f && e !== c);

//Section 3
//1. It is a infinte loop as while will run so long as the condition returns true. writing a true as the condition that remains unchanged will keep the code running infinitely.
//2. The second block of codes is also an infinite loop, as the runProgram variable is declared constant and cannot be changed from true, hence while loop will run infinitely. However, the code may return an error as the runProgram defined as a const cannot be re-assigned a value.
let letters = "A";
let i = 0;

//loops the codeblock in while loop so long as i<20.
while (i < 20) {
  letters += "A"; //adds a letter "A" to the existing variable letters
  i++; //increase the counter to re-run the loop (until i = 20)
}

console.log(letters); //The while loop should add 20 "A" to the existing "a" assigned to var letters
console.log(letters.length); // so total length should return 21

//Section 4
//1. if takes 3 arguments, first argument the declaration of a counter var, second argument is the test condition for which if true the loop will re-iterate, third argument is the instruction to increment/decrement the counter var.

//Counter from 0 to 999 below
/*for (let i = 0; i <= 999; i++) {
  console.log(i);
}*/

// Bonus: the backslash within the string tells the compiller to regconise " or ' as strings to be displayed

//Counter from 999 to 0 below
/*for (let i = 999; i >= 0; i--) {
  console.log(i);
}*/

//Logging the value of i
for (let i = 1; i < 11; i++) {
  console.log(`The value of i is: ${i} of 10`);
}

//starwars array
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i] + " " + i);
} //For bonus challenge, replace i++ by i+=2 to increment by 2 each loop
