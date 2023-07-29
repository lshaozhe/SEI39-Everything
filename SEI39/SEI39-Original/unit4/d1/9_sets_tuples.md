[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Sets and Tuples

## Overview

This lesson focuses on sets and tuples. It starts with sets, encompassing  We Dos as new functions are introduced, then goes into tuples. It ends with the `type` function and a You Do. If there's time, after the "Additional Reading" slides, there is a sets exercise. This exercises are also in the `xx-additional-exercises` folder, if you don't get to it.

## Important Notes or Prerequisites

- You will be asked to build upon your knowledge of the `list`, so a solid understanding of this concept will be vital.
- The "why" of each datatype is essential and keep circling back around to the "why".
- Much of this lesson contrasts the three data types (tuples, sets, lists) to each other, so that you can see them side by side and start to internalize the differences.

## Learning Objectives

*After this lesson, you will be able to:*

- Perform common actions with sets.
- Perform common actions with tuples.
- Know when to use different data structures.

## Duration

40 minutes

## Agenda

| Duration | Activity |
| -------- | -------- |
| 2 mins   | Welcome  |
| 18 mins  | Sets     |
| 17 mins  | Tuples   |
| 3 mins   | Summary  |

---

## Discussion: Lists

Here are some lists:

```python
unique_colors = ["red", "yellow", "red", "green", "red", "yellow"]
subscribed_emails = [
    "mary@gmail.com",
    "opal@gmail.com",
    "mary@gmail.com",
    "sayed@gmail.com",
]
```

What could be a problem here?

- "Why, in the `subscribed_emails` list, would duplicate entries be a problem? Or unique colors having duplicates?"

- Think about deduplication and the need to ensure unique values, thus dovetailing into sets

---

## Introducing Sets

Lists:

```python
unique_colors = ["red", "yellow", "red", "green", "red", "yellow"]
subscribed_emails = [
    "mary@gmail.com",
    "opal@gmail.com",
    "mary@gmail.com",
    "sayed@gmail.com",
]
```

Sets: Lists without duplicates!

```python
unique_colors_set = {"green", "yellow", "red"}
subscribed_emails_set = {"mary@gmail.com", "opal@gmail.com", "sayed@gmail.com"}
```

- Notice the `[]` versus the `{}`.

**Talking Points**:

- Refresh memories that a *list* is a collection of *elements*, contained within square brackets `[]`:

- "However, there is a specific version of a *list* called a *set*. What makes a set different is that all of the *elements* in a *set* must be unique. That is to say, nothing can appear more than once in a *set*." Sets have curly braces.

---

## How Can We Make a Set?

Making a set via a list - Python removes duplicates automatically.

```python
my_set = set(a_list_to_convert)

# In action:
unique_colors_list = ["red", "yellow", "red", "green", "red", "yellow"]
unique_colors_set = set(unique_colors_list)
# => {"green", "yellow", "red"}

# Instead of passing a list in (a_list_to_convert), we could just type it:
my_set_2 = ["enter", "list", "here"]

# In action:
unique_colors_set_2 = set(["red", "yellow", "red", "green", "red", "yellow"])
# => {"green", "yellow", "red"}
```

Making a set directly, in curly braces:

```python
colors = {"red", "orange", "yellow", "green", "blue", "indigo", "violet"}
```

**Talking Points**:

- "Creating a *set* is easy; we just need to use the `set()` method like this."
- "Because we had two `red`s, Python removed the extra one for us."
- Take note of the difference between parentheses, brackets, and curly braces.

---

## Important Note: Sets

Lists are always in the same order:

- `my_list = ["green", "yellow", "red"]` is always going to be`["green", "yellow", "red"]`
- `my_list[0]` is always  `"green"`; `my_list[1]` is always `"yellow"`; `my_list[2]` is always `"red"`.

Sets are not! Like dictionaries, they're in any order.

- `my_set = {"green", "yellow", "red"}` could later be `{"red", "yellow", "green"}`!
- `my_set[0]` could be `"green"`, `"red"`, or `"yellow"` - we don't know!

We **cannot** do:  `print(my_set[0])` - it could be anything! Python won't let us.

---

## We Do: Creating a Set from a List

Let's pull up a new `set_practice.py` file and make some sets!

- Make a list `clothing_list` containing the main color of your classmates' clothing.
- Using `clothing_list`, make a set named `clothing_set`.
- Use a `for` loop to print out both `clothing_list` and `clothing_set`.
- Try to print an index!

- Be prepared to refresh memories on `for` loops.
- Try to print an index - observe that sets are in any order.

---

## We Do: Adding to a Set

How do we add more to a set?

```python
# In a list:
clothing_list.append("red")

# In a set
clothing_set.add("red")
```

`add` vs `append` - this is because we can't guarantee it's going at the end!

Let's a few colors to `clothing_list` and `clothing_set`, then print them.

- What happens if you add a duplicate?

- Try to add a duplicate, then print. Observe that it just doesn't appear, since sets *cannot* have duplicates.

---

## We Do: Removing from a List and a Set

Remember, lists are always the same order: `["green", "yellow", "red"]`.

- `my_list[0]` is always "green".

Remember, sets are not!

- With the set `{"green", "yellow", "red"}`, `my_set[0]` could be `green`, `red`, or `yellow`.

The same way, we need to be careful about removal:

```python
# In a list:
clothing_list.pop() # Removes and returns the last item in the list.
clothing_list.pop(0) # Removes and returns a specific (here, the first) item in the list.

# In a set
clothing_set.pop() # No! This is unreliable! The order is arbitrary.
clothing_set.pop(0) # No! Python throws an error! You can't index sets.
clothing_set.remove('red') # Do this! Call the element directly!
```

- Walk through these. `pop` from the set and observe that it's *unreliable*.

**Talking Points**:

- Address that for lists, the order matters. For sets, it's irrelevant, so `pop` returns an arbitrary element.
- Discuss the difference between `remove` and `pop`.

---

## Quick Review: Sets vs. Lists

**Lists**:

- The original, normal object.
- Created with `[]`.
- `append()`, `insert(index)`, `pop()`, `pop(index)`.
- Duplicates and mutable.

**Sets**:

- Lists without duplicates.
- Created with `{}` or with `set(my_list)`.
- `add()` and `remove(element)`.

## Quick Review: Sets vs. Lists II

```python
### Creation ###
# List
my_list = ["red",  "yellow", "green", "red"]
# Sets
my_set = {"red",  "yellow", "green"}
my_set2 = set(my_list)
my_set = set(a_list_to_convert)

### Appending a New Value ###
my_list.append("blue")
my_set.add("blue")

### Appending a Duplicate ###
my_list.append("blue")
# => my_list = ["red",  "yellow", "green", "red", "blue",  "blue"]
my_set.add("blue")
# => my_set = {"red",  "yellow", "green", "blue"}

### Removing items: ###
my_list.pop(1)
my_set.remove("red")
```

**Talking Points**:

- Point out again the difference in syntax, especially with curly braces.
- Reinforce `pop` being unreliable.

---

## Discussion: Immutability Thoughts

A set is a type of list which doesn't allow duplicates.

What if, instead, we have a list we don't want to change?

```python
rainbow_colors = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
```

We **don't** want:

```python
rainbow_colors[0] = ("gray")
## Gray's not in the rainbow!
rainbow_colors.pop()
## We can't lose violet!
rainbow_colors.append("pink")
# Pink's not in the rainbow!
```

We want `rainbow_colors` to be **immutable** - the list _cannot_ be changed.

How we do that in Python?

**Talking Points**:

- We're done with sets.
- Immutable means "unchangeable".

---

## Introducing: Tuples

Sets are one specific type of list.

- No duplicates, but mutable.

**Tuples** are another specific type of list.

- Duplicates, but immutable.
- A list that _cannot_ be changed.

```python
rainbow_colors_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
```

When should you use a tuple?

- When you need data protection through immutability.
- When you never want to change the list.

**Talking Points**:

- Point out that with tuples, duplicates are fine! Be clear that tuples are another kind of list, NOT a kind of set.
- Python offers a data structure that provides more secure usage than the wide power of a fully mutable list.
- The **tuple** is a kind of data structure that provides immutable values in a list.
- Once a tuple is created and assigned its elements, no changes can be made to the tuple.
- "Why? Isn't it more useful to work with a list that allows us to change elements when necessary? Doesn't this inflexibility make our code easier to break?

- "We will frequently need the power to create and edit lists, adding and removing items from them. In these instances, use a list."

---

## Tuple Syntax

- Created with parentheses `()`.
- Access values via indices (like regular lists, but *not* like sets).

```python
rainbow_colors_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
print(rainbow_colors[1])
# Prints "orange"
```

- Tuples can be printed with a `for` loop (just like a set or list!).

```python
rainbow_colors_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")

for color in rainbow_colors_tuple:
  print(color)
```

**Talking Points**:

- Tuples work exactly like lists, except that, when you create a tuple, you use parentheses instead of square brackets.
- You can include anything you want, but, for now, we'll add strings.

---

## We Do: Tuples

Let's declare a tuple named `seasons` and set it to have the values `fall`, `winter`, `spring`, and `summer`. We'll print the tuple and each value. Then we'll try to reassign them (we can't)!

