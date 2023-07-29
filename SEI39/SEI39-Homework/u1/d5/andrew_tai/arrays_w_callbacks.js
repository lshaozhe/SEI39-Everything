const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// =======================================================================
// Every
// =======================================================================

console.log(nums.every((num) => num >= 0));
console.log(panagram.every((word) => word.length < 8));

// =======================================================================
// Filter
// =======================================================================

console.log(nums.filter((num) => num < 4));
console.log(panagram.filter((word) => word.length % 2 === 0));

// =======================================================================
// Find
// =======================================================================

console.log(nums.find((num) => num % 5 === 0));
console.log(panagram.find((word) => word.length > 5)); // there is no word longer than 5 characters

// =======================================================================
// Find Index
// =======================================================================

console.log(nums.findIndex((num) => num % 3 === 0));

console.log(panagram.findIndex((word) => word.length < 2)); // there is no word shorter than 2 characters

// =======================================================================
// For Each
// =======================================================================

// console.log(nums.forEach((num) => num * 3));
// why v and not ^?
nums.forEach((num) => console.log(num * 3));

// console.log(panagram.forEach((word) => word + "!"));
// why v and not ^?
panagram.forEach((word) => console.log(word + "!"));

// =======================================================================
// Thought Questions
// =======================================================================

// What happened to the original array?
// Nothing happened to the original array. It is still accessible in its original state.

// Can you store the values from a forEach method in a new array?
// Yes, but the new array needs to be manually created and each new value needs to be manually pushed into the new array.

// =======================================================================
// Map
// =======================================================================

console.log(nums.map((num) => num * 100));
// ^ logs the new array but v logs each value
// nums.map((num) => console.log(num * 100));

console.log(panagram.map((word) => word.toUpperCase()));

// =======================================================================
// Thought Questions
// =======================================================================

// What happened to the original array?
// Nothing happened to the original array. It is still accessible in its original state.

// Can you store the values from a map method in a new array?
// Yes, but it is automatically done by the map method.

// =======================================================================
// Some
// =======================================================================

console.log(nums.some((num) => num % 7 === 0));
console.log(panagram.some((word) => word.split("").indexOf("a") > -1));

// =======================================================================
// Reduce
// =======================================================================

console.log(nums.reduce((total, num) => total + num));
console.log(panagram.reduce((concat, word) => (concat += word)));

// =======================================================================
// Thought Questions
// =======================================================================

// What happened to the original array?
// Nothing happened to the original array. It is still accessible in its original state.

// =======================================================================
// isPanagram
// =======================================================================

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

alphabets.forEach((alphabet) => {
  const concatPanagram = panagram.reduce((concat, word) => (concat += word));
  const letterArray = concatPanagram.split("");
  if (!letterArray.some((letter) => alphabet === letter)) {
    console.log(`${alphabet} was not used.`);
  } else {
    console.log(true);
  }
});

// =======================================================================
// Working with data
// =======================================================================

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

// filter for products with a price that is less than 10, using the array below:

console.log(products.filter((item) => item.price < 10));

// sort alphabetically by product name

console.log(
  products.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
);
