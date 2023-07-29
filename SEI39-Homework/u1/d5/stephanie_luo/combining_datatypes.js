//////////////////////////////////////////////////////////
// == Section 2: Combining Datatypes ==
//////////////////////////////////////////////////////////

//

//========================================================
// == Combine objects, arrays, and functions ==
//========================================================

//========================================================
// Q1 >> Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons.

crayonBox = {
  colorName: ["red", "orange", "yellow", "green", "blue"],
  type: [
    "paraffin wax-based",
    "beeswax",
    "pastel",
    "chalk",
    "conte",
    "charcoal",
  ],
};

// >> log one of the element of that array
console.log(crayonBox.colorName[0]);

//========================================================
// Q2 >> Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.

bottle = {
  cap: { material: "metal or plastic", color: "blue or white" },
};

// >> log one of the properties of that inner object
console.log(bottle.cap.material);

//========================================================
// Q3 >> Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price.

receipt = [
  { item: "shampoo", price: 10 },
  { item: "conditioner", price: 12 },
  { item: "mask", price: 5 },
];

// >> Log one of the properties of that inner object
console.log(receipt[0].item);

//========================================================
// Q4 >> Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants.

apartmentBuilding = [
  "18 storeys",
  "240 units",
  ["John", "Peter", "Mary", "Jane"],
];

// >> Log one of the elements of the inner array
console.log(apartmentBuilding[2][0]);

//========================================================

//========================================================
// == Combine objects, arrays, and functions more than one level deep ==
//========================================================

//========================================================
// Q1 >> Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.

// create function called knit
const knit = () => {
  return {
    item: "scarf",
    size: "6ft",
  };
};

// log a value of obj
console.log(knit().item);

//========================================================
// Q2 >> Create a function crayonSelector that returns an object that has an array

// create function called crayonSelector
const crayonSelector = () => {
  return crayonBox;
};

// log an element from array
console.log(crayonSelector().colorName[0]);

//========================================================
// Q3 >> Create a function powerButton that returns a function called options

const options = () => {
  console.log("select a song");
};
const powerButton = () => {
  return options();
};

powerButton();
//========================================================

//========================================================
// == Model a Vending Machine ==
//========================================================

const vendingMachine = {
  snacks: [
    { snackName: "Doritos", price: 5 },
    { snackName: "Choco Pie", price: 2 },
    { snackName: "M&M", price: 1 },
  ],
};

const vend = (num) => {
  console.log(vendingMachine.snacks[num].snackName);
};

vend(2);

//========================================================
//========================================================
// == Callbacks ==
//========================================================

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const calculate = (num1, num2, operates) => {
  return (operates = (num1, num2));
};

console.log(calculate(8, 2, add));
console.log(calculate(8, 2, substract));
console.log(calculate(8, 2, multiply));
console.log(calculate(8, 2, divide));

//========================================================

//========================================================
// == Function definition placement ==
//========================================================

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

//========================================================

//========================================================
// == Error reading ==
//========================================================

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// Error produced: SyntaxError: Missing initializer in const declaration
// >> It means that a const declaration (in this case foo) was not given a value in the same statement
