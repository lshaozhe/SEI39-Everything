[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Arrays & Array Iteration

## Lesson Objectives

- Describe what is an array
- Declare an empty array
- Access array elements
- Learn about array method `.length`
- Change and element in an array
- Use expressions to access elements
- Use `Math.` methods to get integers for accessing array elements
- Access each element of an array with a loop
- Use arrays inside conditional statements
- Use expressions with the square brackets to access elements
- Access elements in a multi-dimensional array

## Setup

1. Navigate to the `student_examples` folder for today.
2. Create a file called `array_practice.js` to use for practice code.
3. Open it in your text editor. Add a console log and run your code to confirm that you can see the output in your terminal.

---

## What is an Array?

- An array is a data structure and like a number or string, you can assign an array to a variable.

- An array is a list. All list items go between square brackets:

- Declare an empty array
  - `const arr = []`
- Console.log it:
  - `console.log(arr)`
  - Arrays contain `elements` separated by commas `,`
  - `Elements` can be any datatype (string, number, Boolean, another array...)
    - Usually all elements in an array are of the same datatype

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### You Do :computer:

- Make another array `faveFoods` that contains a list of your top three favorite foods
- Console.log the array of your favorite foods

:::caution
**GOTCHA:** make sure your favorite foods are all strings (surrounded by quotes)
:::

How could you `console.log` just one :one: food?

---

### Accessing Elements

Each element in the array has a numbered `index`. The first element has an index of `0`.

- Access elements by putting the `index number` in square brackets.

Access the first element in an array:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

console.log(satchel[0]) // => 'chair'
```

Access the second element in an array:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

console.log(satchel[1]) // => 'table'
```

---

### Using expressions to access elements

We can put an `expression` between the square brackets to access array elements.

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

satchel[2 * 2 + 1] // => 'rupees'
```

### Using Variables to Access Elements in an Array

We can also use variables in our square brackets, as long as the variable references a whole number:

```js
const index = 2

console.log(satchel[index]) // => 'table'
```

---

## Array Method: `.length`

Methods are functions that are built into JavaScript that can be used on certain data types. We're going to be looking at an **array method** that will help us with iterating through an array.

We can use the `.length` method to find out the number of elements in an array

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

console.log(satchel.length); // => 8
```

### You Do

```js
const drSeussBooks = [
  "Cat in the Hat",
  "Green Eggs and Ham",
  "Grinch",
  "Thing One",
  "Thing Two",
  "Cindy Loo Who",
  "JoJo McDodd",
];
```

- `console.log` the first element in the array
- make a variable called `third` and set it to the correct index position
- `console.log` the third element in the array by using the variable `third`
- `console.log` the last element in the array

### Getting the Last Element

Length gives us the number `8`: But is there an element in the `satchel` array with index position `8`? What happens if we try to console log `satchel[8]`?

How can we get the last element of an array?

```js
console.log(satchel[8])

const lastItem = satchel.length - 1
console.log(satchel[lastItem])
```

Can we do

```js
console.log(satchel[satchel.length -1])
```

Let's find out!

### Changing Elements

- To change an element in an array, first access the element, and then assign a new value:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

satchel[2] = 'glowing orb'

console.log(satchel)
```

---

### You Do II :computer:

- With the following array:

```js
const drSeussBooks = [
  "Cat in the Hat",
  "Green Eggs and Ham",
  "Grinch",
  "Thing One",
  "Thing Two",
  "Cindy Loo Who",
  "JoJo McDodd",
];
```

- Change the fifth element of the array to `null`, and console.log the array to confirm

### FIGURE IT OUT

```js
const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

- Change the first element of the array to equal **itself** times ten using the compound operator `*=`

- Why wouldn't `squares[0 * 10]` work for this purpose?

### Finding the Middle Value

In an array with an **even** number of elements, we could find the element that comes right after the middle:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];


satchel[satchel.length / 2] // => 'magnifying glass'
```

### Getting Mathy with Arrays

What if we wanted the middle element from an array with an odd length?

```js
const shortArray = ['first', 'middle', 'last']
```

Our array has a length of `3`, `3 / 2 = 1.5`

We can't have an element at a position of `1.5`! Only integers are allowed.

:::note
How can we round up or round down?

We'll have to reach for some built in JavaScript methods!
:::

We have 3 `Math` methods that could be helpful to us

`Math.ceil()` - this method will always round up (ceil is short for ceiling)

```js
shortArray[Math.ceil(shortArray.length / 2)]
```

That gave us the last element. Let's try another method

`Math.round()` - this will round up or down to the nearest integer

Let's try it

```js
shortArray[Math.round(shortArray.length / 2)]
```

Ok! That rounded it up! We really need to be able to round down

Let's try one more method

`Math.floor()` - this one always rounds down

```js
shortArray[Math.floor(shortArray.length / 2)]
```

Excellent! We did it!

[A list of all the math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

## LOOPS: Iterate over an array

Let's use a `for` loop to iterate over all of the items in an array and print them out.

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];
```

We know that to access an item in the array, we have to use the name of the array and square brackets with the index number. To access the first item in the array `satchel`, we would write:

```js
satchel[0]
```

If we want to print out all of the items, we can make a `for` loop which will increase that index number for us programmatically:

```js
for (let i = 0; i < satchel.length; i++) {
  console.log('A nimble rogue is trying to steal my: ' + satchel[i] + '!!!')
}
```

>Output:

