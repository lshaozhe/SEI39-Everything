[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to Control Flow

## Lesson Objectives

_After this lesson, students will be able to:_

- Explain why we would use 'control flow' in our programs
- Use conditionals and booleans
- Write a simple if statement
- Write an if / else statement
- Write a for loop with a conditional inside

## Control Flow

We choose a lot of our actions based on true or false conditions, but most of the time we don't think about it like this.

For example:

- if door is closed is true -> then open door, else just walk through the entryway

 This is how a lot of functionality in computer programs work:

- evaluate a condition
- based on that condition take a set of actions or another

Control Flow is the order in which individual statements or instructions are executed.

Control Flow lets you specify **when** and **which** lines of code get executed

There are three forms of Control Flow:

- **Conditionals** - skip lines of code
- **Loops** - repeat lines of code
- **Functions** - save and later deploy lines of code

Let's start with *conditionals*

---

## Setup

1. Navigate to your `student_examples` folder for **today**
2. Create a file called `conditional_practice.js` in the `student_examples` folder to test your code.
3. Open your `conditional_practice.js` file in your text editor.

## Conditionals

We can set up a branching tree-like structure and control the flow of our code. Though, our code will look less like a tree and more like:

```js
if (BOOLEAN EXPRESSION){
  // run this code
}
```

If the boolean expression within our condition is `true`, a branch will execute. If it is `false`, it will not execute. This is an example of `control flow`.

![control flow wd40](https://i.imgur.com/v4W1xwD.png)

---

Let's say you love M&Ms, but you hate the green ones. You might do the following

- Choose an M&M from the bag
- `if` color equals `green` is `true` hurl it across the room
- `else` eat the M&M

If we were to code it, we might write

```js
// chose an M&M
let isMMColorGreen = true;

// Decide what to do based on M&M color
if (isMMColorGreen) {
  console.log("Eiw! I am hurling this gross green M&M across the room.");
} else {
  console.log("Yum! M&Ms are so tasty!");
}
```

Remember: In your terminal, run the command `node conditional_practice.js` to run the code that is inside your file.

Let's do one more.

Let's say we want to do something fun tonight

`If` there is a party let's go to it.
`Else if` we have coupon for glow in the dark mini golf let's do that.
`Else if` there is a sale at the mall, let's go there.
`Else`, let's bake some Speculoos cookies

```js
const isPartyTonight = false;
const miniGolfCoupon = false;
const saleAtTheMall = false;

if (isPartyTonight) {
  console.log("I am going to party like it is 1999");
} else if (miniGolfCoupon) {
  console.log("Hole in one! Woo!");
} else if (saleAtTheMall) {
  console.log("When you buy more, you save more!");
} else {
  console.log("I love cooking cookies");
}
```

Let's run that.

Now let's update each Boolean starting with `saleAtTheMall`

```js
const saleAtTheMall = true;
```

What happens? What do we end up doing tonight?

Now let's update `miniGolfCoupon`

```js
const miniGolfCoupon = true;
const saleAtTheMall = true;
```

:::note
What happens?

Do we go to mini golf and the mall?

Do we go to the mall or mini golf?

Why?
:::

Finally:

```js
const isPartyTonight = true;
const miniGolfCoupon = true;
const saleAtTheMall = true;
```

What do we end up doing tonight?

### Explain what is happening in the following code

- first, walk through it and guess what should happen
- run the code
- is it what you expected?
- how can we change this code to run as expected?

```js
const mmColor = "blue";

if ((mmColor = "green")) {
  console.log("Eiw! I am hurling this gross green M&M across the room.");
} else {
  console.log("Yum! M&Ms are so tasty!");
}
```

## Modulo

### Modulus as conditionals

The **modulo** operator (also referred to as modulus) is represented as a `%` in JavaScript. 

:::note
The Modulo returns the remainder of Euclidean division (Don't worry! It's not as scary as it sounds! Let's investigate together!)
:::

#### Examples

- `4 % 2 // => 0`
- `5 % 2 // => 1`
- `8 % 3 // => 2`

 In this course, our typical use case for the modulo operator is to determine if a number is __evenly divisible__ by another, so don't worry if you don't fully understand what `26 % 7` should return.

Check for even numbers:

```js
if (5 % 2 === 0) {
  console.log("number is even");
}
```

Check for odd numbers:

```js
if (5 % 2 !== 0) {
  console.log("number is odd");
}
```

Check for numbers divisible by `7`:

```js
if (49 % 7 === 0) {
  console.log("number is divisible by 7");
}
```

**Let's add an `else` to our `if` statement**

### If / else with Modulus

```js
if (5 % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
```

### Further Reading

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
