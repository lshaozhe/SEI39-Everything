/*Common programming principle
Write a ~1 sentence summary for each one


1. DRY - (Don’t repeat yourself) dont duplicate code for the same function

2. KISS - (Keep it simple, stupid! ) keep the code as simple as it will have lesser bugs and easier to modidify

3. Avoid creating a YAGNI - (You aren’t going to need it) removed out all the code / do not implement some codes that we do not need it 

4. Do the simplest thing that could possibly work - the overall goal to make the code work is make it easy to read and to understand

5. Don't make me think - the code should be easily read and understood with  minimum of effort.

6. Write code for the maintainer - write a code that is simple and easy to understand even with a little knowledge on the system.  

7. Single responsibility principle-  one class or function should perform one task or purpose

8. Avoid premature optimisation - do not think of optimizating when the code is not working.

9. Separation of concerns -  kind of separate code smaller block from the main function of the application and this will
help to mainintain the code.

Which ones surprise you (if any)?
nope.

Which one is currently giving you the most struggle?
KISS 

*/

//Commenting Code

// declare a function 'f' that have the Parameter 'l'
const f = (l) => {
  //declare the inital values of the variable for es,p,c,n
  let es = 0,
    p = 0,
    c = 1,
    n = 0;

  //execute a while loop when c is less than or equal to 1 is true
  while (c <= l) {
    n = c + p;
    // 1R  n= 1 , c=1 , p=0
    // 2R n= 2, c=1, p=1
    //3R n=3, c=2 , p=1
    // 4R n= 5 ,c=3,p =2
    // 5R n= 8, c=5,p=3

    [c, p] = [n, c]; // reasign the value to c,p  - now the c = n, p=c
    // 1R c=1, p=1
    // 2R c=2, p=1
    // 3R c=3,p=2
    //4R c=5, p=3
    //5R c=8, p=5

    es += c % 2 === 0 ? c : 0;
    /*

    es += c % 2 === 0 ? c : 0; -> have 2 part
    1st part ,(c % 2 === 0) -> check c % 2 is equivalent to 0  (even)
    if true = c and false =0

    2rd part is es =es + (1st part)

    
    */

    // 1R es =0
    //2R es=2
    //3R es= 2
    //4R es=2
    //5R es = 10
  }
  return es; //  when c>l, stops the execution of a function and returns a value of es
};

console.log(f(55)); // to  execute the function 'f' and print the value of of es when c <= 55

//
// declare a function 'f2' that have the Parameter 'limit'
const f2 = (limit) => {
  //declare the inital values of the variable for evenSum, previous, current
  let evenSum = 0;
  let previous = 0;
  let current = 1;

  //execute a while loop when current is less than or equal to limit is true
  while (current <= limit) {
    let next = current + previous; // declare next = sum of current and previous
    previous = current; // reassign of previous
    current = next; // reassign of current

    //if current % 2 is equivalent to 0  (even) , then execute
    if (current % 2 === 0) {
      evenSum += current; // evenSum= evenSum + Current
    }
  }
  return evenSum; //  when current > limitstops, stops the execution of a function and returns a value of esevenSum
};

console.log(f2(55)); // to  execute the function 'f' and print the value of of es when current <= 55

/*
In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
-comment to describle the code
-The variable name should provide some indication as to what the values assigned to it
-The function name should provide some indication as to what the function excuted to 
*/

/*
If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
- f2 , easier for me to understand and it have variable name( easlier to know what the value for)
*/

/*
Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
-semi-colons is to seperate the statement of code. 
*/
//
