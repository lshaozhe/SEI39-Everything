[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to Loops and Conditionals

An introductory lab to loops and conditionals in JavaScript/

#### Learning Objectives

- Practice using conditionals and / or loops to solve problems

#### Prerequisites

- Introductory lesson to JavaScript

---

## Directions
Write loops, `if`, or `if, else` statements to complete the following questions. Some of the problems may require you to use a loop inside the conditional. Refer back to your class notes from today if you need help.

## Conceptual Questions

Rate your understanding of the following questions on a scale of 1 - 5. If your understanding is less than or equal to 3, research the answer or ask for help:

1. How do we assign a value to a variable?
  - Which line(s) is/are valid?

    ```js
    let a = 0;
    const b = 1;
    9 = a;
    b = b + 5;
    ```

2. How do we change the value of a variable?
3. How do we assign an existing variable to a new variable?

## Let's get Mathy!

```js
const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16
```

- Round `a` down
- Round `b` up
- Find the absolute value of `b - a`
- Find the largest number of `a, b, c, d, e`
- Find the smallest number of `a, b, c, d, e`
- Find the square root of `e`
- Raise `e` to the power of `d`
- Make a digital die 0 generate a random number between 1 - 6 

## Strings Activity 1

### Strings - Switcharoo
1. Create a variable called `firstVariable`.
1. assign it the value of a string: `"Hello World"`
1. On the next line, change the value of this variable to a number.
1. store the value of `firstVariable` into a new variable called `secondVariable`
1. On the next line, change the value of `secondVariable` to a string.
1. What is the value of `firstVariable`?

### Strings - Combine it
1. Create a variable called `yourName` and set it equal to your name as a string.
  - Write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it prints a new string with them concatenated

> ex: `Hello, my name is Jean Valjean`

## Booleans Activity
- Using the provided variable definitions, replace the blanks with a mathematical or boolean operator **that evaluates the expression to true**.

[MDN Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

```
  const a = 6;
  const b = 100;
  const c = -5;
  const d = 3000;
  const e = 'Jelly Bean';
```

1. a _ b;
1. c _ d;
1. 'Peanut' _ 'Peanut';
1. a _ b _ c;
1. a _ a _ d;
1. e _ 'Jelly Bean';
1. 48 _ '48';
1. 'e' _ 'Eh'

...


## The Farm

1. Write code that will print out "mooooo" if the variable `animal` is equal to `cow`.
1. Change your code so that if the variable `animal` is anything other than a cow, your should print out "Hey! You're not a cow."

## Driver's Ed

1. Write a variable that will hold a person's age.
1. Write code that will print out "Here are the keys", if the age is 16 years or older.
1. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."

## Just Loop It

1. Write code that will print out all the numbers in the range 0 - 10.
1. Write code that will print out all the numbers in the range  500 - 50.

## Let's get odd

1. Print out the odd numbers that are within the range of 1 - 100.
2. Adjust your code to add a message next to the odd number that says: "is an odd number".

> Example Output:
```
3 is an odd number
5 is an odd number
7 is an odd number
```

## Give me Five
1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.

> Example Output:
```
I found a 5. High five!
I found a 10. High five!
```

2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.

> Example Output:
```
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!
```

**Bonus** : You're close to solving [Project Euler](https://projecteuler.net/problem=1) problem 1! If you didn't get to solve it yet, go for it today!

## Savings account
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.

> Check your work! Your bank_account should have $55 in it.

2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

> Check your work! Your banck_account should have $10,100 in it.


# Optional

## Fibonacci
Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!

Here are some sequences, can you figure out the next number? Can you figure out the pattern so you could write a loop to generate these?:

1, 2, 3, 4

Here is another one:

2, 4, 6, 8

And another:

5, 10, 15, 20

and one more:

2, 4, 8, 16, 32

Fibonacci is just another sequence of numbers.

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:


```
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...


1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
8 + 5 = 13
```

Can you see the pattern?

Think about how you would create that pattern using JavaScript  

Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.  

Fun fact! Fibonacci appears often in nature. [Check it out](xhttp://jwilson.coe.uga.edu/emat6680/parveen/fib_nature.htm)  

Feeling overwhelmed?

- Start with some pseudoecode!
- First just try to console.log the first 10 Fibonacci numbers
- Try thinking of the smallest step, solve it and then find the next step to take

## Checkerboard

Set a checkerboard size to a variable

```js
const boardSize = 8;
```

Now, using what you know about control flow, build a checkerboard

```
 # # # #
# # # #
 # # # #
# # # #
```

You should be able to change the variable `boardSize` and generate a larger or smaller grid

```js
const boardSize = 20;
```

Should now generate:

```
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
```


## Hungry for More?
Sign up for [Project Euler](https://projecteuler.net/problem=1) and start tackling the problems.  

Try out some [Project Euler](https://projecteuler.net/archives) problems. Specifically try out numbers 1 & 2.  

[How about Kaprekars Constant?](https://coderbyte.com/editor/guest:Kaprekars%20Constant:JavaScript)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
