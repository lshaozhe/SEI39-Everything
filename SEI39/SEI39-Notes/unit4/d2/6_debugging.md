[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Debugging Principles and Techniques

## Overview

This lesson is meant to give you the skills needed to debug your own code.
There is a mix of demo, You Do, and We Do to keep it fresh while running through many common errors.
We throw a lot of errors at you very quickly - the idea is to get them comfortable recognizing errors and solving them, not to memorize them.

Then, you will be guided in how to use `Try`-`Except` blocks when errors are expected/unavoidable.
Last, some time is spent teaching you how to handle situations that are problematic, but don't usually throw errors specifically,
including endless loops, off-by-one errors, and logical errors.

### Helpful Table of Errors

| Error Type        | Most Common Cause                                             |
| ----------------- | ------------------------------------------------------------- |
| AttributeError    | Attempting to access a non-existent attribute                 |
| KeyError          | Attempting to access a non-existent key in a dict             |
| ImportError       | A module you tried to import doesn't exist                    |
| IndexError        | You attempted to access a list element that doesn't exist     |
| IndentationError  | Indenting code in an invalid way                              |
| IOError           | Accessing a file that doesn't exist                           |
| NameError         | Attempting to use a module you haven't imported/installed     |
| OverflowError     | You made a number larger than the maximum size                |
| RuntimeError      | The error doesn't fit into any other category                 |
| SyntaxError       | A typo, such as forgetting a colon                            |
| TypeError         | Using two different types in an incompatible way              |
| ValueError        | When you are trying to convert bad keyboard input to a number |
| ZeroDivisionError | Dividing By Zero                                              |

## Lesson Objectives

*After this lesson, you will be able to...*

* Troubleshoot common types of errors.
* Implement basic exception mitigation.
* Troubleshoot logic errors.

## Duration

40 minutes

## Agenda

| Duration | Activity           |
| -------- | ------------------ |
| 3 mins   | Welcome            |
| 12 mins  | Recognizing Errors |
| 6 mins   | Exception Handling |
| 13 mins  | Untyped Errors     |
| 2 mins   | Summary            |

---

**Talking Points**:

* This won't be awful: it is not really about your problem solving skills so much at this point as it is about you to notice the error message and decode what it is saying.

---

## Discussion: Error Messages

Have you found a shiny red error message before? What do you think has happened here?

![](https://s3.amazonaws.com/ga-instruction/assets/python-fundamentals/ZeroDivisionError.png)

**Talking Points**:

* "How many of you have run your code in a repl.it only to have a bunch of red text pop-up instead of your expected output?"
* "What do you think is going on here in this image? How could it be fixed?"

---

## Making Errors Into Friends

On the surface, errors are frustrating! However, we'll walk through some common ones. You'll see:

* Errors sometimes say exactly what's wrong.
* Some errors have very common causes.
* Errors may say exactly how to fix the issue.
* Python errors are very helpful and have clear messages.

With that in mind -  what's the problem with this code?

![](https://s3.amazonaws.com/ga-instruction/assets/python-fundamentals/ZeroDivisionError.png)

* We introduce ZeroDivisionError first to start discussion, as just about everyone knows that you can't divide by 0.
Do you think Python's error message did a good job of informing us of what the issue was.

**Talking Points**:

* "Python errors sometimes tell you exactly what to change about your code. For example, we see `ZeroDivisionError: divide by zero`, which is a really clear way to describe the issue."
* "Compared to other programming languages, Python errors are really nice! Think of them as helpful hints to help you make the best code possible!"

---

## We Do: IndexError

Let's debug this code together.

**Protip**: Index errors typically happen when you attempt to access a list index that doesn't exist.

* Learn how to read the line number where the error occurred. The error often happens on the line *above* the line that threw the error.
* Ask yourself this: "Obviously this code isn't working, but by looking at it, can you tell what my intention was? Which element do you think I was trying to access?"

**Talking Points**:

* "Remember that lists are indexed starting at zero!" (maybe show a reminder)

**Repl.it Note**: This replit code is [here](https://repl.it/@SuperTernary/python-programming-index-error?lite=true):

```python
race_runners = ["Yuna", "Bill", "Hyun"]

first_place = race_runners[1]
second_place = race_runners[2]
third_place = race_runners[3]

print("The winners are:", first_place, second_place, third_place)
```

---

## You Do: Fix a NameError

Directions: Fix it!

*Hints*:

* Run the code to get the error.
* What kind of error is it? What is the error message?

**Talking Points**:

* "Let's go back to an error we encountered earlier today!"
* We most commonly get a `NameError` if we use a variable:
  * Without defining it.
  * *Before* defining it

**Repl.it Note**: This replit code is [here](https://repl.it/@SuperTernary/python-programming-error-var-name?lite=true):

```python
# Get a number between 2 and 8.
my_nums = 5

# Print the number
print(my_num)
```

---

## KeyError

Accessing a key in a dictionary that doesn't exist.

Commonly caused by:

* A misspelling.
* Mixing uppercase and lowercase.

The error message tells you exactly what key is missing!

* What do you think most commonly causes KeyErrors? E.g. case sensitivity in the key names, a typo in the key name, or simply not remembering what keys are available.

**Talking Points**:

* "KeyError happens when you try to use a key in a dictionary that doesn't exist"
* "The error message tells you exactly what key threw the error"

**Repl.it Note:** The replit code is [here](https://repl.it/@SuperTernary/python-programming-error-key?lite=true):

```python
my_favorites = {
  "Food": "Lobster Rolls",
  "Song": "Bohemian Rhapsody",
  "Flower": "Iris",
  "Band": "Tom Petty & the Heartbreakers",
  "Color": "Green",
  "Movie": "The Princess Bride",
  "Programming Language": "Python"
}

# This is okay!
print("My favorite color is", my_favorites["Color"])

# This is NOT okay! (Case sensitivity!)
print("My favorite color is", my_favorites["color"])

# This is NOT okay! (Key doesn't exist)
print("My favorite restaurant is", my_favorites["Restaurant"])
```

---

## AttributeError

* More general than `KeyError`, but the same idea.
* Accessing an attribute (e.g., function or property) that doesn't exist

**Talking Points**:

* "AttributeError is more general than KeyError (which only applies to dict keys), but the same general idea."

**Repl.it Note**: The replit code is [here](https://repl.it/@SuperTernary/python-programming-error-attribute?lite=true):

```python
class Dog():
  def __init__(self, name):
    self.name = name

  def bark(self):
    print("Bark!")

# Declare a new dog instance
my_dog = Dog("Fido")

# Call the bark method
my_dog.bark() # OK!

# Call the run method
my_dog.run() # AttributeError!
```

---

## Discussion: SyntaxError

Let's run the code together. What happens? How can we fix it?

* See if they can pick up the answer.
* Python is different (and better) than other languages in this regard, but it's important to note that = and == are for different purposes!

* "In any other language, (take JavaScript for example), if you accidentally use a single equals when you mean to use a double equals, the variable would be reassigned while inside that if statement and your 13 year old would be having a beer! Luckily the designers of Python knew this and made the choice to throw an error!"

**Repl.it Note**: The replit code is [here](https://repl.it/@SuperTernary/python-programming-error-syntax?lite=true):

```python
my_age = 13

if my_age = 18:
    print("I may vote.")
else:
    print("I may not vote.")
```

---

## Discussion: TypeError

`TypeError` and its message tell us:

```python
my_num = 5 + "10"
print(my_num)
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

What do we learn from this error message? Have you learned a way to fix this?

**Fun Fact**: Some languages, like JavaScript, let this code run (breaking something!).

**Talking Points**:

* We're trying to combine different types in a way that doesn't make sense
* The error was caused when using the `+` operator
* The error was caused by two incompatible types: `string` and `integer`.

* You learnt how to do type conversion in the last lesson, so you could point out that they can cast 10 as an int and then this will work.

---

## IndentationError

May be caused by:

* Not enough indentation
* Mismatched indentation
* Mixing tabs and spaces!

* This is so common for Python beginners, so it is important to get practice recognizing this!
* Have students come up with some examples of what might cause an error like this. Answers might include mixing tabs and spaces or indenting too much/too little.

* "IndentationError comes up for any indentation errors, whether it's too little or just mismatching in some way"

**Repl.it Note:** this replit code is [here](https://repl.it/@SuperTernary/python-programming-error-identation?lite=true):

```python
my_age = 13

if my_age == 16:
  print("I may drive.")
else:
print("I may not drive.")
```

---

## ValueError

Most commonly caused by trying to convert a bad string into a number.

```python
# This is okay!
my_num = int("10")

# This throws a ValueError
my_num = int("Moose")
```

---

## RuntimeError

The worst error to see!

* When no other error type fits.
* You need to rely on the error message content.
* May be used for custom errors.

**Example**: `RuntimeError` is like if I said to you:

> Please eat the piano

You can understand what's being asked, but can't actually do that!

* "Unfortunately this is an error that comes up when no other error type fits the situation. You will need to rely heavily on the content of the error message rather than getting much of a hint from the type alone"

---

## Quick Review

There are many types of errors in Python!

Usually, the error has a name or description that says exactly what's wrong.

Think about `IndentationError` or `IndexError` - what went wrong?

Sometimes, you'll see `RuntimeError`. Python throws us this if something is broken but  it can't say specifically what - like `Please eat the piano`. Revisit your code and see what might  have happened.

**Next Up:** A list of common errors, then ways to prevent errors.

---

## List of Common Errors

This chart's for you to refer to later - don't memorize it now!

| Error Type          | Most Common Cause                                             |
| ------------------- | ------------------------------------------------------------- |
| `AttributeError`    | Attempting to access a non-existent attribute                 |
| `KeyError`          | Attempting to access a non-existent key in a dict             |
| `ImportError`       | A module you tried to import doesn't exist                    |
| `IndexError`        | You attempted to access a list element that doesn't exist     |
| `IndentationError`  | Indenting code in an invalid way                              |
| `IOError`           | Accessing a file that doesn't exist                           |
| `NameError`         | Attempting to use a module you haven't imported/installed     |
| `OverflowError`     | You made a number larger than the maximum size                |
| `RuntimeError`      | The error doesn't fit into any other category                 |
| `SyntaxError`       | A typo, such as forgetting a colon                            |
| `TypeError`         | Using two different types in an incompatible way              |
| `ValueError`        | When you are trying to convert bad keyboard input to a number |
| `ZeroDivisionError` | Dividing By Zero                                              |

**Talking Points**:

* "Here is an alphabetically ordered list of the most common errors you may encounter when writing Python that you can refer back to."

---

## Discussion: Throwing Errors

Sometimes, we might have code that we expect to throw an error.

```python
# The user might not give us a number!
my_num = int(input("Please give me a number:"))
```

What if the user types a string like "Moose"?

* This causes a `ValueError` - we'll be trying to make an int out of a string "Moose".
* We can anticipate and prepare for it!

* Start by making sure you understand what the code does. You've seen `input` a few  times, but won't officially learn it for three more lessons; you just learnt type casting.

**Talking Points**:

* "Sometimes you may expect certain code to throw an error, and you may want to handle that situation with a smooth error message as opposed to having your whole program blow up with red text."

---

## Try-Except

A `Try`-`Except` block is the way we can catch errors in Python. We can catch:

* One error (`except ValueError:`)
* Multiple errors (`except (ValueError, KeyError):`)
* Any/every error (`except:`)

Always try to specify the error, if possible!

**Talking Points**:

* Call out that we specifically say "ValueError", and `err` is just a random keyword. Change it to demo. Add other error catches; take out the ValueError specifically.
* "A Try-Except block is the way we can catch errors in Python."
* "We can catch one error (as we see in the code), we can catch multiple errors, or we can just catch any/every error by leaving it blank."
* "You can catch every possible error by leaving the specified error blank, however, this is generally not a great practice because it says very little about how you were thinking."

**Replit Note:** The repl.it code [here](https://repl.it/@SuperTernary/python-programming-try-except?lite=true):

```python
my_num = None

while my_num is None:
  try:
      my_num = int(input("Please give me a number:"))
  except ValueError as err:
      print("That was not good input, please try again!")
      print("Error was", err)

print("Thanks for typing the number", my_num)
```

---

## Discussion: Switching Gears

Not every programming error is caught by an error message!

* Can anyone say what is wrong with this code?
* What might happen if you run it?

**Do not try to run the below code**.

```python
my_num = 1

while my_num < 10:
    print(my_num)
    my_num + 1
```

**Talking Points**:

* "Errors and error messages are really helpful when we've got bad syntax or are trying to access something that doesn't exist. However, not every possible programming error is able to be caught by error messages like this."
* "For example, consider the code here"
* "Can you tell what the original intention of the code was? What went wrong? Why did the code go into an infinite loop? How can we fix this code?"
* "There are many errors like this where there is nothing syntactically wrong with the code, but an error in the logic, or a typo that changes the meaning of the code as we saw with the infinite loop."

---

## Discussion: Another Infinite Loop

It's easy to accidentally make an infinite loop. What's the problem here?

```python
am_hungry = True
fridge_has_food = True

while am_hungry or fridge_has_food:
  print("Opening the fridge!")
  am_hungry = False
```

**Talking Points**:

* "Let's go through another common cause of infinite looping."
* "Putting 'or' when you mean 'and' is a common cause of pain!"

---

## Infinite Infinite Loops

Most common infinite loops are a result of:

* A `while` loop's condition never becomes `False`.
* Forgetting to increment a counter variable.
* Logic inside the loop that restarts the loop.
* Bad logic in a `while` loop's condition (e.g., putting `or` instead of `and`)

Be careful to check your end conditions!

If you find your program running endlessly, hit `control-c` in the terminal window to stop it!

* These are common, and you really have to watch out for it. Show control-c so that you're all clear on what it does. You can use this code:

```python
am_hungry = True
fridge_has_food = True

while am_hungry or fridge_has_food:
  print("Opening the fridge!")
  am_hungry = False
```

**Talking Points**:

* "There are many, many ways to accidentally create an infinite loop!"

---

## Discussion: Logic Error

Here, we want to find the average of `8` and `10`. The answer should be `9`, because `8 + 10 == 18`, then `18 / 2 == 9`

What happened and why?

* Can you find the error?
* When you do, remember this acronym PEMDAS and note the order of operations:

* Parentheses
* Exponents
* Multiplication
* Division
* Addition
* Subtraction

**Replit Note:** The code is [here](https://repl.it/@SuperTernary/python-programming-error-pemdas?lite=true):

```python
x = 8
y = 10
average = x + y / 2
print(average)
```

---

## Quick Review: Common Errors

* If you expect an error, use a try/except block:

```python
my_num = None

while my_num is None:
  try:
      my_num = int(input("Please give me a number:"))
  except ValueError as err:
      print("That was not good input, please try again!")
      print("Error was", err)

print("Thanks for typing the number", my_num)
```

* Logic problems are common but won't throw a helpful error. Always check end conditions on your `while` loops!

---

## Print Statements for Sanity Checks

**Pro Tip**: If something is wonky and you don't know why, starting `print`ing.

* Use `print` statements on each line to peek at the values.
* Remember to remove debugging statements once the problem is solved!

```python
x = 8
y = 10
get_average = x + y / 2
print("get_average is", get_average) # Print out what this equals (it's wrong!)
testing_sum = x + y # To figure out why, break it down.
print("testing_sum is", testing_sum) # Print out each step.
testing_average = testing_average / 2
print("testing_average is", testing_average) # The individual math test works
# We know there must be a problem with the logic in "average"
```

When your programs become very complex, adding `print` statements will be a great help.

**Talking Points**:

* "Something went wrong in that last bit of code! You may have already figured out what it is in this example, but in a more complex example, you might not know!"
* After: "Why do you think splitting up the statement solved the problem?"

---

## You Do: Wrapping it Up

Can you fix the code below?

5 minutes.

**Repl.it Note::** The code is [here](https://repl.it/@SuperTernary/python-programming-error-quiz?lite=true):

```python
new_phone = Phone(5214)

class Phone:
  def __init__(self, phone_number):
    self.number = phone_number

  def call(self, other_number):
    print("Calling from" self.number, "to", other_number)

  def text(self,  other_number, msg):
    print("Sending text from", self.number, "to", other_number
  print(msg)

test_phone = Phone()
test_phone.call(515)
test_phone.text(int("text 141"), "Hi!")"
```

---

## Summary and Q&A

* Python has many common built-in errors.
* Use `try`-`except` syntax to catch an expected error.
* Logic issues don't throw errors, so be careful!
* Use `print` statements to walk through your code line-by-line.

---

## Additional Resources

* [List of Built-In Errors](https://www.tutorialspoint.com/python/standard_exceptions.htm)
* [Error Flowchart PDF](https://www.dropbox.com/s/cqsxfws52gulkyx/drawing.pdf)
* [Try-Except Documentation](http://www.pythonforbeginners.com/error-handling/python-try-and-except)
* [A deep dive into try/except clauses](https://jeffknupp.com/blog/2013/02/06/write-cleaner-python-use-exceptions/)
* To get advanced, add [logging](https://fangpenlin.com/posts/2012/08/26/good-logging-practice-in-python/) to your code.
* To get very advanced, include [unit tests](http://www.diveintopython.net/unit_testing/index.html); the [pytest module](http://pythontesting.net/framework/pytest/pytest-introduction/) is great.

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