```bash
A nimble rogue is trying to steal my: chair!!!
A nimble rogue is trying to steal my: table!!!
A nimble rogue is trying to steal my: candle!!!
A nimble rogue is trying to steal my: map!!!
A nimble rogue is trying to steal my: magnifying glass!!!
A nimble rogue is trying to steal my: rupees!!!
A nimble rogue is trying to steal my: Pepto Bismol!!!
```

What if I only want to print *every other* element? There are a few ways to do this, but let's focus on adjusting the incrementation in our control panel.

```js
for (let i = 0; i < satchel.length; i += 2) {
  console.log('A nimble rogue is trying to steal my: ' + satchel[i] + '!!!')
}
```

Note: In the 3rd section of our `for` loop control panel, we are reassigning the variable `i` and increasing it's value by *2* each time.

>Output:

```bash
A nimble rogue is trying to steal my: chair!!!
A nimble rogue is trying to steal my: candle!!!
A nimble rogue is trying to steal my: magnifying glass!!!
A nimble rogue is trying to steal my: Pepto Bismol!!!
```

Only the items with the index `0`, `2`, `4`, and `6` were printed

### Let's Investigate :computer:

With the following array:

```js
const drSeussBooks = [
  "Cat in the Hat",
  "Green Eggs and Ham",
  "Grinch",
  "Thing One",
  "Thing Two",
  "Cindy Loo Who",
  "JoJo McDodd",
];
```

- Console.log all of the elements in the array
- Console.log the odd numbered index items in the array
*- Console.log the index number and the item of every odd numbered index items (on separate lines)

---

## Using conditionals to select elements in array

We can use **conditionals** to select elements an array.

- Let's start with the condition of the index number. If we want to print the items in the array, but only if the index number is even:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

for (let i = 0; i < satchel.length; i++) {
  if (i % 2 === 0) {
    console.log('A lovely fairy has enchanted my', satchel[i])
  }
}
```

- We used a modulus `%` to see that the remainder of an index divided by `2` would return `0` (meaning that it's an even number).

>Output:

```bash
A lovely fairy has enchanted my chair
A lovely fairy has enchanted my candle
A lovely fairy has enchanted my magnifying glass
A lovely fairy has enchanted my Pepto Bismol
```

- We can add **multiple conditions** to select array elements.

- If we want to print the items in the array, but only if the index number is even **OR 5**:

```js
const satchel = [
  "chair",
  "table",
  "candle",
  "map",
  "magnifying glass",
  "rupees",
  "Pepto Bismol",
  "boomerang",
];

for (let i = 0; i < satchel.length; i++) {
  if ((i === 5) || (i % 2 === 0)) {
    console.log('A sneaky elf has set fire to my '  + satchel[i])
  }
}
```

- We used the or operator `||` to set an **or** condition.

>Output:

```bash
A sneaky elf has set fire to my candle
A sneaky elf has set fire to my magnifying glass
A sneaky elf has set fire to my rupees
A sneaky elf has set fire to my Pepto Bismol
```

- If we want to print the items in the array, but only if the index number is divisible by `2` AND `3` (do not use `% 6`, make the right 'conditions') :

```js
// log the element index that is divisible by 2 and 3
for (let i = 0 ; i < satchel.length; i++){
  if ( i % 2 === 0 && i % 3 === 0 ){
    console.log('I have discovered a mysterious engraving on my ' + satchel[i])
  }
}
```

```bash
I have discovered a mysterious engraving on my chair
I have discovered a mysterious engraving on my Pepto Bismol
```

### Let's Investigate II :computer:

With the following array:

```js
const drSeussBooks = [
  "Cat in the Hat",
  "Green Eggs and Ham",
  "Grinch",
  "Thing One",
  "Thing Two",
  "Cindy Loo Who",
  "JoJo McDodd",
];
```

- Console.log the even numbered items in the array using a conditional statement.
- Console.log the even numbered items in the array and the item with the index of 3 using a conditional statement.
- Console.log the odd numbered index items in the array using a conditional statement.

### FIGURE IT OUT - Bonus! Only if we're way ahead of schedule**

- When querying the array, put an expression between your square brackets that accesses a _random_ element of the array

---

### Multi-dimensional Arrays

Array elements can be can be other arrays.

```js
const pairs = [
  ["Harold", "Kumar"],
  ["Laurel", "Hardy"],
];
```

The `pairs` array has `2` elements. Use `pairs.length` to verify.

- The element at `0` is `['Harold', 'Kumar']`
- The element at `1` is `['Laurel', 'Hardy']`

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Laurel` from the pairs array:

```js
pairs[1][0]
```

Changing elements in a multi-dimensional array is the same process as with a regular array

```js
const pairs = [
  ["Harold", "Kumar"],
  ["Laurel", "Hardy"],
];

pairs[0][1] = 'Maude'

```

- multi-dimensional arrays are useful for nested information and grid layout
- `9`x`9` grid:

```js
const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
```

**Bonus:**

```js
const confectioneries = [
  ["Pecan Snickers", "Dude, Sweet Chocolate Salami"],
  [
    "Lindt truffles",
    "Easter egg",
    ["kitkat bar 1", "kitkat bar 2", "kitkat bar 3", "kitkat bar 4"],
  ],
];

```

How would you access `kitkat bar 3`?

### Hungry for More?

Want to take on some bigger array challenges, sign up for a LeetCode account and check these out:

- <https://leetcode.com/problems/degree-of-an-array/description>
- <https://leetcode.com/problems/max-area-of-island/description>
- <https://leetcode.com/problems/non-decreasing-array/description>

Or, continue solving the Project Euler problems: <https://projecteuler.net/archives>

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
