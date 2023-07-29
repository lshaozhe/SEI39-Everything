[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Loops

## Write a While loop

### Programming principle: DRY

Don't Repeat Yourself

What if we needed to write a program that counts from `1` up to `1000`? We could set about doing this:

```javascript
console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);
console.log('The number is: ' + 5);
// etc.
```

Are we really going to write `1000` lines of code? Programmers delight when they can work smarter rather than harder. They care about the efficiency of getting their functionality done. They do not want to write `1000` lines of the same thing with minor tweaks. Instead, programmers try to find shortcuts, and luckily, we can use **loops** to perform repetitive tasks.

Here is an example of a **while loop**. We can use `6`-ish lines of code to print `1000` lines of text. This is an application of **DRY.**

```javascript
let num = 1;

while (num <= 1000) {
 console.log('The number is: ' + num);
 num++;
}
```

Making your code **DRY** er, takes practice. Often you'll start by copy-paste and tweak it. Then when you're starting to see the patterns, you can then upgrade your code to something more **DRY** and that's a fine way to do things!

<https://twitter.com/addyosmani/status/314785735171518464>

### Loop Concept

What is a loop? A loop is a process that **repeats**. Along the way, the loop might accumulate or change some values. For example, an analog clock works in a **loop**, and each loop of the minute hand increases the count of the hour-hand by `1`. The hour-hand counts from `1` to `12`, and after `12` loops, it starts counting again from `1`.

![Clock loop](https://media.giphy.com/media/zzDDW60OOPm1y/giphy.gif)

### Loop Syntax - while loop

While loop examples:

```javascript
let num = 1;

while (num <= 1000) {
 console.log('The number is: ' + num);
 num++;
}
```

```javascript
let runProgram = true;

while (runProgram) {
 console.log('program is running');
 runProgram = false;
}
```

pseudo-code

```js
initial condition

while (BOOLEAN EXPRESSION) {
 // run code in block
 change condition
}
```

Let's look at the different parts of the first example:

#### Initial condition

```javascript
let num = 1;
```

Before our while loop we used: `let num = 1;`

All we did was **declare a variable** and give it a value, in this case a **number**.

:::tip
This is to set a **starting condition** for our loop. All we want is for our loop to count, but it needs a place to start counting from.
:::

We could change this to whatever we want:

```javascript
let num = 90;

while (num <= 1000) {
 console.log('The current number is: ' + zum);
 num++;
}
```

#### Boolean Expression

Here's the next part of the first example:

```javascript
while(num <= 1000)
```

In our while loop we used `num <= 1000`. This is a **BOOLEAN EXPRESSION**. Under the hood, it evaluates either to **true** or **false**.

:::info
The loop will run **while** the expression is `true`. As soon as the expression is `false`, the loop will end.
:::

```javascript
while (BOOLEAN_EXPRESSION) {
 // code to repeat
}
```

:::warning
If the expression never became `false`, the loop would never end. This would be an **infinite loop**. You want to avoid infinite loops because they will crash your program.
:::

Let's test out a boolean expression:

```javascript
console.log(1 > 2);
```

This is asking **is 1 greater than 2?**.

> => false

### Code Block

The curly braces denote a **block** of code.

Each loop is taking the code between the curly braces `{ ... }` and running that code multiple times so that we don't have to write it out.

### Changing the value

Let's look at our loop again:

```javascript
let num = 1;

while (num <= 1000) {
 console.log(num);
 num++;
}
```

Now we are able to:

- Declare a variable (we can change the value of `num`)
- Tell our loop to run _while_ a condition is true (we can change the value of the condition)
- Console log the value of `num` each time the loop runs.

All that's left is to automate a change to the value of `num` each time the loop runs.

### We want to change the value of num so that the loop will eventually end

The loop will end when `num <= 1000` is false. Let's increase the value of `num` by `1` each time the loop runs.

#### Postfix operator

The **postfix** operator will increment the value of a variable by `1`, and save the variable with the new value.

If we save a number to a variable:

```javascript
let num = 100;
```

How can we save the value of that variable plus `1`? We can do it this way:

```javascript
num = num + 1;
```

So, the variable equals _itself_ plus one.

:::tip
The **postfix** operator offers a shorthand:

```javascript
num++;
```
:::

There is also a way to decrement a value:

```javascript
num--;
```

is the same as

```javascript
num = num - 1;
```

#### Compound assignment operator `+=`

:::tip
We can also do _exactly the same thing_ with the **compound assignment operator**.
:::

```javascript
num += 1;
```

and decrement:

```javascript
num -= 1;
```

the advantage of the **compound assignment operator** is that we can increment by any value

```javascript
num += 3; //increments by 3
num -= 3; //decrement by 3
```

### Activity

- Write a _while_ loop that counts from `1` to `100`.

#### Extra Activity

- Write another _while_ loop, but write it from from memory. Make the loop count from `0` to `5000` and print the square of each number.
- FIGURE IT OUT: How can you get a `while` loop to count _backwards_? Use the postfix operator `i--` to make a loop count backwards from `1000` to `1`.

## Write a For loop

A _for_ loop does the same thing as a `while` loop, but all the 'baggage' is conveniently compacted into the syntax, leaving less room for infinite loops. We don't have to declare any variables outside of the loop like we had to do with _while_ loops.

:::tip
_For loops_ are what we will use almost all of the time.
:::

### Loop Syntax - for loop

Examples:

_for_ loop that counts from `1` to `1000`:

```javascript
for (let i = 1; i <= 1000; i++) {
  console.log('The number is: ' + i);
}
```

There are three parts to the 'control panel' of the loop, delimited by the semicolon:

```javascript
for (initial condition; while condition; repeating expression) {

}
```

1. some initial code supplied to the loop -- usually a numerical starting value of the loop
2. the condition under which the loop runs -- it will run while the expression is true
3. a repeating expression that runs at the end of each loop -- usually an instruction to increase the numerical starting value

### Code along

Write a _for_ loop that will count from `0` to `99`

```javascript
for (let i = 0; i <= 99; i++) {
  console.log(i);
}
```

### Activity (5 min)

- Write a _for_ loop that counts from `999` to `9999`.

**Bonus:**

- Write a _for loop_ that prints 'This is the song that never ends' to the console `100` times.
- Write a _for loop_ that counts _backwards_ from `1000` to `1`, using the postfix operator `i--`.

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
