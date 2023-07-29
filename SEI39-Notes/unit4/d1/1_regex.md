[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Introduction to Regular Expressions

![](https://imgur.com/CmTKR8L.png)

"Some people, when confronted with a problem, think 'I know, I'll use regular expressions.' Now they have two problems." - Jamie Zawinski

"Regular expressions are both terribly awkward and extremely useful. Their syntax is cryptic..." - Marijn Haverbeke

A Regular Expression is just a fancy term for **matching patterns** in strings.

Early in your coding journey, you likely encountered a problem to write a function that returns true if a word contains a vowel, and false if it does not. When you try to find words with a vowel, you are trying to **match** a **pattern**: words with vowels.

It is likely that you had a solution where you looped over your word and checked each letter to see if there was a match. Probably some variation of this:

*If you'd like to code along `cd w06d04`, `cd morning_exercise` and `atom regular-expressions.js`.*

```js
const patternMatch = (word) => {
  letterArray = word.split("");
  for (const l of letterArray) {
    if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
      return true;
    }
  }
  return false;
};

// Try these examples:
// Note: we'll use these over and over again
// So don't delete them

console.log(patternMatch("hello.")); // true
console.log(patternMatch(".hi")); // true
console.log(patternMatch("?howdy")); // true
console.log(patternMatch("aloha")); // true
console.log(patternMatch("pfft")); // false
```

It's kind of hard to figure out which true or false belongs to which word, let's add a little more code to our function

```js
const patternMatch = (word) => {
  letterArray = word.split("");
  for (l of letterArray) {
    if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
      return `${word}: true`;
    }
  }
  return `${word}: false`;
};
```

Expected Output:

```js
"hello: true"
"hi: true"
"howdy: true"
"aloha: true"
"pffft: false" 
```

This s a pretty academic question, and no clear real-world use-case easily comes to mind for checking for just words with vowels.

However, there are many real-world use cases for pattern matching:

- checking for a valid email address
  - valid letters/characters followed by
  - `@` then
  - some more valid letters/characters followed by
  - `.` and
  - the final bit of valid letters/characters
- checking for a valid password
  - Here is a fine specimen of requirements
 ![ridiculous password requirements](https://kottke.org/plus/misc/images/password-req.gif)
  [courtesy of Kottke.org](https://kottke.org/12/06/the-worlds-worst-password-requirements-list)
- finding valid phone numbers in a document
  - 867-5309
  - 555 - 867 -5309
  - 5558675309
  - +1 (555)-867-5309
  - etc.
- using a search bar to find something on a web page
- the find and replace feature in atom or another text editor

Take ~1 minute to start thinking about pseudo-coding any of the above examples. The complexity should have escalated quickly compared to just finding a vowel.

If your mind went to 'hey these are such common problems, let me just google for an answer', you likely encountered something like this for email validation:

```js
/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
```

or maybe this one

```js
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

[both examples from here](http://emailregex.com/)

And you might have thought, 'what is this awkward cryptic stuff?'

Those letters and symbols are Regular Expressions or `regex` or `regexp`

Many coding languages have regular expressions, including: JavaScript, Ruby, Python, PHP, HMTL5 and even in a much more limited way, [CSS](https://www.w3schools.com/cssref/sel_attr_begin.asp).

In JavaScript, regular expressions are objects that contain methods. They both have algorithms for searching for patterns built in, you just have to code the pattern you are looking for.

Patterns can be very simple( like looking for a vowel), or much more complex(see above email validation examples). A lot of the complexity can be just to deal with edge cases or allowing for flexibility (the password can start with this OR that...)

## Writing our First Regular Expression

Let's revisit our example of searching for the words with vowels. We can rewrite our code to use regular expressions. First, let's just check if it has the letter `a` in it.

A regular expression (in both JavaScript and HTML) starts with a forward slash `/` (the one shared with the question mark `?`, not the one above the enter key that is shared with pipe `|` - that one is a _back slash_ `\`) and then also ends with a forward slash

It's really important to distinguish forward and back slashes with regular expressions as they are both required in many/most cases to build out a regular expression.

Forward : `/`

Back    : `\`

![thanks Dana!](https://i.imgur.com/gh9GAAm.jpg)

So our regular expression to check for a vowel in a word will be `/a/`

Let's see it in action by refactoring our code

```js
const patternMatch = (word) => {
  const regexp = /a/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
};
```

What's happening?

- we are setting a variable, `regexp` to a `regular expression` - the variable name can be anything, like `foo`, `bar`, `baz`, `batman` etc. What makes it a regular expression are the two forward slashes: `//`
- we are then using a JavaScript method `match` that looks for Regular Expression matches
- this method returns an array containing all of the matches, including capturing groups, or null if no match is found.
- In JavaScript, there are a few methods for regular expressions. For this lesson, we'll just use `.match`

### Test for Multiple letters

Now, let's say we want to also test for the other letters

```js
const patternMatch = (word) => {
  const regexp = /aeiou/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
};
```

All our test cases come out false.

The way we wrote our regular expression, it is looking for the pattern `aeiou`, rather than `a` or `e` or `i` or `o` or `u`

We can fix that by adding square brackets, which will denote 'any of these characters are a match'

```js
const patternMatch = (word) => {
  const regexp = /[aeiou]/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

We can also choose a range of letters. We could say we are looking for words with the letters a-d

```js
const patternMatch = (word) => {
  const regexp = /[a-d]/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

### Test for Upper or Lower case (use options/flags with your regular expression)

Currently our pattern is case-sensitive. Let's test it out

```js
const patternMatch = (word) => {
  const regexp =  /[A-D]/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

These should all be false.

Let's add a flag to make it case insensitive

```js
const patternMatch = (word) => {
  const regexp =  /[A-D]/i;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

### Exploring Some Other Options for Matching

We can look for patterns that start a certain way by using `^`

First, let's look for words that have an `h`

```js
const patternMatch = (word) => {
  const regexp =  /h/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

All of them should be true, except for `pffft`

We can limit our matches to the words that start with `h`:

```js
const patternMatch = (word) => {
  const regexp =  /^h/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

### Special Characters and How to Use or Escape Them

Finally, for this intro we have special characters, which may or may not have a back slash in front of them:

- `.` is any character
- `?` is an optional character
- `\d` is any digit
- `\D` is any NON digit

A period is a `wildcard` that can represent any character. But we can also us a `\` to specify that we want to match just the `.`

```js
const patternMatch = (word) => {
  const regexp =  /\./;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

We can also just match for when the `.` is at the end

```js
const patternMatch = (word) => {
  const regexp = /\.$/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}
```

Let's take a moment. We just wrote

`/\.$/`

That looks pretty cryptic! But we understand what it means. Regular expressions have quite a few pattern matching symbols.

Here is a quick reference from the site Rubular: but there are even more than these listed, these tend to be the most common.

![rubular quick reference](https://i.imgur.com/kHo97zk.png)

Let's look at one more example that didn't make the list

We can test for words that EITHER do or do not have a `u`
We'll update our test cases for this one too

```js
const patternMatch = (word) => {
  const regexp = /colou?r/;
  if (word.match(regexp)) {
    return `${word}: true`;
  }
  return `${word}: false`;
}

// Try these examples:
console.log(patternMatch('color'));
console.log(patternMatch('colours'));
console.log(patternMatch('aloha'));
```

---

### Writing A More Complex Regular Expression

Let's check for a valid date in the form of `mm-dd-yyyy`, where the date is represented with `digits` (numbers 0-9)

```js
const validDate = (date) => {
  const exp = /\d\d-\d\d-\d\d\d\d/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}

// Try these examples:
console.log(validDate('12-12-2112'));

console.log(validDate('12122112'));

console.log(validDate('12/12/2112'));

```

it would be nice, if the `-` were optional

```js
const validDate = (date) => {
  const exp = /\d\d-?\d\d-?\d\d\d\d/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}

// Try these examples:
console.log(validDate('12-12-2112'));

console.log(validDate('12122112'));

console.log(validDate('12/12/2112'));
```

And it would be nice to be able to use `/` as an alternative

```js
const validDate = (date) => {
  const exp = /\d\d(-?|\/)\d\d(-?|\/)\d\d\d\d/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}

// Try these examples:
console.log(validDate('12-12-2112'));

console.log(validDate('12122112'));

console.log(validDate('12/12/2112'));
```

And it would be nice if the month could be (sort of) limited to 01-12. Note how preventing people from putting 13-19 would add even more complexity to our regular expression. If you feel up to it, think of a way to truly limit it to 01-12. Otherwise, the take away is that it's easy for these expressions to get complex quickly.

```js
const validDate = (date) => {
  const exp = /[01]\d(-?|\/)\d\d(-?|\/)\d\d\d\d/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}

// Try these examples:
console.log(validDate('12-12-2112'));

console.log(validDate('12122112'));

console.log(validDate('12/12/2112'));
```

Lastly, let's clean up that last bit to be 2-4 digits

```js
const validDate = (date) => {
  const exp = /[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}

// Try these examples:
console.log(validDate('12-12-2112'));

console.log(validDate('12122112'));

console.log(validDate('12/12/2112'));
```

Whoa! We just wrote:

```js
/[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/
```

And we know what it means!

Let's break it down one more time:

- `/` start regular expression
- `[01]` can be `0` or `1`
- `\d` can be 0-9
- `(-?|\/)` either a `-` or nothing or a `/`
- `\d\d` two more digits
- `(-?|\/)` either a `-` or nothing or a `/`
- `\d{2,4}`
- `/` end regular expression

Wow! So fun! We could keep going all day with this, but this is just a morning exercise and we have so many other things to learn. There is so much more to regular expressions, we didn't even get to half of the options or flags and more!

## Onwards

The next important step is to memorize all the special characters and flags for each language you'll be coding in. Kidding! Once you have a basic understanding, all you need is a good reference to look things up as you need them.

Writing Regular Expressions can get challenging. There are a number of free online tools that can help you visualize and write your expressions

If you will be doing some reg ex in JavaScript, check out [RegExr](https://regexr.com/)

The site allows you to write and test regular expressions and has nice references.

There are some nuanced/esoteric differences with regular expressions across languages and there are often more optimal ways to write regular expressions (look into greedy, nongreedy).

The best way to learn is to practice, start small and work your way up to more complexity and don't worry if you can't learn it all in a day, or a week or a month.

You are near the end of your time in a bootcamp and soon you'll be tasked with learning things on your own. Hopefully, by now you feel confident in knowing how you learn to code. So feel free to work on any of the following, according to how you learn best.

- My favorite code-along tutorial, that'll start you learning regular expressions from the beginning:
  - [regexone](https://regexone.com/)
- Try your hand at some code golf on these simple examples
  - [Eloquent JavaScript Regular Expressions](http://eloquentjavascript.net/09_regexp.html)
    - You can use your `patternMatch` function or you can try either regex site to try to match the following
    - car and cat
    - pop and prop
    - ferret, ferry and ferrari
    - Any word ending in ious
    - A whitespace character followed by a dot, comma, colon or semicolon
    - A word longer than six letters
    - A word without the letter e

- You can check out JavaScript's method `.search` that will return the position of the first match or -1 if none found.

```js
text = "Hi! Hello. Howdy? Aloha...pffft"

console.log(text.search(/Hello/i));
console.log(text.search(/Howdy/i));
console.log(text.search(/Aloha/i));
```

- Another method is `.replace` which will match a pattern and then replace it with something.
  The Oxford Dictionary states that these are the most commonly misspelled words and how they are misspelled:

| Correct spelling | Common misspelling |
| :--------------: | :----------------: |
|    disappear     |     dissapear      |
|    disappoint    |     dissapoint     |

- Write a method that would correct these two words

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
