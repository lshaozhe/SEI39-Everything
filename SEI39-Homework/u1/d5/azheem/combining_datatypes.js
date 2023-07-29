"use strict";

/////////////////////////////////////////
// Combine objects, arrays, and functions
/////////////////////////////////////////

// Q: Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons.
// Log one of the elements of that array.
const crayonBox = {
  name: ["Crayola", "Bazic", "Cra-Z-art", "Playskool", "Imperial"],
};
console.log(crayonBox.name[0]);

// Q: Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
// Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "metal or plastic",
    color: "blue or white",
  },
};
console.log(bottle.cap.material);

// Q: Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price.
// Log one of the properties of that inner object.
const receipt = [
  {
    name: "milk",
    price: "$3.50",
  },
  {
    name: "vegetable",
    price: "$0.50",
  },
];
console.log(receipt[1].name);

// Q: Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants.
// Log one of the elements of the inner array.
const apartmentBuilding = [["alan", "charles", "david"], 1, 2];
console.log(apartmentBuilding[0][1]);

//////////////////////////////////////////////////////////////////
// Combine objects, arrays, and functions more than one level deep
//////////////////////////////////////////////////////////////////

// Q: Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
  const obj = {
    item: "scarf",
    size: "6ft",
  };
  return obj;
};
console.log(knit().item);

// Q: Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
// Log one of the elements of that array.
const crayonSelector = () => {
  const crayonBox = {
    name: ["Crayola", "Bazic", "Cra-Z-art", "Playskool", "Imperial"],
  };
  return crayonBox;
};
console.log(crayonSelector().name[2]);

// Q: Create a function powerButton that returns a function called options - options should console.log a simple message like select a song.
// Call that inner function
const powerButton = () => {
  return options();
};

const options = () => {
  console.log("select a song");
};

powerButton();

//////////////////////////
// Model a Vending Machine
//////////////////////////

const vendingMachine = {
  snacks: [
    {
      name: "kitkat",
      price: "$1",
    },
    {
      name: "greentea",
      price: "$1.50",
    },
    {
      name: "biscuit",
      price: "$0.50",
    },
  ],
  vend: (indexNum) => {
    return vendingMachine.snacks[indexNum];
  },
};
console.log(vendingMachine.vend(1));

////////////
// Callbacks
////////////

// Q: Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
  return num1 + num2;
};

// Q: Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => {
  return num1 - num2;
};

// Q: Make a function multiply that takes two arguments and multiplies them
const multiply = (num1, num2) => {
  return num1 * num2;
};

// Q: Make a function divide that takes two arguments and divides them
const divide = (num1, num2) => {
  return num1 / num2;
};

// Q: Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
  return operates(num1, num2);
};

// Q: Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(2, 2, add));
console.log(calculate(2, 2, subtract));
console.log(calculate(2, 2, multiply));
console.log(calculate(2, 2, divide));

// Function definition placement

// clean up code (moved calling of functions to after the function declaration)

// const bar = () => {
//   console.log("bar here");
// };
// bar();

// const foo = () => {
//   console.log("foo here");
// };
// foo();

// Error reading
// foo();

// const foo ()=>{
//     console.log('hi');
// }
// The error produced => SyntaxError: Missing initializer in const declaration
// This is because there is a missing "=" after "const foo" and before the "()".
// This means that JS does not know what value is being given to foo.
