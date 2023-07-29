/*section 1
1.What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?

ans :
DRY stands for “don't repeat yourself”. 
The reason is when the same code is written in different place. Its will be difficult to change the code when there is changes to it
Programming tools :  python, javascript etc ( those that write function , create  loops and conditional statement )


// What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources


ans :
1. const : constant , data that variable contain is not going to change.
2. let : can change the value of that variable the program.
3. var : variable, a variable defined with var can be change.
*/

// section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a != b);
console.log(c != d);
console.log("Name" === "Name");
console.log(a + b === c);
console.log(a * a === d);
console.log(e !== "Kevin");
console.log(48 !== "48");
console.log(f != e);
let g = 0;

console.log(g);
g = b + c;
console.log(g);

/*
1. Did you use const, let or var? Why did you choose the one you chose?
ans :I used const and let. const is when the value is not going to change and let is when the value can be change .
2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
ans :TypeError: Assignment to constant variable.
3. what happens if you write 10 = g?
ans :Unexpected number
*/

console.log(a < (b || f) === !f && e !== c);

/*Section 3

const runProgram = true;

while (runProgram) {
  console.log("Do not run this loop");
  runProgram = false;
}
1. Infinite or not infinite? What is the expected output?
ans: not Infinite . it  print "Do not run this loop" once. Then it will have error as the runProgram cound not change its value.
*/

let letters = "A"; // declare letter = A
let i = 0; // declare i = 0

// start a while loop that will run as long as i is less than 20
while (i < 20) {
  letters += "A"; // adds the value to a variable and assigns the result to the variable
  i++; // after each go around of loop, add 1 to current value of the i
}

console.log(letters);
// result : AAAAAAAAAAAAAAAAAAAAA
//Section 4

/*
1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
ans: If we know exactly how many times the loop should execute, use 'for' loop for its precision.
If we are not sure how many times the loop has to run but we know when to stop, use 'while' loop

2. 
for (let i = 0; i < 100; i++) {
  console.log("Without you, today's emotions are the scurf of yesterday's");
}

ans :
1. let i = 0 ; ( start an iterator variable i at the value of 0 )
2. i<100; ( if the value of i is less than 100 , execute the code block)
3. i++; ( after the code block run , add 1 to the i variabel . The loop will repeat until the conditional, i<100 is finally false.At that point, the loop "exists" and the code block no longer run.)
*/

//Write a for loop that will console.log the numbers 0 to 999.

for (i = 0; i <= 999; i++) {
  console.log(i);
}
//Console.log a countdown from 999 to 0.
for (let i = 999; i >= 0; i--) {
  console.log(i);
}

//More counting
for (let i = 0; i <= 10; i++) {
  console.log("The value of i is: " + i + " of 10");
}
