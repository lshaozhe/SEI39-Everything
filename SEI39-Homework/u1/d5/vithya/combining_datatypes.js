/////////////////////////////////////////////////////////////////////////////
// Combine objects, arrays, and functions
// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  colors: ["blue", "green", "red", "orange", "yellow", "pink"],
};

// Log one of the elements of that array.
console.log(crayonBox.colors[2]);

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = { cap: { material: "plastic", color: "red" } };
console.log(bottle.cap.material);

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
const receipt = [{ chocolate: "$2", water: "$1.20", biscuit: "$3.25" }];
console.log(receipt[0].chocolate);

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
const apartmentBuilding = [["John", "Max", "Tim", "Sandy"]];
console.log(apartmentBuilding[0][1]);
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
function knit() {
  return { item: "scarf", size: "6ft", material: "cashmere" };
}
console.log(knit().material);

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
function crayonSelector() {
  return crayonBox;
}
console.log(crayonSelector().colors[3]);

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
function powerButton() {
  return function options() {
    console.log("select a song");
  };
}
powerButton()();
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Model a Vending Machine
const vendingMachine = {
  items: [
    { name: "pringles", price: 3 },
    { name: "noodles", price: 2 },
    { name: "coke", price: 2 },
  ],
  vend: function (selection) {
    console.log(vendingMachine.items[selection].name);
  },
};

vendingMachine.vend(2);
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Callbacks
function add(a, b) {
  let sum = 0;
  sum = a + b;
  return sum;
}

function subtract(c, d) {
  let difference = 0;
  difference = c - d;
  return difference;
}

function multiply(e, f) {
  let product = 0;
  product = e * f;
  return product;
}

function divide(g, h) {
  let quotient = 0;
  quotient = g / h;
  return quotient;
}

function calculate(num1, num2, operates) {
  return operates(num1, num2);
}

console.log(calculate(2, 3, add));
console.log(calculate(6, 2, subtract));
console.log(calculate(10, 4, multiply));
console.log(calculate(8, 4, divide));

// Function definition placement
const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

// Error reading
// foo();

// const foo ()=>{
//     console.log('hi');
// }

// SyntaxError: Missing initializer in const declaration. The value for a const has to be assigned once it is declared. The equal sign after the foo is missing in this code.
// After the first error is solved, the following error: ReferenceError: Cannot access 'foo1' before initialization occurs. This is because the function foo(); is being called before it is declared. To solve this, call the function after declaring it.
/////////////////////////////////////////////////////////////////////////////
