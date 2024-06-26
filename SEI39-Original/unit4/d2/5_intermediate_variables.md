[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intermediate Variables

## Overview

In order, this lesson will teach you about floating point numbers, floor division, implicit and explicit type conversion, escape characters, and string formatting. There is a short exercise near the end.

## Duration

30 minutes

## Agenda

| Time        | Activity          |
| ----------- | ----------------- |
| 0:00 - 0:03 | Welcome           |
| 0:04 - 0:15 | Floats            |
| 0:16 - 0:22 | Advanced Strings  |
| 0:23 - 0:27 | String Formatting |
| 0:28 - 0:30 | Summary           |

---

## Lesson Objectives

*After this lesson, you will be able to...*

* Create and floor floats.
* Use special string characters.
* Format strings.

---

## Introducing: Floats

Did you notice that until now, we've only used whole numbers? Whole numbers are integers or, in programming terms, `int`.

Where are all the decimal points?

`3.3`, `1.1`, and `2.2` are all **floats**.

* Short for "floating point value"
* A number with a decimal point. Even `2.0` is a float - it has the decimal!
* Just another numerical variable!

```python
an_int = 3 # Int!
a_float = 3.0 # Float!
x = 2.5 # Float!
z = 3.5 + 2.5 # Adding floats - normal math.
y = x + z
print(y) # Prints 8.5.
sum = an_int + a_float # What if we add an int and a float?
print(sum) # Prints 6.0. Adding an int to a float will still make a float!
```

**Talking Points**:

"Float is short for floating point real value, which in layman's terms is simply a number with a decimal point."

---

## Int / Int == Float ?

A quotient is not necessarily a whole number!

* `5 / 2 == 2.5`
* `1 / 3 == 1.333...`

Therefore, quotients are always floats - even when they look like ints. Python doesn't distinguish!

* `6 / 2 == 3.0`
* `8 / 4 == 2.0`

**Protip:** This is called **implicit type conversion** - Python changed our numbers from ints to floats automatically.

**Talking Points**:

* "I started with two integers, how did I get a float? Well, if you think about it, it does make sense. You aren't guaranteed that a quotient will be a whole number, even if you start out with two whole numbers. For example, 5 divided by 2 is 2.5, which is a float!"

---

## Explicit Type Conversion

`6 / 2 == 3.0`: A float. What if you just want the int `3`? (Pretty soon, having the right type will be important!). We need **explicit type conversion.**

* `int()` converts something to an integer.
* `float()` converts to a float.
* `str()` converts to a string

**Talking Points**:

* "Explicit type conversion is basically like saying directly to Python, `I want this float to be an integer!`"

**Repl.it Note**: The replit code is [here](https://repl.it/@SuperTernary/python-programming-type-conversion?lite=true)

```python
x = 2
y = 3.5
z = "10"

print("Converting to integers")
print(x, "to integer ->", int(x))
print(y, "to integer ->", int(y))
print(z, "to integer ->", int(z))
print()

print("Converting to floats")
print(x, "to float ->", float(x))
print(y, "to float ->", float(y))
print(z, "to float ->", float(z))
```

---

## We Do: Let's Practice

Let's try:

* Declare two variables, `x`  and `y`, and assign each an `int` value.
* Declare a variable `z` and assign a `float` value.
* Declare a variable `result`, which stores `x + y`. What type is `result`? Let's convert it to other types.
* Is this behavior the same for other operators `-`, `*`, `/`, or `**`? What about using `x`  and `z`?

* Note: division produces a float out of two integers and can do the type conversion.

**Talking Points**:

* "Luckily most of the time, floats behave the way you'd expect."
* Afterward "You can combine floats and ints with mathematical operators, and the resulting type will be a float as well."

---

## Quick Review: Floats

In programming:

* An *int* is a whole number: `1`, `0`, `-5`.
* A *float* is a number with a decimal point: `1.6`, `-28.2`, `0.0`.
* Doing any math with a float results in a float: `6 + 3.0 = 9.0`.
* Dividing integers results in a float: `4 / 2 = 2.0`

You can use *explicit type conversion* to turn one variable type into another:

* `int()` converts to an integer: `int(6.0) # 6`
* `float()` converts to a float: `float(6) # 6.0`
* `str()` converts to a string: `str(6) # "6"`

**Up next:** Floor Division.

---

## Finding the Midpoint

One intermediate variable down! Let's move on past floats.

What if we want to find the middle index of a list?

```python
# An odd numbered list (length of 5)
characters = ["Green Arrow", "Super Girl", "The Flash", "Wonder Woman", "Batman"]

index = len(characters) / 2 # Index is 2.5

print(characters[index]) # There's no element 2.5!
```

We want `2`. Any ideas? This is a very common use case - there must be a way!

**Protip:** Remember, indexes start at 0!

*Talking Points**:

* "Sometimes we want to divide and get the nearest whole number. A common scenario for this is when you want to get the middle of a list. You can access the list with an index which must be an integer."

---

## Introducing Floor Division

Python has a shortcut.

**Floor division** (a.k.a. integer division):

* We use `//` instead of just `/`.
* Does normal division, then drops the decimal and returns an int.
* Think of the floor - it's beneath you. We floor by rounding **down**. The decimal is chopped! `2.8` will become `2`, not `3`.

```python
# Gives 2.5
float_index = 5 / 2

# Gives 2!
int_index = 5 // 2
```

**Talking Points**:

* "You may hear the terms `integer division` and `floor division` used interchangeably"
* "If you recall the terms floor and ceiling from math class, you'll understand that floor just means that the decimal is removed. Floor division is NOT the same as rounding to the nearest whole number! It literally just cuts off the decimal point!"

---

## You Do: Using Floor Division

Correct the code by using floor division:

**Talking Points**:

* "Let's take a minute or two to correct our midpoint code from earlier"

**Repl.it Note:** This replit code is [here](https://repl.it/@SuperTernary/python-programming-floor-division?lite=true):

```python
# Your job: Add multiplication (product) and division (quotient)
# to the addition and subtraction that have already been done.
# Observe: What is the result's type for each operation?

# Start with two integers
x = 6
y = 2

# Calculate the sum, difference, product, and quotient
result_sum = x + y
result_difference = x - y
# TODO: Multiplication of x and y
# TODO: Division of x and y

# Print out all results
print("result sum", result_sum)
print("result difference", result_difference)
# TODO: Print result product
# TODO: Print result quotient
```

---

## Quick  Review

Floor division:

* Drops the decimal point - always rounds down.
* Performed using `//` instead of just `/`.
* Returns an int instead of a float.

```python
# Gives 2.5
regular_division = 5 / 2

# Gives 2!
floor_divison = 5 // 2
```

**Next up:** Specialty Strings!

---

## Switching Gears: Strings

Our intermediate variables checklist:

* Floats
* Floor division

What about strings? We might want:

* Printing special characters: A newline, a tab, or a quote inside of a string.
* Formatting
  * A string.
  * The way an integer or float prints out.

**Discussion**: How would you go about printing a new line between strings, like below?

> Hello!
> This is a line later.

**Talking Points**:

* "We've talked a bit about numbers, but we haven't even yet touched on more advanced things to do with strings yet!"

---

## Special String Characters

| Name      | Escape Character | Notes                                      |
| --------- | ---------------- | ------------------------------------------ |
| Newline   | \n               | Whitespace: Inserts another line           |
| Tab       | \t               | Whitespace: Inserts a tab                  |
| Quote     | \"               | Print a double quote, don't end the string |
| Backslash | \\               | Prints \                                   |

```python
quote = "\"These are not the droids you're looking for.\"\n\n\t-Obi-Wan Kenobi\n"

print(quote)
```

This prints, *including* the quotation marks:

> "These are not the droids you're looking for."
>
>
> -Obi-Wan Kenobi

* Note how they all use the backslash  -  the backslash escapes.

**Talking Points**:

* "You can't always print everything you want to inside of a string. For example, what if you want to print a quote? How can you distinguish it from the quotes that delineate the string value in Python?"

---

## String Format

What else with strings?

String formatting uses index numbers, in `{}`, as placeholders for strings we later specify in `format`.

Indexes inside the braces refer to the arguments, in order!

```python
## Indexes count from 0. ##
x = "{0}, {1}, {2}".format("man", "bear", "pig")
print(x) # prints "man, bear, pig"

## They don't need to be  in order ##
x = "{1}, {0}, {2}".format("man", "bear", "pig")
print(x) # prints "bear, man, pig"

## We can repeat! ##
x = "{0} {1} {0} {1} {0}".format("Hello", "World")
print(x) # prints "Hello World Hello World Hello"
```

* Note the syntax -
* Why would you do this versus `print("man", "bear", "pig")`

---

## Escaping and Format

**Talking Points**:

* "Let's put the concepts of escaping characters with backslash and format to make a shortened version of some Beatles lyrics"

**Repl.it  Note**: This replit code is [here](https://repl.it/@SuperTernary/python-programming-string-formatting?lite=true):

```python
# Two ways to print the same thing

# First way
lyrics = "let it be, let it be, let it be, let it be\nwhisper words of wisdom\nlet it be\n"

print(lyrics)

# Second way, with format
let_it_be = "let it be"
whisper = "whisper words of wisdom"

print("{0}, {0}, {0}, {0}\n{1}\n{0}".format(let_it_be, whisper))
```

---

## Quick Review

Special strings:

* A backslash `\` escapes special characters: `\"` will print a quote and `\\` prints a `\`.
* `\n` creates a New line; `\t` creates a Tab.

String formatting:

* Can be used when printing or creating new strings.
* Use `{x}`; `x` corresponds to  the number of the  argument.

```python
x = "{0}, {1}, {2}".format("man", "bear", "pig")
print(x) # prints "man, bear, pig"

x = "{1}, {0}, {2}".format("man", "bear", "pig")
print(x) # prints "bear, man, pig"

x = "{0} {1} {0} {1} {0}".format("Hello", "World")
print(x) # prints "Hello World Hello World Hello"
```

---

## Number Format

What about number formatting?

* Specify a float's precision (how many decimal points are shown).
* Add commas to an integer (so it's more readable!).

```python
x = format(1/3, '.2f')
print(x) # Technically, 1/3 is .333333333333. This prints "0.33"
x = format(2.0024292, '.3f')
print(x) # This prints "2.002"
```

```python
x = format(5200, ',d')
print(x) # Prints "5,200"
```

**Note: Number formatting creates strings!**

* Break down the syntax. What does `.2f` mean? What does `,d` mean?
* Think of examples for formatting. `.5f`; things besides `,d`. Ask them to come up with something they'd like to do, and research with them (if you don't know) the syntax to do it.

**Talking Points**:

* "We can also use the format function with numbers. Beware: the result is a string!"

---

## You Do: Bring It All Together

* Open a new file and name it "solution.py".

* Make a dictionary called "sports" with at least  4 key / value pairs.

  * Keys are the names (e.g., tennis, soccer, volleyball).
  * Values are the the number of people that play in a game.

* Use a loop to print out all the keys and values.

  * Output:

> I like "tennis".
> There are usually 2 players in tennis.

* Note the new line and quotes,  and use `format` to print out your string!

* BONUS: Every other sport, indent by another tab.

  * 0 tabs: Tennis.
  * 1 tab level: Soccer.
  * 2 tab levels: Volleyball.

**HINT**: Use floor division for the bonus! `number_of_tabs = loop_counter // 2`

5 minutes

---

## Summary and Q&A

* Floats (`2.52`)
* Floor (`int_index = 5 // 2`) - creates an int.
* Escape characters (`\\`, `\n`, `\r`, `\t`, `\"`)
* Formatting:

```python
x = "{0}{1}{0}".format("Hello", "World")
print(x) # prints "HelloWorldHello"

x = format(5200, ',d') # "5,200" -> A string!

x = format(1/3, '.2f') # 0.33
```

* Type conversion:
  * `int()`
  * `float()`
  * `str()`

---

## Additional Resources

* [Floating Point (Docs)](https://docs.python.org/3/tutorial/floatingpoint.html)
* [Decimal Module](https://docs.python.org/3/library/decimal.html)
* [Floor Division](http://python-reference.readthedocs.io/en/latest/docs/operators/floor_division.html)
* [List of Escape Characters](https://linuxconfig.org/list-of-python-escape-sequence-characters-with-examples)
* [List of Unicode Characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters)
* [Obscure Unicode Characters](http://jrgraphix.net/r/Unicode)
* [Unicode Database](https://en.wikipedia.org/wiki/List_of_Unicode_characters)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
