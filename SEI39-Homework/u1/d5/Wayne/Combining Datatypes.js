//===================================================Combining Datatypes
//Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons.
//Log one of the elements of that array.

// const crayonBox = [
//   { names: "blue Crayon" },
//   { names: "red Crayon" },
//   { names: "yellow Crayon" },
// ];
// console.log(crayonBox[1].names);

// // Create an object bottle that has a property that is an object: cap.
// // cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.Log one of the properties of that inner object.
// const objectBottle = {
//   cap: {
//     material: "Metal",
//     color: "Blue",
//   },
// };

// console.log(objectBottle.cap.material);

// // Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price.
// //Log one of the properties of that inner object.

// const receipt = [
//   {
//     item: {
//       name: "car",
//       price: "$4",
//     },
//   },
//   {
//     item: {
//       name: "mart",
//       price: "10",
//     },
//   },
//   {
//     item: {
//       name: "games",
//       price: "$99",
//     },
//   },
// ];
// console.log(receipt[2].item.name);

// // Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants.
// //Log one of the elements of the inner array.

// const apartmentBuilding = [["alice", "tom", "john"], ["building"], "rooms"];
// console.log(apartmentBuilding[0][0]);

//===================================================Combine objects, arrays, and functions more than one level deep
// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).

// const knit = () => {
//   const clothing = {
//     item: "scarf",
//     size: "6ft",
//   };
//   return clothing;
// };
// console.log(knit().item);

// function knit() {
//   const clothing = {
//     item: "scarf",
//     size: "6ft",
//   };
//   return clothing;
// }
// console.log(knit().item);

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
// Log one of the elements of that array.

// const crayonBox = [
//   { names: "Blue Crayon" },
//   { names: "Red Crayon" },
//   { names: "Yellow Crayon" },
// ];

// // console.log(crayonBox[0].names);

// const crayonSelector = (x) => {
//   return crayonBox[x].names;
// };

// console.log(crayonSelector(0));
// console.log(crayonSelector(1));
// console.log(crayonSelector(2));

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song.
//Call that inner function

// const powerButton = () => {
//   return options();
// };

// function options() {
//   console.log("Select a song!");
// }

// powerButton();

//===================================================Model a Vending Machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

// const vendingMachine = [
//   { name: "Cheezels", price: "$2" },
//   { name: "Super Ring", price: "$3" },
//   { name: "Polar Snack", price: "1" },
// ];

// const vendingMachine = [
//   { name: "Cheezels", price: "$2" },
//   { name: "Super Ring", price: "$3" },
//   { name: "Polar Snack", price: "1" },
// ];

// const vend = (snackChoice) => {
//   return vendingMachine[snackChoice];
// };

// console.log(vend(2));

//===================================================Callbacks
// Make a function add that takes two arguments (numbers) and sums them together
// Make a function subtract that takes two arguments (numbers) and subtracts them
// Make a function multiply that takes two arguments and multiplies them
// Make a function divide that takes two arguments and divides them
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2
// and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote

// const sum2 = (a, b) => {
//   return a + b;
// };
// console.log(sum2(3, 4));

// const sub2 = (a, b) => {
//   return a - b;
// };
// console.log(sub2(10, 5));

// const mult2 = (a, b) => {
//   return a * b;
// };
// console.log(mult2(5, 9));

// const div2 = (a, b) => {
//   return a / b;
// };
// console.log(div2(20, 4));

// const operateMult = (x, y) => {
//   return x * y;
// };

// const calculate = (num1, num2, operates) => {
//   console.log(`The final answer is ${operates(num1, num2)}`);
// };

// calculate(10, 200, operateMult);

//===================================================Function definition placement
//Clean up this code, so that it works and has function definitions in the correct place

// const bar = () => {
//   console.log("bar here");
// };
// bar();

// const foo = () => {
//   console.log("foo here");
// };
// foo();

//===================================================Error reading
//What is meant by the error(s) this produces?
foo();                  //the calling of the function should come after the function

const foo ()=>{         //there is a missing "="
    console.log('hi');
}