[Replit](https://repl.it/@SuperTernary/Empty-Replit)

- Print out each value directly with indexes. Then, use a `for` loop.
- Try to change values - pop, append, and direct reassignment.

---

## Quick Review: Sets, Tuples, Lists

**List**:

- The original, normal object: `["red", "red", "yellow", "green"]`.
- Has duplicates; mutable: `append()`, `insert(index)`, `pop()`, `pop(index)`

**Set**:

- List without duplicates: `{"red", "yellow", "green"}`.
- Mutable: `add()` and `remove(element)`

**Tuple**:

- Has duplicates, but immutable: You can't change it!
- `("red", "red", "yellow", "green")` will *always* be `("red", "red", "yellow", "green")`.

- Think about `add` vs `append` - this is because we can't guarantee it's going at the end!
- Always know about the differences between the `[]` vs `{}` vs `()`
- What do you understand about immutability?

---

## Quick Review: Sets, Tuples, Lists II

```python
### Creation ###
# List
my_list = ["red",  "yellow", "green", "red"]
# Sets
my_set = {"red",  "yellow", "green"}
my_set2 = set(my_list))
my_set = set(a_list_to_convert)
# Tuples
my_tuple = ("red",  "yellow", "green")

### Appending a New Value ###
my_list.append("blue")
my_set.add("blue")
# Tuples -> You can't!

### Removing items: ###
my_list.pop(1)
my_set.remove("red")
# Tuples -> You can't!
```

**Talking Points**:

- Recap the types of braces to create each; remove vs pop; append vs add.
- Remind students that they aren't expected to be syntax experts - they can always look this up. Working programmers look things up every day on the job, but students have to know what things are and what to expect.

---

## Introducing Types

Variables certainly can hold a lot!

- Sets, tuples, and lists are easily confused.
- `type()` tells us what a variable is: set, tuple, list, dictionary, integer, string - anything!

Try it:

[Replit](https://repl.it/@SuperTernary/python-programming-types)

**Talking Points**:

- It's useful to know what datatype a variable is and how to use it. This will work on anything.

**Repl.it Note**: This replit has:

```python
unique_colors = set(["red", "yellow", "green", "red"])
print("unique_colors is", type(unique_colors))
# --
unique_colors_2 = ["red", "yellow", "green", "red"]
print("unique_colors_2 is", type(unique_colors_2))
# --
unique_colors_3 = ("red", "yellow", "green", "red")
print("unique_colors_3 is", type(unique_colors_3))
# --
my_number = 2
print("my_number is", type(my_number))
# --
my_string = "Hello!"
print("my_string is", type(my_string))
```

---

## You Do: List Types Practice

Create a local file, `sets_tuples.py`. In it:

- Create a list (`[]`), set (`{}`), and tuple (`()`) of some of your favorite foods.
- Create a second set from the list.

Next, in every list type that you can:

- Add `"pizza"` anywhere; append `"eggs"` to the end.
- Remove `"pizza"`.
- Re-assign the element at index `1` to be `"popcorn"`.
- Remove the element at index `2` and re-insert it at index `0`.
- Print the element at index `0`.

Print your final lists using a loop, then print their types. Don't throw an error!

10 minutes

---

## Summary and Q&A

We've learned two new types of lists:

Sets:

- A mutable list without duplicates.
- Handy for storing emails, usernames, and other unique elements.

```python
email_set = {"my_email@gmail.com", "second_email@yahoo.com", "third_email@hotmail.com"}
 ```

Tuples:

- An immutable list that allows duplicates.
- Handy for storing anything that won't change.

```python
rainbow_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
```

---

## Additional Reading

- [Repl.it that recaps Tuples](https://repl.it/@SuperTernary/python-programming-tuple-practice?lite=true)
- [Python Count Occurrences of Letters, Words and Numbers in Strings and Lists-Video](https://www.youtube.com/watch?v=szIFFw_Xl_M)
- [Storing Multiple Values in Lists](https://swcarpentry.github.io/python-novice-inflammation/03-lists/)
- [Sets and Frozen Sets](https://www.python-course.eu/sets_frozensets.php)
- [Sets](https://www.learnpython.org/en/Sets)
- [Python Tuple](https://www.programiz.com/python-programming/tuple)
- [Tuples](http://openbookproject.net/thinkcs/python/english3e/tuples.html)
- [Strings, Lists, Tuples, and Dictionaries Video](https://www.youtube.com/watch?v=19EfbO5D_8s)
- [Python Data Structures: Lists, Tuples, Sets, and Dictionaries Video](https://www.youtube.com/watch?v=R-HLU9Fl5ug)

---

## Partner Exercise: Equal Sets

Pair up! Pick a driver.

For two sets to be equal, they simply have to contain the same elements - it doesn't matter what order they're in.

Unfortunately in Python, comparing two sets using `==` will only produce `True` if the elements are in the same order - not what we want!

Write a function that takes two sets and returns `True` if they have the same elements, even if they aren't in the same order.

For example, the second test fails. Your function would instead return `True`.

```python
fruits = ["orange", "pear", "kiwi", "apple", "banana"]

fruits_copy = ["orange", "pear", "kiwi", "apple", "banana"]

fruits_reordered = ["pear", "apple", "kiwi", "orange", "banana"]

print("Copy comparison", fruits == fruits_copy)
print("Reordered comparison", fruits == fruits_reordered)
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
