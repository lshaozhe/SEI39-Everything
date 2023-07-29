[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to JS

## Lesson Objectives

_After this lesson, students will be able to:_

1. Define programming and why we're learning it
1. Read Node error messages
1. Add comments to code
1. Describe the basic data types of JS
1. Assign values to variables
1. Concatenate values
1. Write a While loop
1. Write a For loop

## Define programming and why we're learning it

### What is Programming?

The first few weeks of this course will focus on programming skills. This means learning how to "think like a programmer", and also learning to use tools such as Terminal, VSCode (text editor), Git, etc.

Loosely speaking, learning to "think like a programmer" involves learning:

#### Concepts

* For example, the concept of a "loop", something that repeats.
  * Values might change with successive loops.

#### Syntax

* Precise spelling of variables and inclusion of parentheses, etc.
  * Computers are very literal. They only do exactly what you tell them to.  If you mess something up, they don't try to fix it they'll just let you know something went wrong (hopefully)

#### Logic

* The sequence of execution in a program, line by line.
* Problem-solving. How code interacts with other code and using it to build something more complex

### Why learn programming?

We are making **software**, not regular websites.

The internet has changed a lot from static websites to highly complex apps.

People these days use **apps** (either on mobile or desktop), which are hosted on the internet rather than installed locally. This is the current web paradigm called **software as a service**, _SaaS_.

Software requires internal logic. Programming is the means of supplying internal logic to a program.

### Why JavaScript?

The language we will be learning first is JavaScript. In a way it does not matter which language we learn, because many of the same principles apply across languages.

:::info
JavaScript is the most in-demand language for junior developers, and there's a lot of work available out there for those who know it.  It is also the only language that both browsers and servers understand, making it a great teaching tool.
:::

JavaScript was initially developed in `10` days in the late 1990s by Brendon Eich for the purpose of working the browser. In the last `20-30` years JavaScript has grown in popularity, power and it's become a much more enjoyable language to program in. It has become standardized and is being used as a backend, as one of the languages used in the Internet of Things, and more.

Node is an app (application) that runs on your computer that lets you run JavaScript on your computer, outside of a web browser. We'll be learning more about node throughout the course.

## Console Log

`console.log()` is a function that lets us print things to the screen.

This is one of the most simple things you can do in programming and often the first things you do.

Some other programs might call this `print` or `put`... but in JavaScript it is `console.log`

## Read Node error messages

Let's dive back into programming.

Use the `first_code.js` file from earlier.

Let's make a mistake together

type

```js
console.log('Hello world);
```

:::danger
> oops! what did we do wrong?!
:::

Error messages are good. They are not adversarial! They are there to help you.

:::info
Error messages are **clues** that you learn to read. You should be able to read these clues on your own.
:::

![Error Message](https://i.imgur.com/HjquPtu.png)

The error above is typical. It looks intimidating and weird, but if you pry, you will find valuable clues. For example:

Error messages will tell you a **specific line number** where in the code the error occurred. This tells me the error is on line 1: `first_code.js:1`

Errors will often tell you what **type** of error. `SyntaxError: Unexpected token ILLEGAL`

You have to learn to sort the 'wheat from the chaff' so to speak. This will come with practice.

:::tip
Errors are a **growth opportunity**. When you receive an error, yes it is an obstacle, but with a little patience it will turn you into a more informed, better developer.
:::

## Add comments to code

Providing verbal comments within your code is great way to make your code comprehensible to others

single line comment:

```js
// this is a single line comment
```

multi-line comment:

```js
/*
this is
a multi-line
comment
 */
```

If your file name ends with the correct extension `.js` pressing `command` + `/` will toggle your code to have/remove comments with the correct syntax

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
