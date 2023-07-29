//===========================================================================
//Section 2 Combining Datatypes
//===========================================================================

//================ Combine objects, arrays, and functions ================

//Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons.
//Log one of the elements of that array.
// const crayonBox = [
//   { names: "Red Crayon" },
//   { names: "Blue Crayon" },
//   { names: "Yellow Crayon" },
// ];
// console.log(crayonBox[0].names);

// //Create an object bottle that has a property that is an object: cap.
// //cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
// const bottle = {
//   cap: {
//     material: "metal",
//     color: "blue",
//   },
// };
// console.log(bottle.cap.material);

// //Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price.
// // Log one of the properties of that inner object.
// const receipt = [
//   {
//     items: {
//       name: "meat",
//       price: "$5",
//     },
//   },
//   {
//     items: {
//       name: "egg",
//       price: "$2",
//     },
//   },
//   {
//     items: {
//       name: "fruit",
//       price: "$3",
//     },
//   },
// ];
// console.log(receipt[2].items.name);

// //Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants.
// //Log one of the elements of the inner array.
// const apartmentBuilding = [["Alice", "Tom", "John"], ["buildings"], "rooms"];
// console.log(apartmentBuilding[0][1]);

//================ Combine objects, arrays, and functions more than one level deep ================
// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).
// const knit = () => {
//   const object = {
//     item: "scarf",
//     size: "6ft",
//   };
//   return object;
// };
// console.log(knit().item);

// function knit() {
//   const object = {
//     item: "scarf",
//     size: "6ft",
//   };
//   return object;
// }
// console.log(knit().item);

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
// Log one of the elements of that array.

// const crayonBox = [
//   { names: "Red Crayon" },
//   { names: "Blue Crayon" },
//   { names: "Yellow Crayon" },
// ];

// const crayonSelector = (x) => {
//   return crayonBox[x].names;
// };

// console.log(crayonBox);
// console.log(crayonSelector(0));

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song.
// Call that inner function
// const powerButton = () => {
//   return options();
// };

// function options() {
//   console.log("select a song");
// }

// powerButton();

//================================ Model a vending machine ================================
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
// const vendingMachine = [
//   { name: "chocolate", price: "$5" },
//   { name: "chips", price: "$2" },
//   { name: "soda", price: "$1" },
// ];

// const vend = (snackChoice) => {
//   return vendingMachine[snackChoice];
// };

// console.log(vend(1));

//================================ Callbacks ================================
// Make a function add that takes two arguments (numbers) and sums them together
// const sumNum = (x, y) => {
//   return x + y;
// };
// console.log(sumNum(1, 2));

// // Make a function subtract that takes two arguments (numbers) and subtracts them
// const subNum = (x, y) => {
//   return x - y;
// };
// console.log(subNum(7, 2));

// // Make a function multiply that takes two arguments and multiplies them
// const multiply = (x, y) => {
//   return x * y;
// };
// console.log(multiply(11, 2));

// // Make a function divide that takes two arguments and divides them
// const divide = (x, y) => {
//   return x / y;
// };
// console.log(divide(6, 3));

// // Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and
// //a function called operates (a callback).
// // Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// // Call calculate 4 times, each time using one of the operation functions you wrote

// const operateMult = (x, y) => {
//   return x * y;
// };

// const calculate = (num1, num2, operates) => {
//   console.log(`The final answer is ${operates(num1, num2)}`);
// };
// calculate(5, 2, multiply);
// calculate(5, 2, divide);
// calculate(5, 2, subNum);
// calculate(5, 2, sumNum);

//================================ Function definition placement ================================
//Clean up this code, so that it works and has function definitions in the correct place
// const bar = () => {
//   console.log("bar here");
// };
// bar();

// const foo = () => {
//   console.log("foo here");
// };
// foo();

//================================ Error reading ================================
// What is meant by the error(s) this produces?
foo(); //this function call should come after the function 

const foo ()=>{ //there is a missing "=" 
    console.log('hi');
}