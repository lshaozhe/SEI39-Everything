const crayonBox = {
  crayons: ["blue", "red", "green"],
};
console.log(crayonBox.crayons[0]);

const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};
console.log(bottle.cap.material);

const receipt = [
  { name: "restaurant", price: 100 },
  { name: "groceries", price: 65 },
];
console.log(receipt[0].price);

const apartmentBuilding = [
  ["john", "jane", "mark"],
  ["gym", "pool", "bbq pit"],
];
console.log(apartmentBuilding[0][0]);

// =======================================================================

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
console.log(crayonSelector().crayons[0]);

const powerButton = () => {
  return options();
};

const options = () => {
  console.log("Select a song");
};

powerButton();

// =======================================================================

const vendingMachine = {
  snacks: [
    { name: "Hello Panda", price: 4 },
    { name: "Kinder Bueno", price: 6 },
    { name: "Wang Wang", price: 3 },
  ],
  vend: (num) => {
    console.log(
      `You have chosen ${vendingMachine.snacks[num].name}. Please pay ${vendingMachine.snacks[num].price}.`
    );
  },
};
vendingMachine.vend(1);

// =======================================================================

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
  return operates(num1, num2);
};

console.log(calculate(6, 3, add));
console.log(calculate(6, 3, subtract));
console.log(calculate(6, 3, multiply));
console.log(calculate(6, 3, divide));

// =======================================================================

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

// foo();
// const foo ()=>{
//     console.log('hi');
// }

// throws: Uncaught SyntaxError: Missing initializer in const declaration
// error says that the const declared was not initialised in the same line.
