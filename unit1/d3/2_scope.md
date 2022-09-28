[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Scope

## Lesson objectives

_After this lesson students will be able to:_

1. Define Scope restriction
1. Differentiate between global and local scope
1. Describe how functions can call other functions
1. Use `const` and `let` for block-scoping
1. Use block-scoping with loops
1. Use block-scoping with conditionals
1. Use blocks within blocks
1. Define recursion
1. Define pollution

## Define Scope restriction

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its _scope_, it will not be defined.

In general, you want scope to be restricted. You only want your variables accessible to specific safe zones.

### Example of scope restriction

A variable `num` is defined inside a function.

```javascript
function exampleFunction() {
  const num = 100;
  console.log(num * num);
}

console.log(num);   // num is not available outside the function
```

> ReferenceError: num is not defined

```js
exampleFunction();  // even if you run the function first . . .

console.log(num)    // the scope of num is restricted to the function
```

## Differentiate between Local vs Global Scope

When variables are declared inside a function, they are scoped **locally** to that particular function.

:::note
Variables declared within a function are available within that function and to any sub-functions. The variables are not accessible outside of the function.
:::

When variables are declared outside of any and all functions, the value of the variable is accessible to all other functions (and all functions within those functions), and are scoped **globally**.

* Global scope is the the part of your code _outside_ of any enclosing functions
* Local scope is the parts of your code that are _inside_ functions.

```javascript
const item = 'spicy meatball';

function exampleFunction() {
 console.log(item + " within function");
}

exampleFunction();
```

> => spicy meatball

Everything is defined within a scope. The variable `item` is defined in the **global scope** and is available to all functions and sub-functions.

As a natural consequence of local scope, functions cannot access variables stored in **sibling** functions.

If we make another function:

```javascript
function setItem() {
 const item = 'spicy meatball';
 return item;
}

function getItem() {
 return item;
}

console.log(getItem());
```

> ReferenceError: item is not defined

The `item` variable is not visible inside `getItem`, because it is scoped only to `setItem`.

## Describe how functions can call other functions

Functions can call other functions that reside in an accessible scope.  For example:

```javascript
function returnName() {
  return "Matt"
}

function returnGreeting() {
  return "oh hai, " + returnName()
}
console.log(returnGreeting());
```

Since it is good practice for a function to **do only one thing**, we can have many functions perform different little tasks and call on each other. This is a good strategy for compartmentalizing functionality.

:::tip
A function can take the **return value** of another function and put it to good use.
:::

**Question** if everything has a scope, our functions are declared in a scope. In which scope have we been declaring our functions? (answer: global scope).

Let's build two interacting functions from the ground up, both will be defined in the global scope:

### extra problem

* Write a function `checkSquare` that will return **true** if a number is a **perfect square** (Check if the square root is a whole number).  Hint: use `Math.sqrt()` and (`num % 1 == 0`)
* Write function `checkToLimit` that will loop up to an arbitrary limit brought in as a param (say, `100`), and console log whether each number is a perfect square. Call upon the previously defined `checkSquare` function.

## Use `const` and `let` for block-scoping

**`let`** and **`const`** will scope your variables to the **block** in which they are declared.

Example -- make a block and declare a variable within:

```javascript
{
 const item = 'spicy meatball';
}
```

`item` is available inside the block, but not available outside.

This works:

```javascript
{
 const item = 'spicy meatball';
 console.log(item);
}
```

> => "spicy meatball"

This doesn't:

```javascript
{
 const item = 'spicy meatball';
}

console.log(item);
```

> ReferenceError: item is not defined

**`var`** by contrast will leak out of a block.

```javascript
{
 var item = 'spicy meatball';
}
console.log(item);
```

> => "spicy meatball"

This is not so great. In general, we want to control our scope as tightly as possible. If we don't, we can end up with variable collisions and accidental overwrites. This is why we stick with `let` and `const`.

## Use block-scoping with loops

Using `let` within a `for` loop control panel scopes the variable to the block.

```javascript
for (let i = 0; i < 100; i++) {
  console.log("Inside the block: ", i);
}

console.log("Outside the block: ", i);
```

> Inside the block: 1
>
> Inside the block: 2
>
> etc.
>
> Outside the block: Reference error: i is not defined

### Activity (6 mins)

Write a `for` loop but use **var** instead of **let**.

Verify: is the variable accessible outside the loop after it has run?

Verify: is the variable accessible outside of the loop with **let**?

Verify: What about a **let** variable defined within the block of the loop?

## Use block-scoping with conditionals

Using `let` or `const` within conditional blocks will scope to the block (no surprises there).

```javascript
if (true) {
  const num = 100;
  console.log(num);
}
```

> => 100

```javascript
if (true) {
 const num = 100;
}

console.log(num);
```

> => Reference error: num is not defined

Knowing what we know about block scope, can we write code like this?

```javascript
const age = 21;
let message = "";

if (age < 21) {
  message = "You cannot buy the beer";
} else {
  message = "You can buy the beer";
}

console.log(message);
```

> => You can buy the beer

## Use blocks within blocks

Following the same logic, can we access variables in a block that have been declared in an outside block?

```javascript
const words = "that's a...";
{
  const item = "spicy meatball";
  const start = "mama mia!";
  {
    console.log(start);
    console.log(words);
    console.log(item);
  }
}
```

> => mama mia!
>
> => that's a ...
>
> => spicy meatball

## Block scope flow: outside in

We know if we declare a variable inside a block that it is not accessible at the global level.

If we declare a variable at the global level, is it accessible inside a block?

```javascript
const words = "that's a...";
{
  const item = "spicy meatball";
  console.log(words);
  console.log(item);
}
```

> => that's a...
>
> => spicy meatball

## Define recursion

A function has access to **itself** because it is always declared in a scope accessible to itself.

When a function invokes itself, this is called **recursion**.

```javascript
function func() {
  return func();
};
```

:::warning
This will create a **loop**. This particular loop is **infinite** because it has no **exit condition**.
:::

This function has an exit condition and can safely call itself:

```javascript
function countdown(num) {
  if (num !== 0) {
    console.log(num);
    countdown(num - 1);
  } else {
    return;
  }
};
```

See if you can figure out how it works.

## Define pollution

You do not want your global scope to be **polluted**. There are reason for not polluting your global scope.

* Global variables can be overwritten or misconstrued elsewhere
* Potentially causing unwanted, hard to track bugs
* Namespace
* Memory / garbage collection

<http://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted>

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
