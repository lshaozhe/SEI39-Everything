[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Arrays & Conditionals

Using combinations of arrays, loops, and conditionals to solve problems

#### Learning Objectives

- Practice using combinations of arrays, loops, and conditionals to solve problems


#### Prerequisites

- Introductory JavaScript Lesson

---

## Getting Started

- Use or Create the file `arrays_and_conditions.js` to write arrays, loops, `if`, or `if, else` statements to complete the following questions.
- Refer back to your class notes from today if you need help.


## Exercises

### Easy Does It
1. Create an array that contains three quotes and store it in a variable called `quotes`.

### Random
Given the following array `const randomThings = [1, 10, "Hello", true]`

1. how do you access the 1st element in the array?
1. Reassign the value of `"Hello"` to `"World"`.
1. Check the value of the array to make sure it updated the array.

### We've Got Class
Given the following array `const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]`

1. What would you write to access the 3rd element of the array?
1. Change the value of "Github" to "Octocat"
1. Add a new element, "Cloud City" to the array.

### Mix It Up
1. Given the following array `const myArray = [5 ,10 ,500, 20]`
1. Using the `push` method, add the string `"Egon"` to the end of the array.
1. Using a method, remove the string from the end of the array.
1. Using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array
1. Using a different method, remove the string from the beginning of the array
1. Use the reverse method on this array

### Biggie Smalls
Write an `if..else` statement that iterates over the `myArray` array declared above:

1. console.log `little number` if the number is entered is less than **100**
1. If the number entered is 100 or more, alert `big number`.

### Monkey in the Middle
Write an `if...else if...else` statement:

1. console.log `little number` if the number entered is less than **5**.<br>
1.  If the number entered is more than 10, log `big number`.
1. Otherwise, console.log "monkey". <br>

### What's in Your Closet?

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

1. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.

1. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**

1. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.

1. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.

1. In the same way, access one item from Thom's pants array.

1. Access one item from Thom's accessories array.

1. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`

1. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.


### HFM

Write a loop that prints the numbers in order

```js
const twoDArray = [
  [9,8,7],
  [6,5,4],
  [3,2,1],
];
```
expect:
```
1
2
3
4
5
6
7
8
9
```
Try using `for of` loops instead of a regular `for` loop - does it make sense for this task?


### Wildly Ravenous For Even More

##### Spiral Path

Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.  

For example, if

```ruby
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
```

then

```ruby
spiral(array) # => [1,2,3,4,5,6,7,8,9]
```

It should work on any NxM array, so don’t assume the input is a square array.  However, every row will have the same number of elements.

<details><summary> More Test Cases </summary>

```ruby         
a =
  [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]

b = [
      [ 1,  2,  3,  4,  5,  6],
      [18, 19, 20, 21, 22,  7],
      [17, 28, 29, 30, 23,  8],
      [16, 27, 26, 25, 24,  9],
      [15, 14, 13, 12, 11, 10]
    ]

c = [
      [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
      [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
      [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
      [34, 63, 84, 85, 86, 87, 88, 71, 46, 13],
      [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
      [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
      [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
      [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
      [29, 58, 57, 56, 55 ,54, 53, 52, 51, 18],
      [28, 27, 26, 25, 24, 23, 22, 21, 20, 19]
   ]

e = [
      [1,2],
      [4,3]
    ]

f = [
      [1,2,3,4],
      [8,7,6,5]
    ]

g = [
      [1, 2],
      [10,3],
      [9, 4],
      [8, 5],
      [7, 6]
    ]

h = [
      [1,2,3,4]
    ]```

</details>


---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
