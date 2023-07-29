/////////////////////////////
// Combine objects, arrays, and functions
// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons.
//  Log one of the elements of that array.
const crayonBox = {
  colors: ["red", "blue", "yellow"],
};

console.log(crayonBox.colors[0]);

// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or
// 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "plastic",
    color: "white",
  },
};
console.log(bottle.cap.material);

// 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name
// and a price. Log one of the properties of that inner object.
const receipt = [
  { name: "pen", price: "$1.50" },
  { name: "onigiri", price: "$2.00" },
];

console.log(receipt[0].name);

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names
// of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [["Nyx", "Harry"], 0];

console.log(apartmentBuilding[0][0]);

/////////////////////////////
// Combine objects, arrays, and functions more than one level deep

// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).
function knit() {
  return {
    item: "scarf",
    size: "6ft",
  };
}

console.log(knit().item);

// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one
// of the elements of that array.
function crayonSelector() {
  return {
    colors: ["red", "blue", "yellow"],
  };
}

console.log(crayonSelector().colors[0]);

// 3. Create a function powerButton that returns a function called options - options should console.log a simple message like
// select a song. Call that inner function
function powerButton() {
  return function options() {
    console.log("select a song");
  };
}

powerButton()();

/////////////////////////////
// Model a Vending Machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that
// snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks: [
    { name: "cookies", price: "$2.00" },
    { name: "cereal", price: "$1.20" },
    { name: "candy", price: "$1.00" },
  ],
  // OLD ANSWER THAT WORKS
  // vend: (arrayPosition) => {
  //     return vendingMachine.snacks[arrayPosition];
  vend(arrayPosition) {
    return vendingMachine.snacks[arrayPosition];
  },
};

console.log(vendingMachine.vend(1));

/////////////////////////////
// Callbacks
// 1. Make a function add that takes two arguments (numbers) and sums them together
const add = (x, y) => {
  return x + y;
};

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (x, y) => {
  return x - y;
};

// 3. Make a function multiply that takes two arguments and multiplies them
const multiply = (x, y) => {
  return x * y;
};

// 4. Make a function divide that takes two arguments and divides them
const divide = (x, y) => {
  return x / y;
};

// 5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// 6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
  return operates(num1, num2);
};

// 7. Call calculate 4 times, each time using one of the operation functions you
console.log(calculate(20, 10, add));
console.log(calculate(20, 10, subtract));
console.log(calculate(20, 10, multiply));
console.log(calculate(20, 10, divide));

/////////////////////////////
// Function definition placement

const bar = () => {
  console.log("bar here");
};

const foo = () => {
  console.log("foo here");
};
bar();
foo();

/////////////////////////////
// Error reading
// foo();

// const foo ()=>{
//     console.log('hi');
// }

// SyntaxError: Missing initializer in const declaration
// This means that we are trying to invoke a function that has yet to be declared.
// We should call foo only after it is declared, to avoid this error.
