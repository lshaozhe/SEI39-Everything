//////////////////////////////
//Common PRogramming Principles
//1. DRY - Do not Reapeat Yourself means to avoid repeating codes that are lengthy (as they contain repeats).
//2. KISS - Keep it Simple, Stupid, short codes are preferable to ease reading and debugging.
//3. Avoid creating a YAGNI - do not add things to codes when you dont need it.
//4. Do the simplest thing that could possibly work - code in the simpliest fashion that one can think of.
//5. Don't make me think - codes should be easily comprehendable by the reader
//6. Write code for the maintainer - make it easy for others to understand codes, such that revisions can be made in the future
//7. Single responsibility principle - a single component in each code should only perform one function
//8. Avoid premature optimisation - optimisation of codes should only occur when necessary and when code is working
//9. Separation of concerns - functionalities within codes should have distinct boundaries to minimise overlapping codes.
// The principles are not suprising, and revolves around simplicity ultimately. To keep things simple and short is still rather tough for me.

//Commenting Codes
const f = (l) => {
  //function takes in 1 variable, and returns 1 variable
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]; //let c = n and p = c
    es += c % 2 === 0 ? c : 0; //c will be added to es if c is a even number.
  }
  return es;
};
console.log(f(55)); //logs the return of the function ran.

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};
console.log(f2(55));

//The function can be called sum of even terms. the variable names are clearer now, perhaps the code could just be commented to ease understanding.
//It would be easier to work on the changes to f2, as the variable names are easily understood when read.
//The semi colon is necessary to define the end of variable declaration.
