[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Datatypes

### Strings

A string is made up of characters, it is wrapped in quotes or backticks

Here are some examples:

- `"Hello, world"`
- `'Hello, galaxy'`
- \`Hello, universe\`

:::caution

**GOTCHA** - many word applications (including Slack) convert dumb quotes `""` or `''` into smart quotes `“...”` 

JavaScript doesn't recognize smartquotes as valid code

:::

#### Activity

- Console log Hello, World - in the three different ways listed above

### Numbers

Numbers, in JavaScript can be both integers and floating point numbers (numbers with decimals).

- `1` - integer (whole number)
- `1.1` - floating point number (number with a decimal)
- `Infinity` (must be capital I) and `-Infinity`
- `NaN` - not a number a value that arises when one attempts mathematical operations on one or more things that are not numbers

![NaN in Subway](https://i.imgur.com/OeNNYN6.jpg)

#### Activity II

Console log the following:

- `100`
- `1 + 1`

### Variables

A variable can be made up of letters, numbers and some characters (like `_` and `$`). It cannot start with a number. It is capable of holding any kind of data. Variables are case sensitive: blackCat is not the same as backcat or BlackCat or BLACKCAT etc.

It is **NOT** wrapped in quotes - this is how JavaScript distinguishes a string (has quotes) versus a variable (no quotes)

It must be declared using `let` or `const`. You can use `var`, but `var` is an older syntax.

:::info

JavaScript convention for variable names is to use camelCase, this is different from snake case (though languages like ruby and python use this), and sausage-case (or kebab-case) which you'll see in _HTML_

:::

```js
const a = "the letter a";
const bB8 = 8;
const c3po = "cool robot";
```

#### Activity III

Without running the following code, try to determine:

```js
let a = "";
let b = "bongos";
let c = "get your";

a = b;
b = c;
c = a;
```

### Semicolons

¯\\_(ツ)_/¯

:::info
Most of the time, you do not need a semi-colon for JavaScript.
:::

Should you always use a semi-colon? This is hotly debated and will vary depending on your company/team.

Be open minded, try out different styles - but do try to be consistent within a lab/hw/project.

### Concatenating Values

Sometimes (oftentimes), you need to put expressions together.

JavaScript let's us add strings and numbers together with `+`

```javascript
console.log("hello" + " world");
```

> => 'hello world'

We can insert values of variables into our strings:

```javascript
const adjective = "beautiful";

console.log("What a " + adjective + " day!!");
```

> => "What a beautiful day!!"

```javascript
const adjective = "crummy";

console.log("What a " + adjective + " day!!");
```

> => "What a crummy day!!"

### Activity (5 mins)

- Use the `+` operator to **concatenate** these strings together within a `console.log`: `"Please", "squeeze", "the", "cheese"`. Make sure there are spaces in-between each word.

  > => "Please squeeze the cheese"

- Extra

With the variable `const word = 'believe'`, replace the string `"squeeze"` with the `word` variable.

  > => "Please believe the cheese"

- Extra

Output a console log `"The sum of 5 and 10 is 15"` where the values for `5` and `10` are saved to variables, and where `15` comes from those variables being summed.

### Template Literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

They were called "template strings" in prior editions of the ES2015 specification.

```js
const a = 5;
const b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
// "Fifteen is 15 and not 20."
```

Now, with template literals, you are able to make use of the syntactic sugar, making substitutions like this more readable:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."
```

### Booleans & Operators

The values `true` and `false`

Additionally, in the next lesson we'll cover Boolean operators and checks for equivalency  like `||`, `&&`, `===`, `>` etc.

### Null, Undefined

These values mean that the value is not assigned

### Arrays and Objects

Arrays (called lists in other languages) can hold many items  and different types of items - these items can be numbers, strings, variables, and even other arrays!

An array is represented with square brackets `[]` and each item is separated by commas. We'll have an entire lesson dedicated to them!

```js
[1, 2, 3, 4];
```

Objects (sometimes called dictionaries or hashes in other languages) can hold many items, but they have key and value pairs. We'll have an entire lesson dedicated to them!

An object is represented with curly braces `{}` and each key is separated from its value with a `:` and each key value pair is separated by a comma.

```js
{
  school: 'General Assembly',
  class: 'Software Engineering Immersive',
}
```

### typeof

If you need to figure out the type of something you can use `typeof`

Let's try it:

```js
console.log(typeof 1);
console.log(typeof "hello");
console.log(typeof true);
```

### Numeric Separators

Large numeric literals are difficult for the human eye to parse quickly, especially when there are lots of repeating digits:

```js
const x = 1000000000000
const y = 1019436871.42
```

To improve readability, underscores can be used as separators in numeric literals. So, the above can now be rewritten to group the digits per thousand, for example:

```js
const x = 1_000_000_000_000
const y = 1_019_436_871.42
```

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
