"use strict";

//////////////////
// Combine objects, arrays, and functions
//////////////////
const crayonBox = {
  colour: ["black", "green", "bliue", "white"],
};

console.log(crayonBox.colour[0]);

const bottle = {
  cap: {
    material: ["metal", "plastic"],
    colour: ["blue", "white"],
  },
};

console.log(bottle.cap.colour[0]);

receipt = [
  { item: "chicken rice", price: 5 },
  { item: "egg", price: 1 },
  { item: "soup", price: 3 },
];

console.log(receipt[0].item);

apartmentBuilding = [
  "Flamethrower Condo",
  "18 Java Road",
  ["Ali", "John", "Tim", "Sam"],
];

console.log(apartmentBuilding[2][0]);

///////////////////////////////
// Combine objects, arrays, and functions more than one level deep
//////////////////////////////

const knit = () => {
  return {
    item: "scarf",
    size: "6ft",
  };
};

console.log(knit().item);

const crayonSelector = () => {
  return crayonBox;
};

console.log(crayonSelector().colorName[0]);

const options = () => {
  console.log("select a song");
};
const powerButton = () => {
  return options();
};

powerButton();

const vendingMachine = {
  snacks: [
    { snackName: "Snickers", price: 5 },
    { snackName: "Mentos", price: 2 },
    { snackName: "Mars", price: 4 },
  ],
};

const vend = (num) => {
  console.log(vendingMachine.snacks[num].snackName);
};

vend(2);

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

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();
