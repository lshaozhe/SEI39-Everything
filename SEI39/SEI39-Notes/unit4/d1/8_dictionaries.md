[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Dictionaries

## Overview

This lesson introduces you to the concept of dictionaries. It begins with simple creation, printing, and changing values. It ends with a series of You Do exercises to build your confidence.

## Important Notes or Prerequisites

This is the beginning of the object-oriented programming unit.

## Learning Objectives

*After this lesson, you will be able to:*

- Perform common dictionary actions.
- Build more complex dictionaries.

---

## Duration

30 minutes

## Agenda

| Duration | Activity                 |
| -------- | ------------------------ |
| 3 mins   | Welcome                  |
| 9 mins   | Introducing Dictionaries |
| 15 mins  | Complex Thoughts         |
| 3 mins   | Summary                  |

---

## Kicking Off Unit 3

In Unit 2, we ended by changing what our movie app printed depending on the value of a variable.

Unit 3 is about **objects** in programming.

- Objects are different kinds of things variables can hold.
- Objects help give our programs more structure and functionality.
- You already have one object down! Lists are an object with built-in functionality like `append()` and `pop()`.

In Unit 3, we're going to add many more objects. By the end, your movie app will have the same functionality, but it will be structured in a totally different way.

Ready? Let's go!

**Talking Points:**

- Now that you have a feel for control flow, let's talk about objects.

---

## Introducing Dictionaries

Think about dictionaries — they're filled with words and definitions that are paired together.

Programming has a dictionary object just like this!

- Dictionaries hold keys (words) and values (the definitions).
- In a real dictionary, you can look up a word and find the definition. In a Python dictionary, you can look up a key and find the value.

![](https://s3.amazonaws.com/ga-instruction/assets/python-fundamentals/dictionary.png)

**Talking Points:**

- We can have an object that holds keys (`'puppy'`, `'pineapple'`, `'tea'`) and their values (`'furry, energetic animal'`, etc.).
- Just like you can look up a word and find the definition in a real dictionary, in a Python dictionary you can look up a key and find the value.

---

## Declaring a Dictionary

Dictionaries in programming are made of **key-value pairs**.

```python
# Here's the syntax:
name_of_dictionary = {"Key1": "Value", "Key2": "Value", "Key3": "Value"}
print(name_of_dictionary[key_to_look_up])
# Prints the value

# And in action...
my_dictionary = {
    "Puppy": "Furry, energetic animal",
    "Pineapple": "Acidic tropical fruit",
    "Tea": "Herb-infused drink",
}

print(my_dictionary)
# Prints the whole dictionary
print(my_dictionary["Puppy"])
# => Prints Puppy's value: "Furry, energetic animal"
```

- Take note of the syntax:
  - Curly braces.
  - Colons between keys and values.
  - Commas between entries. The commas can be hard to see.
- This is basically just like a real dictionary.

**Talking Points:**

- Just like you can look up any word in the dictionary to get the definition, you can just use a key in a dictionary to find the value. This is known as a key-value pair, hence the definition of a dictionary: a set of key-value pairs.

---

## We Do: Dictionaries and Quick Tips

The order of keys you see printed may differ from how you entered them. That's fine!

You can't have the same key twice. Imagine having two "puppies" in a real dictionary! If you try, the last value will be the one that's kept.

What's more, printing a key that doesn't exist gives an error.

Let's create a dictionary together.

- Create a dictionary; print it out; print out a few keys.
- Make your dictionary anything you'd like! Get input from the students on what it should be.
- Dictionaries can be tough, especially with all the syntax. The more practice, the better! Make sure you follow along.
- Try other cases: Use an integer for a key. Try printing a value and show that it fails — just like a real dictionary.

**Talking Points:**

- Keys can be a string or integer.
- You can look up any key — but not the value (just like a real dictionary!).
- Use meaningful keys: `my_zip_code` is better than `some_numbers`.
- The items that are returned when you access a dictionary come in any order they please.
  - This doesn't really matter that much, however, because the typical use case for a dictionary is when you know the exact key for the value you're looking for.
  - But, you should never count on the contents of a dictionary being in any order at all.

---

## We Do: Dictionary Syntax

What if a value changes? We can reassign a key's value: `my_dictionary["Puppy"] = "Cheerful"`.

What if we have new things to add? It's the same syntax as changing the value, just with a new key:
`my_dictionary["Yoga"] = "Peaceful"`.

- Changing values is case sensitive — be careful not to add a new key!

- The more practice, the better.
- Learn how to change and add new keys. Print out the dictionary after each one.
- Note: capitalization matters!

**Repl.it note**: This repl.it [code](https://repl.it/@SuperTernary/python-programming-dictionary-change-key?lite=true) has:

```python
my_dictionary = {
    "Puppy": "Furry, energetic animal",
    "Pineapple": "Acidic tropical fruit",
    "Tea": "Herb-infused drink",
}

print(my_dictionary)
```

---

## Quick Review: Dictionaries

We can:

- Make a dictionary.
- Print a dictionary.
- Print one key's value.
- Change a key's value.

Here's a best practice: Declare your dictionary across multiple lines for readability. Which is better?

```python
# This works but is not proper style.
my_dictionary = {"Puppy": "Furry, energetic animal", "Pineapple": "Acidic tropical fruit", "Tea": "Herb-infused drink"}

# Do this instead!
my_dictionary = {
  "Puppy": "Furry, energetic animal",
  "Pineapple": "Acidic tropical fruit",
  "Tea": "Herb-infused drink"
}
```

2 MINUTES

**Talking Points:**

- We still have our **key-value** pair format separated by commas, however, making it easily readable to a human, which is a good thing.
- Each item is on one line ending with a comma.
- We can do this with any dictionary, regardless of its contents.
- The syntax will remain the same.

---

## Discussion: Collection Identification Practice

What are `a` and `b` below?:

```python
# What object is this?

collection_1 = [3, 5, 7, "nine"]

# What object is this?
collection_2 = {"three": 3, "five": 5, 9: "nine"}
```

1 MINUTE

- Can you tell lists versus dictionaries?
- Think about the difference between an "object" and a "collection" at a high level.

---

## Looping Through Dictionaries

We can print a dictionary with `print(my_dictionary)`, but, like a list, we can also loop through the items with a `for` loop:

**Talking Points:**

- Now, how do we loop through a dictionary? We can use the same `for` loop structure, but, instead of it iterating over each element in the collection, it will iterate over each key. We can then use the key to access the value.
- The lines in our `for` loop work like this:
  - The first line says, "For every key in the `friendzips` dictionary..."
  - The second line says, "… print the value in `friendzips` associated with the provided key."

**Repl.it note:** This repl.it [code](https://repl.it/@SuperTernary/python-programming-dictionary-for-loop?lite=true) has:

```python
my_dictionary = {
    "Puppy": "Furry, energetic animal",
    "Pineapple": "Acidic tropical fruit",
    "Tea": "Herb-infused drink",
}

for key in my_dictionary:
    print(my_dictionary[key])

for key in my_dictionary:
    print(key, ":", my_dictionary[key])
```

---

## Partner Exercise: Dictionary Practice

You know the drill: Grab a partner and pick a driver!

Create a new local file, `dictionary_practice.py`. Write a script that declares a dictionary called `my_name`.

- Add a key for each letter in your name with a value of how many times that letter appears.

As an example, here is the dictionary you'd make for `"Callee"`:

```python
my_name = {"c": 1, "a": 1, "l": 2, "e": 2}
```

Write a loop that prints the dictionary, but formatted.

```python
# The letter l appears in my name 2 times.
```

**Bonus (if you have time)**: If it's only one time, instead print `The letter l appears in my name once`. If it's only two times, instead print `The letter l appears in my name twice.`

5 MINUTES

- This is a partner exercise, so pair up.
- Some of you might be tempted to write a complex script to count the letters in their name; make sure you can do it the simple way first (just setting `"l"` to `2`, for example).
- When students are done or time is up, go over the answer. Also, go over adding the `if` statements for the bonus.

---

## Partner Exercise: Most Popular Word

With the same partner, switch who's driving.

Write a function, `mostPopularWord()`, that takes a list of strings and returns the string that appears the most.

For example:

```python
words = [
    "hello",
    "water",
    "hello"
  ]

print(mostPopularWord(words))
# Prints "hello"
```

**Hints:**

- Create a dictionary with words as keys and the count as the values.
- Check if a key already exists with `if "key_to_check" in my_dictionary:`.

5 MINUTES

---

## Other Values

We're almost there! Let's make this more complex.

In a list or a dictionary, anything can be a value.

- This is a good reason to split dictionary declarations over multiple lines!

- This can be tough. Spend some time here.

**Repl.it note:** This [code](https://repl.it/@SuperTernary/python-programming-dictionary-other-values?lite=true) is:

```python
other_values_in_a_dictionary = {
    "CA": {"key1": "value 1", "another_key": "a value", "Joe": "Even more dictionary!"},
    "WA": ["Trevor", "Courtney", "Brianna", "Kai"],
    "NY": "Just Tatyana",
}

print("Here's a dictionary and list in a dictionary:", other_values_in_a_dictionary)

print("----------")

other_values_in_a_list = [
    "a value",
    {"key1": "value 1", "key2": "value 2"},
    ["now", "a", "list"],
]
print("Here's a list and dictionary in a list:", other_values_in_a_list)
```

---

## Summary and Q&A

Dictionaries:

- Are another kind of collection, instead of a list.
- Use **keys** to access **values**, not indices!
- Should be used instead of lists when:
  - You don't care about the order of the items.
  - You'd prefer more meaningful keys than just index numbers.

```python
my_dictionary = {
    "Puppy": "Furry, energetic animal",
    "Pineapple": "Acidic tropical fruit",
    "Tea": "Herb-infused drink",
}
```

---

## You Do: Reverse Lookup

Finding the value from a key is easy: `my_dictionary[key]`. But, what if you only have the value and want to find the key?

You task is to write a function, `reverse_lookup()`, that takes a dictionary and a value and returns the corresponding key.

For example:

```python
state_capitals = {
    "Alaska": "Juneau",
    "Colorado": "Denver",
    "Oregon": "Salem",
    "Texas": "Austin",
}

print(reverse_lookup("Denver"))
# Prints Colorado
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
