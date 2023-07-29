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

// Every

nums.every(function (x) {
  return x >= 0;
});

panagram.every(function (x) {
  return x.split("").length <= 8;
});

// Filter

nums.filter(function (x) {
  return x < 4;
});

panagram.filter(function (x) {
  return x.split("").length % 2 === 0;
});

// Find

nums.find(function (x) {
  return x % 5 === 0;
});

panagram.find(function (x) {
  return x.split("").length > 5;
});

// Find Index

nums.findIndex(function (x) {
  return x % 3 === 0;
});

panagram.findIndex(function (x) {
  return x.split("").length < 2;
});

// For Each
nums.forEach(function (x) {
  console.log(x * 3);
});

panagram.forEach(function (x) {
  console.log(`${x}!`);
});

// Map
const mapNumbers = nums.map(function (x) {
  return x * 100;
});

const mapWords = panagram.map(function (x) {
  return x.toUpperCase();
});

console.log(mapNumbers);
console.log(mapWords);

// Some
nums.some(function (x) {
  return x / 7;
});

panagram.some(function (x) {
  return x.split("").indexOf("a") > -1;
});

// ===============================
// Hungry For More - Reduce + Sort
// ===============================
// Reduce
nums.reduce(function (total, current) {
  return total + current;
});

panagram.reduce(function (total, current) {
  return total + current;
});

// Sort
nums.sort(function (x, y) {
  return x - y;
});
console.log(nums);

nums.sort(function (x, y) {
  return y - x;
});
console.log(nums);

panagram.sort(function (x, y) {
  return x.toLowerCase() > y.toLowerCase() ? 1 : -1;
});
console.log(panagram);

panagram.sort(function (x, y) {
  return x.toLowerCase() < y.toLowerCase() ? 1 : -1;
});
console.log(panagram);

// ===============================
// Hungry For More - isPanagram
// ===============================
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

const alphabet = [
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

// Combines all the letters in the panagram array into 1 long string
const allWordsCombined = panagram.reduce(function (total, current) {
  return total + current;
});

// Testing all 26 letters of the alphabet array using .every and a callback function
alphabet.every(function (x) {
    // split the long panagram string into individual letters, then iterate through each one
  for (item of allWordsCombined.split("")) {
    // test if all 26 letters (regardless of case) of the alphabet are in the long panagram string
    if (x === item) || (x.toUpperCase === item) {
      return true;
    }
  }
});

// ===============================
// Hungry For More - Working with Data
// ===============================
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

//Filter for products with price < 10
console.log(
  products.filter(function (x) {
    return x.price < 10;
  })
);

// Sort alphabetically by product name
console.log(
  products.sort(function (x, y) {
    return x.name.toLowerCase() > y.name.toLowerCase() ? 1 : -1;
  })
);
