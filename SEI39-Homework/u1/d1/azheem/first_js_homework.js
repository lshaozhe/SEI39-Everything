// Section 1

// Q: What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// A: DRY stand for Don't Repeat Yourself. It is a programming principle used to reduce / eliminate any repetitions in our code which will make the code appear cleaner and reduces any mistakes. Some tools which we can use to write DRY code (by reducing/eliminating any repetition) is by using for and while loops which keeps running the code block as long as the criteria set is met.

// Q: What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// A: var is an older method used to declare variables in JavaScript. const is used to declare a variable whose values cannot be changed whereas let is used to declare a variable whose values can be changed throughout the code.

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
console.log(e === "Kelvin");
console.log(48 == "48");
console.log(f != e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);

console.log(a < (b || f) === !f && e !== c);

// Q: Did you use const, let or var? Why did you choose the one you chose?
// A: I used let. This is because the variable 'g' value changes throughout the code (from 0 to b+c)

// Q: What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// A: No error appeared, code could run the same.

// Q: What happens if you write 10 = g?
// A: A SyntaxError appeared (invalid left-hand side in assignment).

// Section 3

// Infinite Loop
// Q: Is the code below an infinite loop? Why or why not?
// A: It is an infinite loop because the criteria (in this case, true) will always be met hence the while loop continues to be executed endlessly.

// Infinite Loop II
// Q: Is this loop an infinite loop? Why or why not?
// A: Not an infinite loop. The while loop will execute once (because runProgram is initially = true) hence, console.log will print out 'Do not run this loop' and thereafter runProgram is set to be = false. After this, the criteria for the while loop to execute is no longer true (since runProgram is now = false) thus the while loop will not execute anymore.

let letters = "A";
let i = 0;

// start a while loop that will run as long as i is less than 20
while (i < 20) {
  // adds the alphabet "A" to letters 1x, at the end of the string
  letters += "A";
  // increases the value of i by 1
  i++;

  // closes the while loop, the code inside this loop will keep running until the while condition is evaluated to be false
}
// prints the value of letters to the screen/Terminal window after the while loop above has stop executing
console.log(letters);

// Section 4
// Q: A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
// A: Differences: Different syntax between the 2, For loop usually used when you know how many times you want the loop to be executed, while loop is used when you are unsure how many times you want the while loop to be executed.
// Similarities: Both evaluates the condition you set and executes the code block inside the loop only if the condition is met.

// Q: What are the three components of the control panel? Each component is separated by a semicolon ;.
// A: 1. First part of control panel is the initial declaration. This part declares the initial value of the counter i to be = 0.
// 2. Second part of control panel is the continous criteria. This part declares the criteria that needs to be met for the for loop to be executed which is to execute the for loop as long as i is less than 100.
// 3. Third part of control panel is executed each time after the for loop has been executed. This part increases the value of i by 1 after each time the for loop has been executed.

// Write a for loop that will console.log the numbers 0 to 999.
for (i = 0; i < 1000; i++) {
  console.log(i);
}

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (i = 999; i >= 0; i--) {
  console.log(i);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.
for (i = 1; i < 11; i++) {
  console.log("The value of i is: " + i + " of 10");
}

// (Bonus) Rewrite the above loop using String Interpolation/Template Literals instead of concatenation
for (i = 1; i < 11; i++) {
  console.log(`The value of i is: ${i} of 10`);
}
