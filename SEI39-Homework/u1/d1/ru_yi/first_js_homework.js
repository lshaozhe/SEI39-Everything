// Section 1

/*
1. DRY stands for Don't Repeat Yourself. Applying the DRY principle allows us to focus on writing reusable pieces of code meant 
for a specific purpose the bare minimum number of times, instead of repeating the same code. This improves performance and 
code readability. Being able to write functions in JavaScript allows us to create code one time that can be used for
the same purpose multiple times.
*/

/* 
2. Const is the keyword to declare variables where the data will not change. Let is the keyword to use where the data the 
variable contains will change. Var is the keyword used in older code, before let and const were introduced.
*/

// Section 2
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
console.log(a <= a < d);
console.log(e !== "Kevin");
console.log(48 == "48");
console.log(f !== e);
var g = 0;
console.log(g);
g = b + c;
console.log(g);

//1. I used let since the date the variable g contains will change.
/*
2. If I use const, I will get "Assignment to constant variable" error. If I use var, there is no error, I get the same result 
as using let.
*/
//3. I will get error "unexpected number"

// Bonus Challenge
// Replace the underscores to make a Boolean expression that evaluates to true. Use no more than one of the following:
// > , < !== and ===.
a < (b || f) === !f && e !== c;
// 1. (): (b || f) => 53 || false => 53
// 2. <: a < (b || f) => 4 < 53 => true
// 3. ===: a < (b || f) === !f => true === true => true
// 4. !==: e !== c => "Kelvin" !== 57 => true
// 5. &&: a < (b || f) === !f && e !== c => true && true => true

// Section 3
//Infinite loop I
/* 
It is an infinite loop, as the code block within the while loop does not eventually result in the condition turning false, so 
the loop will keep running as the condition will always evaluate as true.
*/

//Infinite loop II
/* 
Expected output is as follows: Do not run this loop!
It is not an infinite loop, since after the initial loop the condition turns false and the while loop will stop.
*/

// Declares a variable called letters with data "A" assigned.
let letters = "A";

// Declares a variable called i with data 0 assigned.
let i = 0;

// Starts a while loop that runs when i is less than 20.
while (i < 20) {
  // For every loop executed where condition is true, letters variable will concatenate with another "A" added to it
  letters += "A";
  /* 
    For every loop executed where condition is true, i variable will increase by 1. Loop will eventually close once i reaches
    20 and condition evaluates as false.
	*/
  i++;
}

// This will log the value of the letters variable to the console.
console.log(letters);

/* 
Expected result is "A", since the letters variable inside the while loop has local scope and is only available within the 
while loop.
*/
/* 
The actual result is "AAAAAAAAAAAAAAAAAAAAA" - this means that the letters variable declared outside the while loop can still
be changed by the while loop.
*/

// Section 4
// For loops
/*
The for loop is made up of the keyword, control statement (iterator, conditional statement and final expression) & code block.
Whereas the while loop only requires a conditional statement.
The for loop runs for a specified number of iterations, whereas for while loop the number of iterations is not specified.
Both loops will run as long as condition evaluates as true until condition evaluates as false.
*/

// For loop control panel
// First part is iterator (let i = 0), second part is conditional statement (i <100) and last part is final expression (i++).

// For loop II
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

// Bonus challenge
// The backslash (\) escape character turns special characters into string characters. It allows the single quotation marks to
// to be read as part of the string.
// The forward slash (/) is for commenting.

// For loop in reverse
for (let i = 999; i >= 0; i--) {
  console.log(i);
}

// More counting
for (let i = 1; i < 11; i++) {
  console.log("The value of i is: " + i + " of 10");
}

// Bonus:
for (let i = 1; i < 11; i++) {
  console.log(`The value of i is: ${i} of 10`);
}
