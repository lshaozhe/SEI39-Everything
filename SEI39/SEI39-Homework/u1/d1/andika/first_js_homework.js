//Section 1

//1 DRY stands for Don't Repeat Yourself. It's an important principle to reduce repetition in code.
// One of the tools we can use is Functions. 

//2 const is used to declare variable with value that will not change
// let is used to declare variable with value that can change
// var is used to declare variable as well, but it's obsolete due to issue with scope of the variable, and
// duplication of var variable does not trigger error even with strict mode.

//-----------------------------------
//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);

console.log(c > d);

console.log('Name' === 'Name');

console.log(a < b < c);

console.log((a === a) < d);

console.log(e !== 'Kevin');

console.log(48 == '48');

console.log(f !== e);

let g = 0;

console.log(g);
g = b + c;

console.log(g);

//1. Initially I used const for g, and change it to let since g is assigned new value of b+c.
//2. If const is used instead of let, it produced TypeError: Assignment to constant variable.
//3. It produce an error of SyntaxError: Invalid left-hand side in assignment

console.log(a < (b || f) === !f && e !== c);

//-----------------------------------
//Section 3
//1. Yes, because the while condition is always true since there is no termination condition, hence the while loop will keep running infinitely.
//for Infinite loop II, runProgram variable is declared as constant and will stays as 'true', creating an infinite loop 
//the while loop will output a TypeError, due to Assignment to constant variable. 

//declare variable letters and i
let letters = "A";
let i = 0;

//start a while loop that will run as long as i is below 20
while (i < 20) {
  //concatenate variable letters with an additional "A" string
  letters += "A";
  //increase the value of i by 1
  i++;
}
//print the final value of letters to terminal, it will print 21 A's
console.log(letters);

//the output of the code is as what i expected.

//-----------------------------------
//Section 4
//1. for loop is typically used to repeat a code a certain number of times, on the other hand while loop is used 
// when we're are unsure of the number of repetition. Both are similar that it will repeat the code as long as
// the condition is true.

//first part of control panel: set a counter variable before the loop start.
// second part: the running condition for the loop.
// third part: increase the value of counter each time the loop is executed.

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

//backlash is used to show character ' when the whole string is encased by ''.


for (let i = 999; i >= 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log('The value of i is: ' + i + ' of 10');
}

for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}