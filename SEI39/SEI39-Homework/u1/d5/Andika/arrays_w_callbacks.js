"use strict";

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

//////////////////////
// Every
//////////////////////

console.log(nums.every((num) => {
  return num >= 0;
}));

console.log(panagram.every((word) => {
  return word.length < 8;
}));

//////////////////////
// filter
//////////////////////

console.log(nums.filter((num) => {
  return num < 4;
}));

console.log(panagram.filter((word) => {
  return word.length % 2 === 0;
}));

//////////////////////
// find
//////////////////////
console.log(nums.find((num) => {
  return num % 5 === 0;
}));

console.log(panagram.find((word) => {
  return word.length > 5;
}));

//////////////////////
// find index
//////////////////////

console.log(nums.findIndex((num) => {
  return num % 3 === 0;
}));

console.log(panagram.findIndex((word) => {
  return word.length < 2;
}));

//////////////////////
// for each
//////////////////////

nums.forEach((num) => {
  console.log(num * 3);
});

panagram.forEach((word) => {
  console.log(word + "!");
})

//////////////////////
// map
//////////////////////

const newNumArr = nums.map((num) => {
  return num * 100;
});

console.log(newNumArr);

const newStrArrUppercase = panagram.map((word) => {
  return word.toUpperCase();
});

console.log(newStrArrUppercase);

//////////////////////
// some
//////////////////////

console.log(nums.some((num) => {
  return num % 7 === 0;
}));

console.log(panagram.some((word) => {
  return word.includes('a');
}));

//////////////////////
// reduce
//////////////////////

const getSum = (total, num) => {
  return total + num;
}

console.log(nums.reduce(getSum));

console.log(panagram.reduce((sentence, word) => {
  return sentence + word;
}))
// does not change the original array

//////////////////////
// sort
//////////////////////

console.log(nums.sort());
console.log(panagram.sort());
console.log(nums.sort((a, b) => {
  return a - b;
}));

console.log(nums.sort((a, b) => {
  return b - a;
}));

console.log(panagram.sort());

console.log(panagram.reverse());

// change the original array

//////////////////////
// isPanagram
//////////////////////
var alphabet = "abcdefghijklmnopqrstuvw".split('');
console.log(alphabet);

const alphaChecker = (alphabet) => {
  for (const char of alphabet) {
    let finding = panagram.some((word) => {
      return word.includes(char);
    });
    if (finding) {
      console.log(`panagram has ${char}"`)
    } else {
      console.log(`panagram does not have ${char}`)
    }
  }
}

alphaChecker(alphabet);

//////////////////////
// working with data
//////////////////////
const products = [{
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

let priceFilterArr = [];

priceFilterArr = products.filter((item) => {
  return item.price < 10;
});

console.log(priceFilterArr);

console.log(products.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}));