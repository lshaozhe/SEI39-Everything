/////////////////////////////////////////////////////////////////////////////
//Combine objects, arrays and functions
/////////////////////////////////////////////////////////////////////////////
//1.Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  colors: ["red", "blue", "yellow"],
};
console.log(crayonBox.colors[1]);
/////////////////////////////////////////////////////////////////////////////
//2.Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "metal",
    color: "white",
  },
};
console.log(bottle.cap.material);
/////////////////////////////////////////////////////////////////////////////
//3.Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = {
  food: {
    name: "filletOfish",
    price: "$4",
  },
  drinks: {
    name: "coke",
    price: "$3",
  },
};
console.log(receipt.food.name);
/////////////////////////////////////////////////////////////////////////////
//4.Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array
const apartmentBuilding = [
  ["bob", "doug", "joe"],
  [1, 2, 3],
];
console.log(apartmentBuilding[0][0]);
/////////////////////////////////////////////////////////////////////////////
//Combine objects, arrays, and functions more than one level deep
/////////////////////////////////////////////////////////////////////////////
//1.Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
  const obj = {
    item: "scarf",
    size: "6ft",
  };
  return obj;
};
console.log(knit().item);
/////////////////////////////////////////////////////////////////////////////
//2.Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
const crayonSelector = () => {
  return crayonBox;
};
console.log(crayonSelector().colors[0]);
/////////////////////////////////////////////////////////////////////////////
//3.Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
const powerButton = () => {
  const options = () => {
    console.log("select a song");
  };
  return options;
};
powerButton()();
/////////////////////////////////////////////////////////////////////////////
//Model a Vending Machine
/////////////////////////////////////////////////////////////////////////////
//a vending machine is an object
//it has an array of snacks (make 3 snacks)
//snacks are objects that have a name and a price
//a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
//Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine = {
  snacks: [
    { name: "lays", price: "$3" },
    { name: "snickers", price: "$2" },
    { name: "cupNoodles", price: "$4" },
  ],
  vend: (int) => {
    return vendingMachine.snacks[int];
  },
};
console.log(vendingMachine.vend(1));
/////////////////////////////////////////////////////////////////////////////
//Callbacks
/////////////////////////////////////////////////////////////////////////////
//Make a function add that takes two arguments (numbers) and sums them together
const add = (arg1, arg2) => {
  let sum = arg1 + arg2;
  return sum;
};
console.log(add(1, 2));
/////////////////////////////////////////////////////////////////////////////
//Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (arg1, arg2) => {
  let remainder = arg1 - arg2;
  return remainder;
};
console.log(subtract(1, 2));
/////////////////////////////////////////////////////////////////////////////
//Make a function multiply that takes two arguments and multiplies them
const multiply = (arg1, arg2) => {
  let product = arg1 * arg2;
  return product;
};
console.log(multiply(1, 2));
/////////////////////////////////////////////////////////////////////////////
//Make a function divide that takes two arguments and divides them
const divide = (arg1, arg2) => {
  let quotient = arg1 / arg2;
  return quotient;
};
console.log(divide(1, 2));
/////////////////////////////////////////////////////////////////////////////
//Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
  let result = operates(num1, num2);
  return result;
};
/////////////////////////////////////////////////////////////////////////////
//Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(3, 4, add));
console.log(calculate(3, 4, subtract));
console.log(calculate(3, 4, multiply));
console.log(calculate(3, 4, divide));
/////////////////////////////////////////////////////////////////////////////
//Function definition placement
/////////////////////////////////////////////////////////////////////////////
//Clean up this code, so that it works and has function definitions in the correct place
const bar = () => {
  console.log("bar here");
};
const foo = () => {
  console.log("foo here");
};
bar();
foo();
/////////////////////////////////////////////////////////////////////////////
//Error reading
/////////////////////////////////////////////////////////////////////////////
/* foo();

const foo ()=>{
    console.log('hi');
} */
//The error means that there is already a foo function
//Since functions need to be unique, rename the new foo function to invoke
//If the initial foo function did not exist, the error would be due to the invoking before declaration
