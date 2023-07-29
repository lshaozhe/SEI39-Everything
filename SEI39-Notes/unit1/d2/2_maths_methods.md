[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Introduction to Maths Methods

## Learning Objectives

- Be able to explain: what is a method?
- Use a Math method to help solve a problem

### Set Up

- In today's `student_examples` folder, `touch math.js`

### Introduction

Let's say we are designing a web site and we are incorporating a way to donate to charity. Whatever the purchase price, you can give consumers the option to round up their bill to the nearest dollar and take those extra cents and put them towards a worthy cause.

```js
const cartTotal = 16.07;
```

How can we round up?

We could write some logic. However, sometimes there are problems that are so common, that a language like JavaScript has a built in way to solve it.

:::tip
JavaScript has a little 'library' of math functions that we can access by typing `Math` and then a `.` (dot) and then whatever method we want, finally we put the things we want to evaluate inside the parenthesis.
:::

Let's take a quick look at [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and see if we can find a method that suits us.

- `Math.round()` looks like a great contender - let's try it

```js
const cartTotal = 16.07;
const roundedUpCart = Math.round(cartTotal);
console.log(roundedUpCart);

```

Hmmm... that gave us `16`. Let's keep looking

There is a `Math.ceil` method that will always round up

Let's try it

```js
const cartTotal = 16.07;
const roundedUpCart = Math.ceil(cartTotal);
console.log(roundedUpCart);
```

Great! We now have a total of `$17` to charge our customers.

Now, we want to subtract the difference from the original total from the new total and store that

```js
const cartTotal = 16.07;
const roundedUpCart = Math.ceil(cartTotal);
const donation = roundedUpCart - cartTotal;
console.log(donation);
```

Uh oh. We get an unexpected value. Turns out JS is not great with floating point numbers! We'll have to be mindful of this. We can fix this now by using another method `.toFixed`

```js
const cartTotal = 16.07;
const roundedUpCart = Math.ceil(cartTotal);
const donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);
```

There are only a handful of methods we'll find handy for most of our work in this course:

**Most Likely:**

- `Math.ceil()` - always rounds a floating point number up
- `Math.floor()` - always rounds a floating point number down
- `Math.max()` - finds the largest number
- `Math.min()` - finds the smallest number
- `Math.random()` - generates a random number between `0` to `1`
- `Math.round()` - rounds a floating point number up or down, depending if the decimal is greater than or less than `0.5`

**Less Likely:**

- `Math.abs()` - gives us the [absolute value](https://www.mathsisfun.com/numbers/absolute-value.html)
- `Math.PI` - gives us the value of PI
- `Math.sqrt()` - finds the square root of a number
- `Math.pow()` - raises a number to the power

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
