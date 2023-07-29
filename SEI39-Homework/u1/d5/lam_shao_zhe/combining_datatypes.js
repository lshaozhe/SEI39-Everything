const crayonBox = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];
console.log(crayonBox[2]);

const bottle = { cap: "plastic", colour: "blue" };
console.log(bottle.colour);

const receipt = { name: "extreme bottle", cost: "$14.99" };
console.log(receipt.cost);
const apartmentBuilding = { tenantList: ["James", "Adam", "Eve"] };
console.log(apartmentBuilding.tenantList[1]);

//Combine objects, arrays, and functions more than one level deep
const knit = () => {
  const itemProperties = { item: "scarf", size: "6ft" };
  return itemProperties;
};
console.log(knit());

const crayonSelector = () => {
  let i = Math.floor(Math.random() * crayonBox.length);
  return crayonBox[i];
};
console.log(crayonSelector());

const powerButton = () => {
  const options = () => {
    console.log("Select a song.");
  };
  return options;
};
console.log(powerButton()()); //why returned additinal undefined?

//Model a Vending Machine
const vendingMachine = {
  items: [
    { name: "potato chips", price: "$2.99" },
    { name: "protein bar", price: "$1.99" },
    { name: "soda", price: "$0.99" },
  ],
  vend: function (num) {
    //anonymous function
    return this.items[num];
  },
};
console.log(vendingMachine.vend(1));

//Callbacks
const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};
const calculate = (num1, num2, operates) => {
  switch (operates) {
    case add:
      results = add(num1, num2);
      break;
    case subtract:
      results = subtract(num1, num2);
      break;
    case multiply:
      results = multiply(num1, num2);
      break;
    case divide:
      results = divide(num1, num2);
      break;
  }
  return results;
};
console.log(calculate(2, 3, add));
console.log(calculate(2, 3, subtract));
console.log(calculate(2, 3, multiply));
console.log(calculate(2, 3, divide));

//Function definition placement
const bar = () => {
  console.log("bar here");
};
const foo = () => {
  console.log("foo here");
};
bar();
foo();
//invoking arrow functions need to be after declaration, no hoisting
