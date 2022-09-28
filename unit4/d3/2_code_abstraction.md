[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Code Abstraction

## Overview

This lesson starts with `itertools`, walking through `groupby()`, `chain()`, and then `accumulate()`. It then goes into list comprehensions.

### Important Notes

- You aren't learning about modules until the next lesson — just think of `itertools` as a collection of code Python has built that we're using.
- If you are getting the concepts easily, explore other uses for the functions — for example, exponents with `accumulate()`.

## Learning Objectives

In this lesson, students will:

- Use `itertools` to implement efficient looping.
- Use list comprehensions to concisely create lists.

## Duration

60 minutes

## Agenda

| Time    | Activity                     |
| ------- | ---------------------------- |
| 3 mins  | Welcome                      |
| 4 mins  | Introducing Code Abstraction |
| 30 mins | `itertools`                  |
| 20 mins | List Comprehensions          |
| 2 mins  | Summary                      |

---

## Learning Objectives

After this lesson, you will be able to:

- Use `itertools` to implement efficient looping.
- Use list comprehensions to concisely create lists.

---

## What Is Code Abstraction?

A key part of programming is "Don't Repeat Yourself:"

- Write once, use many times.
- Don't repeat yourself (DRY)!
- Have we mentioned this? It bears repeating! 😁

Programmers aren't lazy — they're efficient! 😁

Python is filled with functionality that has already been written for you.

- You didn't need to write `lists.append()` — you just use it!

Code abstraction takes this to the next level.

- Python has many built-in functions that perform common but complicated tasks.

We're going to look at just a few of these.

**Talking Points:**

- Functionality should be in one place, and when you find a variation, it should be abstracted out.
  - A theoretical way of saying "Don't Repeat Yourself."
- But it also means don't repeat the work involved in *producing* the functionality. Write it once, but use it over and over.
- In functional programming, many bits of functionality have already been written and **abstracted** into libraries within the language.
- Many languages, Python included, have built-in ways to access and manipulate data.
- Lists specifically have many standard associated operations.
- Instead of having every Python engineer write these operations over and over, the language provides a single source for this functionality, adhering to the principle of abstraction.

---

## Like What?

Let's look at `itertools`.

- A collection of functions.
- Designed to make looping or iterating easier (iterating tools --> iter-tools)

Using `itertools`, this is what we'll learn to do in the following slides:

```python
# We can group list items:
animals = ["dog", "dog", "dog", "horse", "horse"]
# => dog ['dog', 'dog', 'dog'] - The three dogs are grouped together.
# => horse ['horse', 'horse'] - The two horses are grouped together.

# We can chain lists:
food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
# => lists_chained =['pizza', 'tacos', 'sushi', 'red', 'green']

# We can add elements:
primes = [2, 3, 5, 7, 11, 13]
# => primes_added = [2, 5, 10, 17, 28, 41]
```

- You aren't learning about modules until the next presentation!

---

## Our First Itertool: `groupby()`

Sometimes, our lists contain repeated items that work better for us if they are all grouped together. Using `groupby()`, which Python has written for us in `itertools`, we can take our list and group the items.

- `key`: The name of the group (in this case `dog` and `horse`).
- `group`: A list containing all occurrences of that key from the original list.

All the gibberish-looking stuff is memory addresses. Python tells us, "I made a new object and I put it here." We'll talk about this on the next slide.

**Talking Points:**

- Sometimes, our lists contain repeated items that work better for us if they are all grouped together. The `itertools` modules gives us the `groupby()` function that does exactly this.
- We have an import at the top — we'll discuss that in the next lesson. Just know that it's how we can use `itertools`. Notice when we call a function from `itertools`, we need to preface it with the `itertools` keyword so Python knows where to find it. *Then run the code.*
- The memory addresses just tell us, "There is a new object, and I stored it here." We'll get to it on the next slide — just know that it created something.

- Line 1: This imports the `itertools` code so we can use the functions in it.
- Line 2: This sets up a list with animals in it.
- Line 3: This is where the magic happens:
  - We call `itertools.groupby()` and pass in our list that we want grouped.
  - `groupby()` returns both the **key**, which is like the name of our group, and the **group**, which is all the things in that group.
  - Inside the `groupby()` loop, we simply print those values for each key-group pair.

**Repl.it note: This code is [here](https://repl.it/@SuperTernary/python-programming-itertools?lite=true)**

```python
# Tell Python we're using itertools.
import itertools

# Make our list.
animals = ["dog", "dog", "horse", "horse", "horse", "dog"]

# We are using groupby(), but have to tell Python it came from itertools.
for key, group in itertools.groupby(animals):
    # Key: The name of the group. Group: The items in it.
    print(key, group)
```

---

## Memory Addresses

Everything on your computer has to be stored somewhere! Computers track where things are by assigning them *memory addresses*. This way, when you want to open a picture or file, your computer knows exactly where to look.

But that memory address isn't useful. We can use `list()` to change the address back into a list. *(`list()` is explicit typecasting; do you remember it?)*

**Talking Points:**

- If you put a piece of paper in a filing cabinet, you'll need to know exactly where it is among all the other papers when you want that paper back. You can think of a computer's memory as a filing cabinet.
- So, we sorted the animals list into a new list called `sorted_animals`, and we then converted the `group` returned by the function from an "iterable grouper object" memory address into a list with the `list()` function.
- You don't need to memorize the idea of memory addresses — but if you see something weird like this in your program, that's probably what you're seeing.

**Repl.it note:** This [code](https://repl.it/@SuperTernary/python-programming-itertools-4?lite=true) has:

```python
import itertools

animals = ["dog", "dog", "horse", "horse", "horse", "dog"]

for key, group in itertools.groupby(animals):
    # Call list on the group to get the list at the memory address.
    print(key, list(group))
```

---

## Discussion: Why Is `dog` There Twice?

This is our original list:

`animals = ['dog', 'dog', 'horse', 'horse', 'horse', 'dog']`

`groupby()` gives us this:

> dog ['dog', 'dog']
> horse ['horse', 'horse', 'horse']
> dog ['dog']

Can anyone guess why `dog` is listed twice?

**Quick Check:**

- The answer is that all the `dog`s aren't listed together — `groupby()` only groups consecutive things.

---

## Sorting

`groupby()` is great, but not perfect! It will only group consecutive items. **Always** run `groupby()` on a sorted list (if you forget, you'll remember when `groupby()` returns something strange!).

Can Python sort lists?

- Yes! Everything useful is built in.
- There's a `sorted()` function: `new_sorted_list = sorted(list_to_be_sorted)`.

**Replit note: Code is [here](https://repl.it/@SuperTernary/python-programming-itertools-3?lite=true)**

```python
import itertools

animals = ['dog', 'dog', 'horse', 'horse', 'horse', 'dog']
sorted_animals = sorted(animals)
print("Now sorted, the list is:", sorted_animals, "\n")

for key, group in itertools.groupby(sorted_animals):
  print(key, list(group))
```

---

## Where could `groupby()` be useful?

What if we had a list of tuples? It's a bit hard to read.

```python
things_tuple = [
    ("animal", "wolf"),
    ("animal", "sparrow"),
    ("plant", "cactus"),
    ("vehicle", "yacht"),
    ("vehicle", "school bus"),
    ("vehicle", "car"),
]
```

We could use `groupby()` to get this:

> animal:
>> wolf is a animal
>> sparrow is a animal
>
> plant:
>> cactus is a plant
>
> vehicle:
>> yacht is a vehicle
>> school bus is a vehicle
>> car is a vehicle

**Talking Points:**

- **Question**: "You might be asking yourself why this is useful."
- **Answer**: "It isn't, yet! But wait… there's more!"
- Here is a more complicated, but more useful, example of `groupby()`.
- We're categorizing different things in a list of tuples.

---

## Quick Review

We've looked at our first itertool, `groupby()`. It groups things in lists, tuples, etc. — any collection — by keys.

- `key`: The name of the group (in this case `dog` and `horse`).
- `group`: A list containing all occurrences of that key from the original list.

`groupby()` needs to be run on something sorted. We can sort with another built-in function: `sorted(list_to_be_sorted)`.

We only worked on lists, but tuples are a better use case for `groupby()`. `groupby()` can be run on any collection.

```python
import itertools

animals = ["dog", "dog", "horse", "horse", "horse", "dog"]
sorted_animals = sorted(animals)
print("Now sorted, the list is:", sorted_animals, "\n")

for key, group in itertools.groupby(sorted_animals):
    print(key, list(group))
```

**Up next:** `chain()`!

---

## A New Itertool: `chain()`

With `itertools`, we can **chain** lists:

```python
food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
# => lists_chained =['pizza', 'tacos', 'sushi', 'red', 'green']
```

The `chain()` function takes any number of lists or sequences as parameters to turn into one.

- `chained_list = list(itertools.chain(list1, list2, list3))`

<https://repl.it/@SuperTernary/python-programming-itertools-chain?lite=true>

**Talking Points:**

- Lists are powerful because they are large collections of items that can be processed as a single item.
- In many cases, we can further combine lists into one long list.
- Processing a single list is always more efficient than processing multiple lists in sequence.
- The `itertools` code provides a function called `chain()` that does this.
- The `chain()` function takes any number of lists or sequences as parameters.
  - Remember `*args`?
- It returns a new iterable object (which we convert with `list()`).
- Knowing this, you should be able to write a script to link the lists provided into one.

---

## What Happened to the Plus Operator?

**Question:** Why not just use `+`?

```python
chained_list = food + numbers + colors
print(chained_list)
```

**Answer 1:** `itertools.chain` is more efficient — it's faster, even if it's still too fast for you to notice the difference.

**Answer 2:** `itertools.chain` can contain different types of iterables.

```python
import itertools

food_list = ["apples", "bananas", "oranges"]
numbers_range = range(4)
colors_dictionary = {"green": "peaceful", "blue": "calm", "red": "passionate"}

# ✅ THIS WORKS. YAY!
chained_list = list(itertools.chain(food_list, numbers_range, colors_dictionary))
# => ['apples', 'bananas', 'oranges', 0, 1, 2, 3, 'green', 'blue', 'red']

# 🚫 THIS DOES NOT WORK. DON'T DO IT!
chained_list = food_list + numbers_range + colors_dictionary
```

- "Why not just use the `+` operator?" is a fair question.

---

## You Do: `chain()`

Create a local file, `my_itertools.py`. Put this at the top:

```python
import itertools
```

Below that:

- Create a list of colors.
- Create a dictionary of hobbies.
- Chain them together.
- Print out the chain!

3 MINUTES

---

## Quick Review

Our second `itertool` is `chain()`, which puts lists and other collections together.

The `chain()` function takes any number of lists or sequences as parameters to turn into one.

```python
import itertools

food_list = ["apples", "bananas", "oranges"]
numbers_range = range(4)
colors_dictionary = {"green": "peaceful", "blue": "calm", "red": "passionate"}

chained_list = list(itertools.chain(food_list, numbers_range, colors_dictionary))
# => ['apples', 'bananas', 'oranges', 0, 1, 2, 3, 'green', 'blue', 'red']
```

**Up next:** `accumulate()`!

---

## A New Itertool: `accumulate()`

What else can we do with `itertools`?

- We have `groupby()` and `chain()`.

We can **accumulate** elements — add each index as it goes, making a new list with all the sums.

```python
primes = [2, 3, 5, 7, 11, 13]
# => primes_added = [2, 5, 10, 17, 28, 41]

# How? It adds what's before it.
# [(2), (2+3=5), (5+5=10), (10+7=17), (17+11=28), (28+13=41)]
```

**Pro tip:** It's like the Fibonacci sequence!

**Talking Points:**

- Sometimes our lists hold items that need to be added up or multiplied into a single result.
- We can iterate through the entire list and store an ongoing result…
- … Or, we can import `itertools` and use the built-in `accumulate()` function.
- By default, `accumulate()` will successively add each element in the list.
- It returns a list that contains each result of adding each item to the previous sum.
- Having each result up to the final sum is helpful in machine learning applications.

---

## Working Through `accumulate()`

Run this. Try changing the numbers! Set some to negative or floats.

- How does `accumulate()` work? Change up the numbers.

**Talking Points:**

- We import `itertools` and set up a list of prime numbers to sum.
- Then, we call `itertools.accumulate()` and we pass in the primes list.
- Lastly, we use the `list()` function to convert to a list and store in the `results` variable.
- The accumulator starts at `0`, then adds each index as it goes.
- The final result is this list.

**Repl.it note code is [here](https://repl.it/@SuperTernary/python-programming-itertools-accumulate2?lite=true):**

```python
import itertools

# Start with a numerical list.
primes = [2, 3, 5, 7, 11, 13]

# Pass it to:
results = list(itertools.accumulate(primes))
print(results)
```

```python
[(0+2=2), (2+3=5), (5+5=10), (10+7=17), (17+11=28), (28+13=41)]
```

---

## Quick Review

Those are all the `itertools` we're going to cover!

- `groupby()`: Grouping items in our list or collection.
- `chain()`: Concat lists or collections into one longer list.
- `accumulate()`: Add each element throughout a list, making a new list.

```python
### Chain ###
food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
# => lists_chained =['pizza', 'tacos', 'sushi', 'red', 'green']

### Groupby ###
# Make our list.
animals = ["dog", "dog", "horse", "horse", "horse", "dog"]
for key, group in itertools.groupby(animals):
    # Key: the name of the group. Group: the items in it.
    print(key, group)

### Accumulate ###
primes = [2, 3, 5, 7, 11, 13]
# => primes_added = [2, 5, 10, 17, 28, 41]
```

**Up next**: List comprehensions.

---

## Changing Gears: Modifying a List

`itertools` provides abstraction for iterating over lists. We're done with them!

Let's move on. What about building a new list that's slightly modified from another list? This is *extremely* common, so Python provides us with **list comprehensions**.

For anything where you can make:

```python
for item in old_list:
    if < condition >
      new_list.append(< modification >)
```

You can use list comprehension syntax instead:

```python
new_list = [modification  old_list  [condition]]
```

It turns three lines of code into one!

- Stress that this lesson is about code abstraction, and `itertools` are just one way to do that. We're on list comprehensions now!
- Make sure students understand this code and where pieces match up.

**Talking Points:**

- Lists are some of the most frequently used data structures in any programming language.
- Building a new list out of slightly modified values from another list is an *extremely* common task.
- We could use a loop to do this, but list comprehensions offer more concise syntax.
- Any time we can do the same thing with less code, we should take advantage of it.
  - You know, instead of repeating ourselves!
- Less code means less testing, debugging, and maintaining, which reduces business costs.
- Essentially, we are looping through an `old_list` and applying a `modification` if the `condition` is `True`.
  - Note: We can leave out the `== True`, as it's assumed!

---

## Example: List Comprehension

So, instead of our `for` loop, we can have `# new_list = [modification  old_list  [condition]]`.

Let's run this. Try changing the list or modification.

- Write up the corresponding `for` loop if you have problems understanding.

**Repl.it note code is [here](https://repl.it/@SuperTernary/python-programming-list-comprehensions?lite=true):**

```python
old_list = [1, 2, 3, 4, 5, 6]

squares_1 = []

for number in old_list:
    squares_1.append(number ** 2)

squares_2 = [i ** 2 for i in old_list]

print(squares_1)
print(squares_2)
```

---

## List Comprehensions With a Conditional

How could we only square the even numbers?

We're familiar with a loop:

```python
# All squares
for i in old_list:  # old list
    squares.append(i ** 2)  # modification

# Even squares
for i in old_list:  # Old list
    if i % 2 == 0:  # Conditional
        squares_even.append(i ** 2)  # Modification
```

Now, in a list comprehension:

```python
# new_list = [modification  old_list  [condition]]

squares = [i ** 2 for i in old_list]

# Even squares: The condition is the `if` statement!
squares_even = [i ** 2 for i in old_list if i % 2 == 0]
```

**Talking Points:**

- What if we want to specify squares of only *even* numbers?
- We want the squares of `2, 4, and 6` but NOT `1, 3, or 5`.
- We can specify the condition with an inline `if` statement.
- Remember the `%` operator? We can use `%` to ensure a number is divisible by `2`.

---

## Example: List Comprehension and Conditionals

Let's run this. Try changing the list, modification, or conditional. It's `# new_list = [modification  old_list  [condition]]`.

**Repl.it note code is [here](https://repl.it/@SuperTernary/python-programming-list-comprehensions-2?lite=true):**

```python
old_list = [1, 2, 3, 4, 5, 6]

squares_even = []

for i in old_list:
    if i % 2 == 0:
        squares_even.append(i ** 2)

squares_even_2 = [i ** 2 for i in old_list if i % 2 == 0]

print(squares_even)
print(squares_even_2)
```

---

## Discussion: More Conditionals Practice

We're not limited to math or numerical lists! Any list will work and any `if` conditional will work.

If you can make:

```python
for item in old_list:
    if < condition >
      new_list.append(< modification >)
```

Then you can make:

```python
new_list = [modification  old_list_iteration  [condition]]
```

Let's say we have a string containing both numbers and letters:

```python
my_string = "99 fantastic 13 hello 2 world"
```

We want to write a list comprehension that will make a new list containing only the numbers that appear.

- What is our `modification`?
- What is our `old_list_iteration`?
- What is our `condition`?

**Talking Points:**

- Modification: We aren't really modifying the values — we are just including them if they are digits.
  - If we aren't modifying the items, we can just use the iterator variable from the next part (`i`).
- Iteration: We want to look at each item, so we should use `for i in my_string`.
- Condition: We only want to include digits in the new list, so we need a function to test the elements.
  - The condition begins with `if`, and the `isdigit()` function will return `True` if the character is a digit.
  - We can use the following: `if i.isdigit()`.

---

## Partner Exercise: Creating the List Comprehension

Get with a partner! Pick a driver.

Below, turn the `for` loop into a list comprehension. Discuss with them: Why doesn't it print `[99, 13, 2]`?

3 MINUTES

> Solution:

```python
my_string = "99 fantastic 13 hello 2 world"

nums = [i for i in my_string if i.isdigit()]

print(nums)  # outputs => ['9', '9', '1', '3', '2']
```

**Repl.it note code is [here](https://repl.it/@SuperTernary/python-programming-list-comps-3?lite=true):**

```python
my_string = "99 fantastic 13 hello 2 world"
nums_list = []

for i in my_string:
    if i.isdigit():
        nums_list.append(i)

print(nums_list)  # Prints ['9', '9', '1', '3', '2']
```

---

## Summary and Q&A

**Code abstraction:** Shortcut functions provided by Python for common tasks.

`itertools`:

- Abstraction for loops and iterating.

- `groupby()`: Creates groups of elements in a list matching a key. Sort elements first!
  - `animals = ['dog', 'dog', 'dog', 'horse', 'horse', 'horse']` and `for key, group in itertools.groupby(animals)` creates `dog: ['dog', 'dog', 'dog'], horse: ['horse', 'horse']`

- `chain()`: Creates one long list from many lists.
  - `chained_list = list(itertools.chain(list1, list2, list3))`

- `accumulate()`: Performs some operation on a list and returns the accumulated results.
  - `results = list(itertools.accumulate(primes))`

**List comprehensions:**

- Abstraction for creating a slightly modified list.
  - `new_list = [modification  old_list_iteration  [condition]]`

---

## Additional Reading

- [What Is `itertools` and Why Should I Use It?](https://realpython.com/python-itertools/#what-is-itertools-and-why-should-you-use-it)
- [`groupby()` Docs](https://docs.python.org/3/library/itertools.html#itertools.groupby)
- [`chain()` and Other `itertools`](http://programeveryday.com/post/using-python-itertools-to-save-memory/)
- [Comprehending List Comprehensions](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
