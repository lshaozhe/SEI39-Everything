//Create an object, called crayonBox, that has a property that is an array.
// The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  color: ["Blue", "Red", "Yellow", "Green", "Brown", "Black"],
};

console.log(crayonBox.color[0]);

//Create an object bottle that has a property that is an object: cap.
//cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
// Log one of the properties of that inner object.

const cap = {
  material: ["metal", "plastic"],
  color: ["blue", "white"],
};

console.log(cap.material[0]);

//Create an array called receipt that has at least one object in it.
//The inner objects should be items that have a name and a price.
//Log one of the properties of that inner object.

const receipt = [
  {
    name: "chicken rice",
    price: "$5",
  },
  {
    name: "cake",
    price: "$25",
  },
  {
    name: "fried rice",
    price: "$6",
  },
];
console.log(receipt[0]);

//Create an array called apartmentBuilding that has an array as one of its elements,
//the inner array should be the names of the tenants.
//Log one of the elements of the inner array.

const apartmentBuilding = { tenants: ["Jony", "May", "Tom"] };
console.log(apartmentBuilding.tenants[1]);

//"Combine objects, arrays, and functions"

//Combine objects, arrays, and functions more than one level deep

//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).

function knit() {
  return { item: "scaf", size: "6ft" };
}
console.log(knit().size);

//Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
//Log one of the elements of that array.
function crayonSelector() {
  return { color: ["Blue", "Red", "Yellow", "Green", "Brown", "Black"] };
}
console.log(crayonSelector().color);

//Create a function powerButton that returns a function called options - options should console.log a simple message
// like select a song. Call that inner function

function powerButton() {
  return {
    options: () => {
      console.log("select a song");
    },
  };
}

powerButton().options();
//"Combine objects, arrays, and functions more than one level deep"

//Model a Vending Machine
/*
1. a vending machine is an object
2. it has an array of snacks (make 3 snacks)
3. snacks are objects that have a name and a price
4. a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
5. Be able to call vendingMachine.vend() with a valid integer to return a snack
*/

const vendingMachine = {
  snacks: [
    { name: "Chip", price: "$2" },
    { name: "Kitkat", price: "$1.50" },
    { name: "Cup Noodle", price: "$2.50" },
  ],
};

function vend(input) {
  return vendingMachine.snacks[input];
}
console.log(vend(2));

//Callbacks

//Make a function add that takes two arguments (numbers) and sums them together
function add(a, b) {
  return a + b;
}

//Make a function subtract that takes two arguments (numbers) and subtracts them
function subtract(c, d) {
  return c - d;
}

//Make a function multiply that takes two arguments and multiplies them
function multiply(e, f) {
  return e * f;
}

//Make a function divide that takes two arguments and divides them
function divide(g, h) {
  return g / h;
}

//Make a function calculate that takes three arguments.
// Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

function calculate(num1, num2, operates) {
  return operates(num1, num2);
}

//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
console.log(calculate(1, 2, add));

//Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(1, 2, divide));
console.log(calculate(1, 2, multiply));
console.log(calculate(1, 2, divide));
console.log(calculate(1, 2, subtract));

//Function definition placement

const bar = () => {
  console.log("bar here");
};
bar();

const foo = () => {
  console.log("foo here");
};
foo();

/*Error reading
foo();

const foo ()=>{
    console.log('hi');
}

ans: arrow function have to be declare first before it can excute/call it
*/
