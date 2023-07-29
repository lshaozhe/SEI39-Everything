[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Booleans, Conditionals & Loops

## Setup

1. Navigate to your `student_examples` folder for today.
2. Create a file called `loops_and_conditionals.js` for practicing your work.
3. Open this file in your text editor. Add a console.log in your file run the code in your terminal `node loops_and_conditionals.js`.

---

## Lesson Objectives

_After this lesson, students will be able to:_

- Use conditionals and booleans and loops

---

## Loops

Let's make a new file called `loops.js`

Loops allow us to do something repeatedly. We'll use for loops to build out some more control flow examples

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step", step);
}
```

## The Problem

Find the __sum__ of all the __even__ integers between `0` and `10`

## Pseudo Code

Let's start out by pseudo-coding:

:::tip
We should write down what we think we need to do or what the questions is asking us to do in **human language** - not computer language.
:::

## Activity

Take `~ 3 - 5` minutes to write some pseudocode of how we can get the _sum_

- Post your pseudocode in  slack

## Let's Work Through it Together

Note: You may have worked through this in different steps. That's ok! There are many different approaches. The key is to break it down into small steps and test each one.

## Start Small

First we have to _'get'_ the numbers `1` to `10`.
We could `console.log` each one separately:

```javascript
console.log(1);
console.log(2);
//etc.
```

What's another way?

## Loop

```javascript
for (let i = 0; i < 10; i++){
  console.log(i);
}
```

Now we have a way to 'get' the numbers `1` to `10`

## Control Flow

We have to figure out how to determine if one of the numbers is even. This is where *Control Flow* comes in:

We can choose to do something depending on the case.

_For this problem:_

- If it's __even__, let's do something with it...
- If it's __odd__, let's ignore it.

With control flow, you can decide what to do in different instances.

## The Power of If Statements in Control Flow

This is where **if statements** come into play! We can tell our program to do something *if* it meets certain criteria.

```javascript
for (let i = 0; i < 10; i++){
  if (i == 1) {
    console.log("the number is 1")
  }
}
```

Note: You don't always _need_ an `else` statement. If your _else_ statement would just be a comment like:

```js
if (true){
  console.log('awesome');
} else {
  // do nothing
}

```

Then you can omit the `else` statement.

We don't just need the number `1`, we need all the __even__ numbers. How can we check if a number is __even__?

```javascript

for (let i = 0; i < 10; i++){
  if (i % 2 == 0) {
    console.log("the number is even", i)
  }
}
```

Now we need a variable to hold our sum

```javascript
let evenSum = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0 ) {
    evenSum += i;
  }
}
```

**Experiment:** what happens if you set `evenSum` to `undefined` or empty string instead of `0`?

Why? What is going on?

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

