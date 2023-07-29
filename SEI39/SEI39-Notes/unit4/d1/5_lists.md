[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Python Programming: Lists

## Overview

This lesson introduces you to the concept of lists. This begins as basic list operations - accessing elements, `len`, `insert`, `append`, and `pop`.  After an exercise to recap that, it segues into operations on numerical lists - `sum`, `min`, and `max`. It ends with a longer exercise recapping the list operations.

## Lesson Objectives

*After this lesson, you will be able to...*

- Create lists in Python.
- Print out specific elements in a list.
- Perform common list operations.

## Duration

30 minutes

## Agenda

| Duration   | Activity                  |
| ---------- | ------------------------- |
| 3 minutes  | Welcome                   |
| 12 minutes | Basic List Operations     |
| 10 minutes | Numerical List Operations |
| 5 minutes  | Summary                   |

---

## What is a List?

Variables hold one item.

```python
my_color = "red"
my_peer = "Brandi"
```

**Lists** hold multiple items - and lists can hold anything.

```python
# Declaring lists
colors = ["red", "yellow", "green"]
my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha"]

# Strings
colors = ["red", "yellow", "green"]

# Numbers
my_nums = [4, 7, 9, 1, 4]

# Both!
my_nums = ["red", 7, "yellow", 1, 4]
```

- Anything  can be in a list - it's just  a  variable that holds many things.

**Quick Checks**:

- Until now we've used a few different types of variables such as numbers and strings. However, what if we wanted to keep track of more than one thing? Instead of just my single favorite color, how can I store the names of all the colors I like? How can I store the numbers of everyone on my baseball team?

- Python has this problem solved with something called a *List*.

- Because a variable is just a box that can hold information, it can also hold lists. Python knows that your variable will hold a list if it begins and ends with square brackets.

- A list is a data structure in Python, which is a fancy way of saying we can put data inside of it. In the same way you recognize strings by the quotation marks surround them, you can recognize lists by square brackets that surround them."

- Notice in the example below, we have a list but there are strings inside of it. A list can store data of other types! In this case, I have a list of strings that stores my classmates names.

---

## Accessing Elements

**List Index** means the location of something (an *element*) in the list.

List indexes start counting at 0!

| List  | "Brandi" | "Zoe" | "Steve" | "Aleksander" | "Dasha" |
| :---: | :------: | :---: | :-----: | :----------: | :-----: |
| Index |    0     |   1   |    2    |      3       |    4    |

```python
my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha"]
print(my_class[0]) # Prints "Brandi"
print(my_class[1]) # Prints "Zoe"
print(my_class[4]) # Prints "Dasha"
```

**Quick Checks**:

- A very important thing to note about lists is that they start counting at 0. Thus, the first element is considered index 0, the second element is considered index 1, and so on.

- In our previous example, let's print a few specific items. We can access an item by counting from 0 and using square brackets to tell the list which item we want.

---

## We Do: Lists

1. Create a **list** with the names `"Holly"`, `"Juan"`, and `"Ming"`.
2. Print the third name.
3. Create a **list** with the numbers `2`,`4`, `6`, and `8`.
4. Print the first number.

1 MINUTE

---

## List Operations - Length

`len()`:

- A built in `list` operation.
- How long is the list?

```python
# length_variable = len(your_list)

my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha"]
num_students = len(my_class)
print("There are", num_students, "students in the class")
# => 5
```

- even though all examples are strings, these can be performed on any list, no matter what's in it.

**Quick Checks**:

- How many people are in my list? Just as with strings, we can determine how long a list is (i.e., how many elements it has) using the len() method like so.
- Note: We'll get more into functions later. For now, just know that they perform some operation for you and that you can recognize them by the parentheses on the end.

---

## Adding Elements: Append

`.append()`:

- A built in `list` operation.
- Adds to the end of the list.
- Takes any element.

```python
# your_list.append(item)

my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha"]
my_class.append("Sonyl")
print(my_class)
# => ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha", "Sonyl"]
```

**Quick Checks**:

- Forgot to add something to that list? No problem; you can use the .append() method. Suppose a new student joins our class. We can add them to the end of the list with `append`, which is a function built directly into a list. (Notice it is called with a dot after the list, unlike the other function we've used, `len`).

---

## Adding Elements: Insert

`.insert()`:

- A built in `list` operation.
- Adds to any point in the list
- Takes any element and an index.

```python
# your_list.insert(index, item)

my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha", "Sonyl"]
my_class.insert(1, "Sanju")
print(my_class)
# => ["Brandi", "Sanju", "Zoe", "Steve", "Aleksander", "Dasha", "Sonyl"]
```

**Quick Check**:

- However, what happens if we want to add something somewhere else? We can use the .insert() method, which specifies where (i.e., to which index) we want to add the element.

---

## Removing elements - Pop

`.pop()`:

- A built in `list` operation.
- Removes an item from the end of the list.

```python
# your_list.pop()

my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha", "Sonyl"]
student_that_left = my_class.pop()
print("The student", student_that_left, "has left the class.")
# => "Sonyl"
print(my_class)
# => ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha"]
```

**Quick Check**:

- What if someone leaves our class? We need to remove them from the list.
- We can do this with `pop`. Pop drops the last thing off the list. It gives us back the value that it removed. We can take that value and assign it to a new variable, `student that left`. This is called a `return value`.

---

## Removing elements - Pop(index)

`.pop(index)`:

- A built in `list` operation.
- Removes an item from the list.
- Can take an index.

```python
# your_list.pop(index)

my_class = ["Brandi", "Zoe", "Steve", "Aleksander", "Dasha", "Sonyl"]
student_that_left = my_class.pop(2) # Remember to count from 0!
print("The student", student_that_left, "has left the class.")
# => "Steve"
print(my_class)
# => ["Brandi", "Zoe", "Aleksander", "Dasha", "Sonyl"]
```

**Quick Check**:

- "What if someone specific leaves the class?"
- "We can do this with `pop` again. Here, we can give pop the index we want removed. It gives us back the value that it removed. We can take that value and assign it to a new variable, `student that left`."

---

## Partner Exercise: Pop, Insert, and Append

Partner up! Choose one person to be the driver and one to be the navigator, and see if you can do the prompts:

**Repl.it Note:** This replit [has](https://repl.it/@SuperTernary/python-programming-lists-intro?lite=true):

1. Declare a list with the names of your classmates
2. Print out the length of that list
3. Print the 3rd name on the list
4. Delete the first name on the list
5. Re-add the name you deleted to the end of the list

3 MINUTES

---

## !! List Mutation: Warning

This won't work as expected - don't do this!

```python
colors = ["red", "yellow", "green"]
print(colors.append("blue"))
# => None
```

This will work - do this!

```python
colors = ["red", "yellow", "green"]
colors.append("blue")
print(colors)
# => ["red", "yellow", "green", "blue"]
```

**Quick Check**:

- All of the methods above mutate, i.e., change the array in place; they don't give you the mutated, or changed, array back.

---

## Quick Review: Basic List Operations

```python
# List Creation
my_list = ["red", 7, "yellow", 1]

# List Length
list_length = len(my_list) # 4

# List Index
print(my_list[0]) # red

# List Append
my_list.append("Yi") # ["red", 7, "yellow", 1, "Yi"]

# List Insert at Index
my_list.insert(1, "Sanju") # ["red", "Sanju", 7, "yellow", 1, "Yi"]

# List Delete
student_that_left = my_list.pop() # "Yi"; ["red", "Sanju", 7, "yellow", 1]

# List Delete at Index
student_that_left = my_list.pop(2) # 7; ["red", "Sanju", "yellow", 1]
```

- These operations work on lists with both strings and numbers.

---

## Numerical List Operations - Sum

Some actions can only be performed on lists with numbers.

`sum()`:

- A built in `list` operation.
- Adds the list together.
- Only works on lists with numbers!

```python
# sum(your_numeric_list)

team_batting_avgs = [.328, .299, .208, .301, .275, .226, .253, .232, .287]
sum_avgs = sum(team_batting_avgs)
print("The total of all the batting averages is", sum_avgs)
# => 2.409
```

- These only work on lists with entirely numerical values.
- "There's another built-in function, `sum`, used to add a list of numbers together."

---

## List Operations - Max/Min

`max()` or `min()`:

- Built in `list` operations.
- Finds highest, or lowest, in the list.
- Only works on lists with numbers!

```python
# max(your_numeric_list)
# min(your_numeric_list)

team_batting_avgs = [.328, .299, .208, .301, .275, .226, .253, .232, .287]
print("The highest batting average is", max(team_batting_avgs))
# => 0.328
print("The lowest batting average is", min(team_batting_avgs))
# => 0.208
```

**Quick Check**:

- We might want to simply know what is the largest or smallest item in a list. In this case, we can use the built-in functions `max` and `min`.

---

## You Do: Lists

On your local computer, create a `.py` file named `list_practice.py`. In it:

1. Save a list with the numbers `2`, `4`, `6`, and `8` into a variable called `numbers`.
2. Print the max of `numbers`.
3. Pop the last element in `numbers` off; re-insert it at index `2`.
4. Pop the second number in `numbers` off.
5. Append `3` to `numbers`.
6. Print out the average number (divide the sum of `numbers` by the length).
7. Print `numbers`.

- You might pop off index 2 versus the actual 2nd element - watch out for that.

- Answer that's printed:
Max: 8
Average: 4.75
Final list: [2 8 6 3]

---

## Summary and Q&A

We accomplished quite a bit!

```python
# List Creation
my_list = ["red", 7, "yellow", 1]
# List Length
list_length = len(my_list) # 4
# List Index
print(my_list[0]) # red
# List Append
my_list.append("Yi") # ["red", 7, "yellow", 1, "Yi"]
# List Insert at Index
my_list.insert(1, "Sanju") # ["red", "Sanju", 7, "yellow", 1, "Yi"]
# List Delete
student_that_left = my_list.pop() # "Yi"; ["red", "Sanju", 7, "yellow", 1]
# List Delete at Index
student_that_left = my_list.pop(2) # 7; ["red", "Sanju", "yellow", 1]
```

---

## Summary and Q&A II

And for numerical lists only...

```python
# Sum all numbers in list
sum_avgs = sum(team_batting_avgs)
# Find minimum value of list
min(team_batting_avgs)
# Find maximum value of list
max(team_batting_avgs)
```

---

## Additional Resources

- [Python Lists - Khan Academy Video](https://www.youtube.com/watch?v=zEyEC34MY1A)
- [Google For Education: Python Lists](https://developers.google.com/edu/python/lists)
- [Python-Lists](https://www.tutorialspoint.com/python/python_lists.htm)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
