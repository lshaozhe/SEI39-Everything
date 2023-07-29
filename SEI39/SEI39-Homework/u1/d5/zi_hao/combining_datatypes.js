// Combine objects, arrays and functions

// 1.
const crayonBox = {
  crayonColours: ["blue", "green", "red", "orange", "yellow"],
  crayonType: "chalk",
};

console.log(crayonBox.crayonColours[1]);

// 2.
const bottle = {
  cap: {
    material: "plastic",
    colour: "blue",
  },
};

console.log(bottle.cap.material);

// 3.
const receipt = [
  { item: "orange", price: "$1.10" },
  { item: "chocolate milk", price: "$2.60" },
];

console.log(receipt[1].price);

// 4.
const apartmentBuilding = [
  ["3-room", "2-room", "3-room"],
  ["John", "Lily", "Joey"],
];

console.log(apartmentBuilding[1][0]);

// Combine objects, arrays and functions
// 1.
const knit = () => {
  const scarf = {
    item: "scarf",
    size: "6ft",
  };
  return scarf.size;
};

console.log(knit());

// 2.
const crayonSelector = () => {
  return crayonBox.crayonColours[2];
};

console.log(crayonSelector());

// 3.

const options = () => {
  console.log("Select a song");
};

const powerButton = () => {
  options();
};

powerButton();

// 4. Model a Vending Machine

// const vendingMachine = {
//     [snacks: {name: "chocolate bar", price: "$1.20"},
//     {name: "potato chips", price: "$2.00"},
//     {name: "cheese biscuits", price: "$2.50"}]
// };

const vendingMachine = {
  snacks: [
    { type: "chocolate bar", price: "$1.80" },
    { type: "potato chips", price: "$2.20" },
    { type: "cheese biscuits", price: "$2.60" },
  ],
  vend: function (a) {
    return vendingMachine.snacks[a];
  },
};

console.log(vendingMachine.vend(1));
// returns 'potato chips' object

// Callbacks
// 1.
const add = (a, b) => {
  return a + b;
};

// 2.
const subtract = (a, b) => {
  return a - b;
};

// 3.
const multiply = (a, b) => {
  return a * b;
};

// 4.
const divide = (a, b) => {
  return a / b;
};

// 5 & 6.
const calculate = (a, b, operates) => {
  return operates(a, b);
};

// 7.
console.log(calculate(1, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(2, 3, multiply));
console.log(calculate(8, 2, divide));

// Function definition placement
const bar = () => {
  console.log("bar here");
};

const foo = () => {
  console.log("foo here");
};

bar();
foo();

// Error reading

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// Missing initializer:
// const requires a value to be declared in the same statement, but
// in this case no value is declared as the "=" sign is missing
// can be fixed by adding an "=" sign between foo and ().

// Cannot access before initialization:
// variable is accessed before it has been initialized (declared)
// can be fixed by invoking foo() after the function declaration, instead of before
