[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to Booleans and Control Flow

## Lesson Objectives

- Explain what is a Boolean
- Explain what logic is and how we use it in programming
- Use Boolean expressions to evaluate expressions to be true or false
- Explain what truthiness/falsiness is in JavaScript

### Boolean

A Boolean is a system of logical thought developed by the English mathematician George Boole.

:::info
Boolean expressions evaluate to `true` or `false`
:::

We will use a number of operators to determine whether a condition is `true` or `false`. A lot of these operators are common across many computing languages, but JavaScript has some specific syntax differences to keep an eye out for

### Equality

- `=`
  - assigns a value to a variable `const a = 1`  
  - does not check for equality
- `==`
  - checks for equality, but in _JS_ it is less strict (we'll look at some examples below)
- `===`
  - checks for equality more strictly
- `<`
  - checks whether a value is less than another
- `<=`
  - checks whether a value is less than or equal to another
- `>`
  - checks whether a value is greater than another
- `>=`
  - checks whether a value is greater than or equal to another
- `!=`
  - checks whether a value is *NOT* equal to another (this character is also referred to as a `bang`)
- `!==`
  - checks whether a value is *NOT* strictly equal to another (this character is also referred to as a `bang`)

Generally, it is best to use **strict equality** unless you have a reason to not use it. It is more likely that you will get some unexpected results with using two equal signs.

We're web developers now! If the internet doesn't work we don't have jobs! So [don't memorize - just look it up: here is the table comparing and contrasting results of](https://dorey.github.io/JavaScript-Equality-Table/) `==`, `===` and `if()` (use tabs along the top)

## Let's code

### Setup

1. Navigate to your `student_examples` folder for **today**
2. Create a file called `boolean_practice.js` in the `student_examples` folder to test your code.
3. Open your `boolean_practice.js` file in your text editor.

:::tip
**Remember** you can use the `tab` key to autocomplete the file name and you can use the `up` arrow :arrow_up: to rerun a previous command
:::

- Check whether a password matches

```js
const password = "p1234";

console.log(password === "p1234");
```

- Check whether this is the hundredth sale!

```js
const sale = "100";

console.log(sale == 100);

console.log(sale === 100);
```

- Check whether a user is under the age of `13` (so we can block them from seeing content rated greater than pg-13)

```js
const userAge = 11;

console.log(13 <= userAge);
```

- Check whether a user has over `$50` worth of products in her cart for free shipping

```js
const shoppingCartTotal = 111;

console.log(50 > shoppingCartTotal);
```

- Check whether the old password is not equal to the new password

```js
const oldPassword = "p1234";
const newPassword = "password1234";

console.log(oldPassword !== newPassword);
```

### Let's experiment

The best way to learn is just to try things out. Take 5 minutes to test these values out:

1. Is the number `1` equivalent to the number `1`?

1. Is the string `"beans"` equivalent to the string `"Beans"`?

1. Is `(5 + 5 * 3)` equivalent to `((5 + 5) * 3)`?

1. Is `9` strictly unequal to `false`?

1. Is `"A"` greater than `"a"`

1. is `'Burger King'` greater than `'McDonalds'`?

1. Is `NaN` equivalent to `NaN`?

1. Test out any other values you are curious about - find an interesting one? Share it with the class.

<details>
<summary>hint for 7</summary>

if you attempt to subtract `5` from `'cats'`

you'll get `NaN`

if you attempt to divide `2` from `'dogs'`

you'll get `NaN`

:::caution
These values are both _not numbers_ and there is no way to evaluate whether they are equal to each other not. JavaScript can only determine that they are both not numbers.
:::

</details>

### Logical Operators

Conditions can be more complex than just one thing.

Perhaps in order to send a notification about an upcoming concert the person needs to be a fan of the artist **AND** live in the same state as the venue.

:::caution
In this case **BOTH** conditions must be true for the expression to be true
:::

We can express `and` using `&&` (ampersand)

```js
const fanOfCher = true;
const livesInNY = true;

console.log(fanOfCher && livesInNY);
```

A user could be looking for a new jacket that is either black OR blue.

We can express `or` using `||` (pipe - shares the key with the backslash - the backslash `\` is above the enter/return key. The forward slash or slash `/` is below the return key and shares it with the `?`)

:::caution
In this case the expression will be true if both values are true or if one value is true. It will only be false if both values are false
:::

```js
const jacket = "blue";
console.log(jacket === "blue" || jacket === "black");
```

### Truthiness

:::info
**All** values in JavaScript have an implicit 'truthiness'. They can be evaluated as either `true` or `false`. In effect, every value in Javascript is converted into a Boolean when it is checked as an expression of truth.
:::

#### All of the following become false when converted to a Boolean

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

[Here is a great table for equality, strict `equality` and `if statements`](https://dorey.github.io/JavaScript-Equality-Table/)

##### All other values are implicitly true

You can check a value's truthiness using a built in function called `Boolean`

```js
console.log(Boolean(1));
```

or by using two `!!`

```js
console.log(!!1);
```

### Toggling True/False

Just as a light switch needs to be able to repeatedly turned on and off to be useful, there are values within a program that need to switched.

Another use case for toggling would be determining whose turn it is in a game. Let's say you are playing a game of chess against a computer

```js
// start with the player's turn
let playerTurn = true;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);

playerTurn = !playerTurn;

console.log("Is it the player's turn? ", playerTurn);
```

**Look at that!** :eyes:

You can reassign values with a variable's own value (a little bit of a brain bender)!

### Extra

#### Boolean order of evaluation

:::warning
Order of evaluation matters! When you have a complex statement, be sure to remember the order things will be evaluated
:::

1. `>, <, >=, <=`
2. `==, ===`
3. `&&`
4. `||`

[Don't memorize, just look it up when needed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

Try to guess the result before you check it. If it is not what you expected, try to find out why not

- Check: `!false && true`
- Check: `false || true`

```js
const a = true;
const b = false;
```

- Check: `a && a == b`
- Check: `!true || !false && !false`
- Check: `8 > 1 && true || false`

#### Short Circuiting - we can use the `or` operator to return a valid value to use as a default

```js
const username = "";

const user = username || "Bob Bobby Bob";

console.log(user);
```

#### Another alternative - Nullish coalescing operator (??)

```js
const username = "";

const user = username ?? "Bob Bobby Bob";

console.log(user);
```

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
