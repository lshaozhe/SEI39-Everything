// Section 1
// Question 1:
/*
DRY stands for Don't Repeat Yourself. It is a good practice in coding 
to check if there are lines that can be condensed and is aimed at reducing repition of software patterns. 
It saves time as there will be less lines of code to type and scan through, will produce a code base which is more refined and legible,
uses less memory, ad is easily adapted or altered.
A programming tool we have learned to write DRY codes are functions.
*/

// Question 2:
/*
 Var declarations are globally scoped when declared outside a function. It is available for use in the whole window when declared outside a function block.
 It is function scoped when declared within a function and can only be accessed within the function.

 Let declarations are an improvement to var declarations. A variable declared in a block with let is only available within that block. Let can be updated but not re-declared. 
 You don't have to worry if you have used a name for a variable before as the variable only exists within its scope

 Const maintains constant values. It is block scoped like let. It cannot be updated or re-declared.
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
console.log(e != "Kevin");
console.log(48 == "48");
console.log(f !== e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);

/* Did you use const, let or var? Why did you choose the one you chose?
I chose let as I wanted to redeclare the variable. 
What happens if you don't use const , let or var? Do you get an error? If so what does it say?
There was no error thrown. 
What happens if you write 10 = g?
There is an error: SyntaxError: Invalid left-hand side in assignment
*/

console.log((a !== (b || f)) === !f && e !== c);

// Section 3
/* 
1) A while statement executes as long as condition within () is true. As such, the conde is an infinite
loop as the condition is true with no way for it to become false.

The runProgram loop is also an infinite loop as the the variable has been assigned the value of true. 

*/

let letters = "A";
let i = 0;

// start a while loop that will run as long as i is lesser than 20
while (i < 20) {
  // Add the value of A to the variable letters (similar to concatenation)
  letters += "A";
  // increments the value of i by 1
  i++;
  // closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}
// prints the value of letters to the Terminal window
console.log(letters);

// Expected result: AAAAAAAAAAAAAAAAAAAAA

// Section 4
/*
1) A for loop performs the same operation as a while loop. 
But what are the key differences, if any? What are the similarities?

Differences
- The for loop is used when the programmer needs a loop to execute a specific number of times. 
The while loop executes target statements as long as the condition in the initial statement is true.

- The for loop can be used when the number of iteration is known. The while loop can be used when the number of iterations is unknown.

- In the for loop, initialisation occurs once. In the while loop, if the initialisation statement is inside the  loop, then the initialisation 
is done each time the loop iterates.

Similarities
- Both are repetition control structures.

What are the three components of the control panel? Each component is separated by a semicolon ;
1. The first part of the control panel is the iterator which is the variable operated on by the loop.
2. The second part of the control panel is the conditional statement. Whenever the loop decides if it should continue executing, it will check this condition. 
If the condition evaluates to true, the loop will execute the code block and then check the conditional again. If the condition evaluates to false, the loop will end.
3. The third part of the control panel is the final expression. It defines what the loop should do after each iteration of the code block. The operation in the final expression
should bring the iterator closer to reaching the limit of the conditional statement.

*/

// For loop II
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
Bonus Challenge
What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?

The backslash is an escape character in Javascript. When Javascript encounters a backslash, it tries to escape the following character.
Because strings must be written within quotes, Javascript will think that the quote has ended instead of interpreting ' as an apostrophe. By putting /' the backslash will turn it into a 
string character and it will act as an apostrophe or single quote within the string.

The second line of code will print fully as a string without issues as the quotes surrounding the string are double quotes and do not match the single quotes within the string.

The single backslash can also be used to break long codes within a text string.

The forward slash is the division operator.

*/

// For loop in reverse
// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (let i = 999; i > 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log("The value of i is: " + i + " out of 10");
}

for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} out of 10`);
}

// Iteration

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
  console.log(`${i}. ${StarWars[i]}`);
}

for (let i = 0; i < StarWars.length; i++) {
  if (i % 2 == 0) {
    console.log(StarWars[i]);
  }
}
