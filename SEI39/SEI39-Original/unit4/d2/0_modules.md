[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Modules and Packages

## Overview

This lesson walks through the idea of modules, using the `random` module to look at documentation and methods. Then, it segues into a few longer exercises with PyTime.

### Important Notes or Prerequisites

Libraries were covered extremely briefly in the pre-work (in the Python Introduction lesson), so you can call back to that. You've also used itertools, so you can reference that. This is just a small taste of the many, many modules out there. Highly encourage you to explore more on your own!

## Lesson Objectives

*After this lesson, you will be able to...*

* Add packages and modules to a Python program.
* Create a program utilizing PyTime.
* Navigate library documentation.

## Duration

40 minutes.

## Agenda

| Duration | Activity          |
| -------- | ----------------- |
| 3 mins   | Welcome           |
| 20 mins  | Exploring Modules |
| 18 mins  | Pytime Module     |
| 3 mins   | Summary           |

---

## Discussion: Let's Dive In

Do you remember `itertools`?

What do you think these have in common?

* `itertools`.
* A Python function that tells us when Mother's Day is.
* A Python function that gets all the contents of a webpage for us.

> Answer - they're all accomplished with code other people have written for us.

---

## What is a Module?

Answer: They're all available to us via modules! (In fact, `itertools` IS a module).

Modules are collections of useful Python code and functions that we can use.

* This is much like a class that someone else has written.
* It's free - less work for us!

Use a function by `import <module>` at the top of your code, then `<module>.function_you_want()`.

```python
# import < module name > - brings in the module file, so we can use it.
import itertools

food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]

# itertools.chain : "Look in the itertools module, and use the chain function"
chained_list = list(itertools.chain(food, colors))
```

**Pro Tip**: Check the Additional Reading at the end of the lesson to see how to write your own module!

* Do you think module names are case sensitive

 **Talking Points** :

* "If you recall back to the itertools lesson, you will now see that we are using a module for that extended functionality."

* "A **module**, according to the [Python Docs](https://docs.python.org/3/tutorial/modules.html), "is a file containing Python definitions and statements. The file name is the module name with the suffix `.py` appended."

* You will encounter many modules that others have written. They are free-to-use and you can think of them as extensions of Python's functionality."

---

## Python Standard Library

We're going to look at several different modules to get you used to them.

The [Python Standard Library](https://docs.python.org/3/library/) bundles all common modules, so we can just `import` (use) them.

We've seen the `itertools` module already. Let's look at another module, `random`:

```python
import random

# Done! Now we can use any functions in the random module!

# randint is a function in the random module
my_random_number = random.randint(2, 8)

# This could be 2, 3, 4, 5, 6, 7, or 8
print(my_random_number)
```

**Talking Points** :

* "This means that they are so commonly used, that they are already included and you don't have to download them separately."
* "There are modules to help with databases, operating systems, logging, data processing, file I/O, and testing, just to name a few!"
* "If you want to use any functions from a module in the standard library, all you need to do is include an import statement for that module at the top of your file."
* "Let's say we're using the random module. We import it; now, we can use the functions in it. Randint returns a random integer between two numbers we give it, including both those numbers."

---

## We Do: Let's Import Random

Run the code in the repl below. What happened? Why?

Uncomment the first line: `import random`. Run it again. Try changing the values.

**Talking Points**:

* Post-activity: "Importing the module tells your program that the module exists - there are thousands of modules, so to save space, your program will only use the ones you tell it to."
* "You may have noticed a NameError. That means it doesn't know what module you're referring to since it wasn't imported."
different values for the randint function as a short "we do" activity. Show a large range and a small range.

**Repl.it Note: The code is [here](https://repl.it/@SuperTernary/python-programming-modules-random?lite=true)** :

```python
import random
# Done! Now we can use the random module all we want!

# randint is a function in the random module
my_random_number = random.randint(2,8)

# This could be 2, 3, 4, 5, 6, 7, or 8
print(my_random_number)
```

---

## We do: Exploring the Random Module

How do we know:

* What `randint` does?
* What the `random` module has?

Every module has documentation, which has:

* What functions are in the module.
* How to use them.

Here is the [documentation](https://docs.python.org/3/library/random.html) for the random module.

* Can you find our `randint` function?

* Walk through the documentation, though not in depth - point out the description at the top, that it tells you what module you're in, that it has the functions and brief descriptions. Reminder that they've just seen randint, so point that out.
* End with walking through random, since that's what's next.
* Don't go too in depth in the documentation - introduce the idea of consulting it and the basic idea, but focus on a few simple functions.

**Talking Points** :

* "So, how do we go about using the `random` module now that we know how to include it?"
Let's consult the documentation to get an idea of what functions are available from the random module."
* "There's a lot more functions than you might expect!"

---

## Partner Exercise: Random Numbers

Get with a partner and pick a driver! Together:

* Find the `random` function in the [documentation](https://docs.python.org/3/library/random.html). (Yes, a function can have the same name as the module).
* Print out a randomly generated number using `random()`.
* Run the program several times; is your random number different every time?

* Why do you think this is useful?

> **Protip**: The `[`, in mathematics means `inclusive`, whereas the `)` means `exclusive`. Thus the possible values include 0.0, but do **not** include 1.0!

3 minutes

**Talking Points**:

* "There's a lot more functions than you might expect!"
* "The `[`, in mathematics means `inclusive`, whereas the `)` means `exclusive`. Thus the possible values include 0.0, but do **not** include 1.0!"

---

## Quick Review

Modules are collections of useful Python code and functions that we can use.

Use a function by `import <module>` at the top of your code, then `<module>.function_you_want()`.

We've looked at two modules: `itertools` and `random`.

```python
# Import statements go at the top of your file
import itertools
import random

# Using the randint function in the random module
my_random_number = random.randint(2, 8)
print(my_random_number)

# Using the chain function in the intertools module
food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
chained_list = list(itertools.chain(food, colors))
```

The [Python Standard Library](https://docs.python.org/3/library/) bundles all common modules, so we can just `import` (use) them.

**Next up:** More `random` module practice.

---

## We Do: Do You Feel Lucky?

How could you pick a random value from a list? The `random` module has a function called `choice` - it works on any non-empty list.

```python
people_in_lottery = ["Tina", "Batu", "Gina", "Jim", "Andres"]
lottery_winner = random.choice(people_in_lottery)
print(lottery_winner, "wins a new car!") # Gina
```

Let's try.

**Talking Points**:

* "Let's switch gears a little bit. Random numbers are nice, but sometimes we have a list and we just want to pick a random item on that list. Suppose we run a lottery. We have a list of everyone who bought a lottery ticket and the winner will get a new car. How can we pick a winner?"

**Repl.it Note: The code is [here](https://repl.it/@SuperTernary/python-programming-module-chance?lite=true)** :

```python
import random

# Directions
# - Replace the names with your name and 4 nearby classmates.
# - Run the program
# - Who won the car?

# Create a list of candidates
people_in_lottery = []

# This is selecting one winner
lottery_winner = random.choice(people_in_lottery)

# This announces the winner!
print(lottery_winner, "wins a new car!")
```

---

## Partner Exercise: Let's Get Random

Get with a partner and create a local file, `random_test.py`

* Generate a random number with `random.randrange()`. Print it out.
* Create a list, like `deck = ["ten", "jack", "queen", "king", "ace"]`
* Use `random.choice()` to pick a random card in your deck. Print it out.
* Use `random.shuffle()` to mix up your deck; print that out.

Here is the [documentation](https://docs.python.org/3/library/random.html) for the random module, so you can look up functions.

5 minutes

* They'll need to look in the documentation to see shuffle; we haven't gone over it. This is a good exercise to get them used to looking at docs.
* Walk around and see if there are questions.
* Go over the  answer when time's up or you feel it's time to do so - walk  through finding `shuffle` in the docs as well.

---

## Quick Review II

Modules are collections of useful Python code and functions that we can use.

Use a function by `import <module>` at the top of your code, then `<module>.function_you_want()`.

The [Python Standard Library](https://docs.python.org/3/library/) bundles all common modules, so we can just `import` (use) them. `itertools` and `random` are modules inside the Python Standard Library.

```python
# Import statements go at the top of your file - they import straight from the Python Standard Library!
import itertools
import random

# Using the randint function in the random module
my_random_number = random.randint(2,8)
print(my_random_number)

# Using the chain function in the intertools module
food = ['pizza', 'tacos', 'sushi']
colors = ['red', 'green']
chained_list = list(itertools.chain(food, colors))
```

**Up Next**: What about modules that *aren't* in the standard library?
---

## What is a Package?

A package, also called a **library**, is  a place where one or more related modules are stored.

* In technical terms, *one or more* modules bundled together under a single namespace.
* A package is like a folder, while a module is like a file.

The [Python Standard Library](https://docs.python.org/3/library/) bundles all common modules - it's the package with `itertools` and `random` modules inside it.

**All packages are modules, but not all modules are packages.**

**Talking Points**:

* "Both `library` and `package` are technically correct and we can use the terms interchangeably."
* "PyTime is an interesting example of a package, because it only has one module in it"

---

## We Do: ModuleNotFoundError

The Python Standard Library has a [huge list](https://docs.python.org/3/library/index.html) of modules. But not every Python module in the world is part of it!

`pytime` is a non-standard module. PyTime can:

* Get dates, date ranges, and times.
* Find the date of a particular holiday.

Create a new file called `pytime_test.py`. Put this line in it and run it:

```python
import pytime
```

What's happened?

`ModuleNotFoundError`:

* The module isn't part of the standard library.
* If we want to use modules from other packages, we'll have to tell Python that those packages exist.

* it's just one line, note that you'll be building on it.

**Talking Points**:

* "Of course, not every module or package out there is part of the standard library. Those that are more industry-specific such as `numpy` for data science, `flask` for web development, or `pygame` for game development are excellent tools for you to use. They just aren't included because not everyone uses them."

* "ModuleNotFoundError happens when you try to use a module that doesn't exist. This  could  be because it isn't installed or it actually doesn't exist - maybe you made a typo. In any case, Python  can't find it!

---

## Including PyTime

When importing from the standard library, the package is implied:

```python
# (from standard) import MODULE
import random
```

Otherwise, you need to specify the package!

```python
# from PACKAGE import MODULE
from pytime import pytime

# The names don't need to be the same:
from pygame import joystick
# Yes - that's real!
```

Change your file to read `from pytime import pytime`. Does it work?

> **Protip**: Remember that *package* means *library*!

**Talking Points**:

* "Because pytime is a package, we need to import the pytime module FROM the pytime package. It's a little confusing because they have the same name! But as you'll see in a moment, in the code itself, one is a folder name and the other is a file name."
* "You can see with joystick and pygame that modules and packages don't need to have the same name."

---

## Installing PyTime

New packages need to be installed.

* Let's install `pytime`.  

In your command prompt:

```bash
pipenv install pytime
```

Once that's successful, try again to run your file.

> **Protip**: `pip` stands for `Pip Installs Packages`. `pip3` uses Python3.
>
> Note: Repl.it is a great website for testing, because it automatically installs libraries for us.

* Make sure you successfully install pytime and run your file.
* You might get stuck on `pipenv` - walk around the room to be sure you've all installed pytime successfully. Consider you might need `python3 -m pip install pytime`

**Talking Points**:

* "If we want to use `pytime` in repl.it, it will automatically download it for us. How nice!"
* PIP3: "**Note**: Remember `pipenv` stands for `Pip Installs Packages`. This helps us download and use the modules/packages we need. The `3` just makes sure we're using Python 3!"

---

## PyTime Holidays

Let's explore PyTime:

* Scan the [PyTime docs](https://github.com/shinux/PyTime), to find the `mother` function.

When is Mother's Day?

```python
# This gets mother's day of 2016
mothers_day = pytime.mother(2016) # 2016-05-08
```

What about this year?

```python
# This gets mother's day of this year
mothers_day = pytime.mother()
```

Try these in your file to be sure you can call PyTime functions!

**Talking Points**:

* "Let's explore the PyTime docs together."
* "To start out, let's just focus on the holidays"
* After Examples: "**Note**: It turns out that pytime defaults to the current date when there are no arguments provided."
* Before Going to Next Slide: "Looking through the documentation, we see uses of `father` and `easter` functions. They work the same way as `mother` where you may provide a `year` as an argument or let it default to the current year."

---

## Quick Review

Not all modules are in the standard library. If you try to import a module Python doesn't recognize, you'll get a `ModuleNotFoundError`.

When importing from the standard library, the package is implied:

```python
# (from standard) import MODULE
import random
```

Otherwise, you need to specify the package!

```python
# from PACKAGE import MODULE
from pytime import pytime
from pygame import joystick
```

If you're using a non-standard package like `pytime` or `pygame`, you'll have to also install it.

You can use the website repl.it for testing small pieces of code - it has packages installed.

**Up next**: Continuing exploring documentation.

---

## You Do: PyTime Festivals

Look through the [PyTime docs](https://github.com/shinux/PyTime);_ can you find the `father` and `easter` functions?

In your local file, pick a year. In that year, print the month and day of:

* Mother's Day.
* Father's Day.
* Easter Sunday.

5 minutes

---

## We Do: The Grinch Who Stole Christmas?

Why does the documentation only have 3 holidays?

Time for some sleuthing! Most times, you only need to look at a module's documentation. However, sometimes the person that did the documenting didn't write everything down.

Because a module is simply a `.py` file, we can view it.

* Open up the project's [Github page](https://github.com/shinux/PyTime).
* Look at the files and folders near the top of the page.
* Click on the folder `pytime`.
* Click on the file `pytime.py`.
* Scroll down to the `Festivals` section at the bottom of the file.
* What function do you see which would likely give you Christmas Day?

* A module is just a python file filled with functions.
* Show examples of a couple other holidays, such as Valentine's Day
* Be sure everyone understands what they've done here.

---

## You Do: Using the PyTime Module

In your `pytime_test.py`:

1. Decide on a list of three holidays you like.

* (e.g. Christmas, Halloween...)

1. Write a function that prompts a user for a year and a holiday.

* (e.g. "Enter a year", then "Choose Christmas, Halloween, or Mother's Day")

1. Have your function print out the date of that holiday for that year.

* (e.g. "In 2016, Mother's Day was on 2016-05-08")

5 min

---

## Summary and Q&A

Modules are `.py` files with functions. They're written by other people for us to use!

* A packages (a.k.a. library) is a bundle of one or more modules.
* Python's standard library has a lot of common modules! `random`, `itertools`, etc.
* Nonstandard libraries need to be installed (`pip3 install pytime`).

To use modules, at the top of your file, put:

```python
# From the standard library: `import MODULE`
import random

# From non-standard packages: `from PACKAGE import MODULE`
from pytime import pytime
from pygame import joystick

# And preface your function with the module name.
mothers_day = pytime.mother(2016) # 2016-05-08
```

---

## Additional Resources

* [Python Modules](https://docs.python.org/3/tutorial/modules.html)
* [Python's Standard Library](https://docs.python.org/3/library/index.html)
* [Write a module in python 3 - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-write-modules-in-python-3)
* [Itertools](https://docs.python.org/3/library/itertools.html)
* [Random](https://docs.python.org/3/library/random.html)
* [PyTime](https://pypi.org/project/pytime/)
* [List of Commonly Used Packages](https://pythontips.com/2013/07/30/20-python-libraries-you-cant-live-without/)
* [Useful Modules by Discipline](https://wiki.python.org/moin/UsefulModules)
* [Further Reading](https://www.learnpython.org/en/Modules_and_Packages)
* [Formatting Datetime](https://docs.python.org/3.0/library/datetime.html#strftime-behavior)
