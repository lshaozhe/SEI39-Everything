"use strict"

const crayonBox = {
  color: ['blue', "red", "yellow", "purple"]
};

console.log(crayonBox.color[1]);

const bottle = {
  cap: {
    material: "plastic",
    color: "blue",
  }
};
console.log(bottle.cap.material);

const receipt = [{
  name: "glue",
  price: "10"
}];

console.log(receipt[0].price);

const apartmentBuilding = [
  ["Steve", "Mary", "Bob"]
];

console.log(apartmentBuilding[0][0])

////////////////////
// more than 1 level deep
////////////////////

const knit = () => {
  return {
    item: "scarf",
    size: "6ft",
  }
}

console.log(knit().item)

const crayonSelector = () => {
  return {
    color: ['blue', "red", "yellow", "purple"]
  }
}

console.log(crayonSelector().color[0]);

const powerButton = () => {
  return function options() {
    console.log("select a song")
  }
};

powerButton()();

//////////////
// vending machine
//////////////
const vendingMachine = {
  snacks: [{
    name: "peanut",
    price: '$5'

  }, {
    name: "walnut",
    price: '$10'

  }, {
    name: "almond",
    price: '$15'

  }],
  vend: function (num) {
    return vendingMachine.snacks[num];
  }
};
console.log(vendingMachine.vend(1));

//////////////
// callbacks
//////////////

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const calculate = (num1, num2, operates) => {
  return operates(num1, num2)
};

console.log(calculate(1, 2, divide));
console.log(calculate(1, 2, add));
console.log(calculate(1, 2, subtract));
console.log(calculate(1, 2, multiply));


///////////////
// function definition placement
//////////////

const bar = () => {
  console.log("bar here");
};
bar();


const foo = () => {
  console.log("foo here");
};

foo();

// foo();

// const foo() => {
//   console.log('hi');
// }

// it does not have = operator that assign the function to name foo.