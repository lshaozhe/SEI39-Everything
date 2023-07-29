// ===============================================================
// Combine Objects, Arrays and Functions
// ===============================================================
const crayonBox = {
  property: ["red", "peach", "green"],
};

console.log(crayonBox.property[0]);

const bottle = {
  property: (cap = {
    material: ["metal", "plastic"],
    colour: ["blue", "white"],
  }),
};

console.log(bottle.property.material[0]);

const receipt = {
  property: (item1 = {
    name: "x",
    price: 1,
  }),
};

console.log(receipt.property.name);

apartmentBuilding = [["x", "y", "z"], 1];

console.log(apartmentBuilding[0][1]);

// ===============================================================
// Combine Objects, Arrays and Functions more than one level deep
// ===============================================================
// Qn 1
function knit() {
  return (obj = {
    item: "scarf",
    size: 6,
  });
}

console.log(knit().item);

// Qn 2
function crayonSelector() {
  return crayonBox;
}

console.log(crayonSelector().property[0]);

// Qn 3
function powerButton() {
  return function options() {
    console.log("select a song");
  };
}

powerButton()();

// ===============================================================
// Model a Vending Machine
// ===============================================================
vendingMachine = {
  snacks: [
    (a = {
      name: "x",
      price: 1,
    }),
    (b = {
      name: "y",
      price: 2,
    }),
    (c = {
      name: "z",
      price: 3,
    }),
  ],
  fn: function vend(arrayPosition) {
    return vendingMachine.snacks[arrayPosition];
  },
};

console.log(vendingMachine.fn(1));

// ===============================================================
// Callbacks
// ===============================================================
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function calculate(num1, num2, operates) {
  return operates(num1, num2);
}

console.log(calculate(1, 2, add));
console.log(calculate(1, 2, subtract));
console.log(calculate(1, 2, multiply));
console.log(calculate(1, 2, divide));

// Function Definition Placement
const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

// Error Reading
foo();

const foo ()=>{
    console.log('hi');
}
// The error reads "missing initializer in const declaration" which means that the equal sign is missing, as the equal
// sign is what initialises variables/functions