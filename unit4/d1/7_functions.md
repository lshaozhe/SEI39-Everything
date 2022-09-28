[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Python Programming: Functions

## Overview

This lesson introduces you to the concept of functions, beginning with regular functions, then parameters, then multiple parameters. It continues with returning values from functions. It ends with a series of You Do exercises.

## Learning Objectives

*After this lesson, you will be able to...*

- Identify when to use a function.
- Create and call a function with arguments.
- Return a value from a function.

## Duration

90 minutes

## Agenda

| Time       | Activity              |
| ---------- | --------------------- |
| 3 minutes  | Welcome               |
| 15 minutes | Basic Functions       |
| 15 minutes | Parameters            |
| 22 minutes | Returns and Exercises |
| 3 minutes  | Summary               |

---

## Let's Consider a Repetitive program

Consider a program that prints a $5 shipping charge for products on a website:

```python
print("You've purchased a Hanging Planter.")
print("Thank you for your order. There will be a $5.00 shipping charge for this order.")

# 10 minutes later...
print("You've purchased a Shell Mirror.")
print("Thank you for your order. There will be a $5.00 shipping charge for this order.")

# 5 minutes later...
print("You've purchased a Modern Shag Rug.")
print("Thank you for your order. There will be a $5.00 shipping charge for this order.")
```

What if there are 1,000 orders?

**Quick Checks**:

- What if there are 1,000 orders? You *can* keep typing this out, but we'd have to rewrite this `print` statement a lot! Do you  think there's anything we can do?
- We can't use loops because the orders aren't made at once!

---

## Functions

We can write a **function** to print the order.

A function is simple — it's a reusable piece of code. We only define it once. Later, we can use its name as a shortcut to run that whole chunk of code.

- Functions are defined using the `def` syntax.
  - `def` stands for "define."
- In this case, we're *defining* a function named 'function_name.'

```python
def function_name():
    # What you want the function to do

# Call the function by name to run it:
function_name()

# 10 minutes later...
function_name()
```

**Protip:**  Don't forget the `()`, and be sure to indent!

**Quick Checks**:

- Functions can be used repeatedly. This  results in much cleaner -  and easier -  code. In this lesson, we'll be taking a look at how we can use functions to group together statements that perform a specific task and reduce repetition in our programs.
- Now Python knows we want to make a shortcut. Whenever we say `print_order` in the future, we want it to perform the same action.
- This is the name we can then use to call the function. Now, Python knows that whenever it sees `function_name`, it should do what's defined in the function.

---

## Seeing Functions in  Action

So we *define* the function, then we can *call* the function by pairing its name with the parenthesis: `print_order()`.

**Repl.it note**: This replit [code](https://repl.it/@SuperTernary/python-programming-functions-planter?lite=true) has

```python
def print_order():
    print("Thank you for your order. There will be a $5.00 shipping charge for this order.")
  
print("You've purchased a Hanging Planter.")
print_order()

print("You've purchased a Shell Mirror.")
print_order()

print("You've purchased a Modern Shag Rug.")
print_order()
```

**Note**:

- Delete the function call and run it, observe that nothing happens by just  defining the function.
- Move the function call ABOVE the function and run it, observe that it shows failure.

**Quick Checks**:

- Next, of course, we have to tell Python what to do when we call `print_order`.
- Following `def` and the function's name, `print_order`, we have a set of parentheses and a colon.
- This is telling Python: *"Hey Python! Do this when the function starts here."*
- What comes next is the code to indicate what the function will accomplish (be sure to indent!)
- We now have a function named `print_order`, and, whenever we call it, Python will run the code `print "Thank you for your order. There will be a $5.00 shipping charge for this order.`
- The code in a function will not run when the function is defined ("This is what you do when it's called"); it will only run when the function is called ("Do what's in the definition now").

---

## Naming a Function

What can you name a function?

- Anything you'd like.
  - But match the *callback*!
- Using `print_order` is more descriptive.

What do you think will happen if you change the function name `print_order` to `finishedOrder` without updating the callback?

**Repl.it note**: This replit [code](https://repl.it/@SuperTernary/python-programming-functions-planter?lite=true) has

```python
def finished_order():
    print("Thank you for your order. There will be a $5.00 shipping charge for this order.")

print("You've purchased a Hanging Planter.")
print_order()
```

1 minute.

**Note**:

- if you change the call back - it will fail to call the function.

---

## Multi-Line Functions

How many lines of code can a function have?

- As many lines of code as you'd like!
- Just indent each line.

```python
def welcome():
    print("Hello!")
    print("Bonjour!")

welcome()
```

**Note**:

- Note that it is like an `if` or `for` statement - anything indented will be run in the function.

---

## We Do: Writing a Function

Let's make this a little more complicated.

Let's write a function together, `high_low`, that prints "High!" if a variable `my_number` is greater than 10 and "Low!" if it isn't.

**Quick Checks**:

- "Let's do this together. First, let's define the function - the word def, then our name, then () and a :"
- "What does our function do? We need an `if` statement  and an `else`."
- "Let's try it - let's set `my_number`, then call the function."

The final code will be:

```python
def high_low():
    if my_number > 10:
        print("High!")
    else:
        print("Low!")

my_number = 17
high_low()

my_number = 8
high_low()
```

---

## You Do: FizzBuzz

This is a *very* common programming question. It's often on job interviews and a buzzword in the industry as a simple but common task to show your understanding.

Open a new Python file, `fizzbuzz.py`.

- Write a program that prints the numbers from 1 to 101.
- But, for multiples of three, print “Fizz” instead of the number.
- For multiples of five, print “Buzz”.
- For numbers which are multiples of both three and five, print “FizzBuzz”.

10 minutes

>> **ANSWER**

```python
def fizz_buzz(num):
    if num % 15 == 0:
        print("FizzBuzz")
    elif num % 5 == 0:
        print("Buzz")
    elif num % 3 == 0:
        print("Fizz")
    else:
        print(num)

for i in range(1, 101):
    fizz_buzz(i)
```

---

## Quick Review: Functions

Functions are reusable chunks of code. They can have anything in them.

- Define functions using the `def` keyword.
- A function must be **called** before the code in it will run!
- You will recognize function calls by the `()` at the end.

```python
# This part is the function definition!
def say_hello():
    print("hello world!")

# This part is actually calling/running the function!
say_hello()
```

You can call them as many times as you'd like, but they need to be defined above the code where you call them.

---

## Discussion: Parameters

Remember this?

```python
def print_order():
    print("Thank you for your order. There will be a $5.00 shipping charge for this order.")

print("You've purchased a Hanging Planter.")
print_order()

print("You've purchased a Shell Mirror.")
print_order()

print("You've purchased a Modern Shag Rug.")
print_order()
```

There's still repetition. How do you think we could improve it?

**Quick Checks**:

- "There's still some repetition there — it always prints, "You've purchased a ..." and we'd need to write out variations of this same sentence hundreds of times. What if you could use the function to dynamically print what the user buys?"

---

## Addressing the repetition

We can dynamically pass a function values. This is a **parameter**.

```python
def print_order(product):
    print("Thank you for ordering the", product, ".")

print_order("Hanging Planter")
# Prints "Thank you for ordering the Hanging Planter."
print_order("Shell Mirror")
# Prints "Thank you for ordering the Shell Mirror."
print_order("Modern Shag Rug")
# Prints "Thank you for ordering the Modern Shag Rug."
```

**Note**:

- Break down the syntax - point out the argument and the parameter. Note that then, we can use the variable `product` as a normal variable like we're used to.
- Refer to parameters as simply handing the function a value for it to use. Compare to a real world example of your choosing - for example, when you make tea, you have a generic "make tea" routine, and the type of tea you make changes.
- Stress descriptive parameters, as functions get more complex!

**Quick Checks**:

- Now that we know how to call functions, let's learn about **parameters**.
- A **parameter** is simply a value that is passed to a function (within the parenthesis)."Let's update our code to accept a parameter of `product`...
- Now, we don't need to know the product name in advance. Instead, when we call the function, we can tell Python, "Run the `print_order` function. Here is the name of the product to use." Then, when Python gets to the line `print "Thank you for ordering the ", product, "."`, it will say "OK, what was I told the product is?" and print that.
- Notice that the parenthesis after def print_order are no longer empty, and now include the parameter product.

---

## Terminology Recap

**Parameter:** The variable that's defined in a function's declaration.

**Argument:** The actual value passed into the function when the function is called.

```python
def my_function(parameter):
    # Does something.

my_function(argument)
```

**Quick Checks**:

- Calling a function that has a parameter lets you wrap a variable when calling the function.. This is called an **argument**, which corresponds to the parameter of the function. When we call the function with the argument `Shell Mirror`, the string is assigned as `product` (or `pineapple`). The function's internal code runs and prints the correct sentence.

---

## Case of the Missing Argument

What happens if you do this incorrectly?

Try removing `"Hanging Planter"` from the code so `print_order` is called with an empty parenthesis. Hit Run.

**Repl.it Note**: This [code](https://repl.it/@SuperTernary/python-programming-function-parameters?lite=true) has:

```python
def print_order(product):
  print("Thank you for ordering the", product, ".")
  print("There will be a $5.00 shipping charge for this order.")

print_order("Hanging Planter")
print_order("Shell Mirror")
print_order("Modern Shag Rug")
```

---

## Partner Exercise: Thanks a Latte

Pair up! Decide who will be the driver and who will be the navigator.

Imagine that you are tasked with creating a program to calculate the total amount, including sales tax, for each item at a coffee shop.

Create a new file, `latte.py`, and type the two functions below into it, which will calculate the total amount for two drinks:

## Pro tip: Don't just copy! Typing will be good practice

---

## Partner Exercise: Thanks a Latte II

```python
def latte_total():
    price = 5.50
    sales_tax_rate = .10
    total_amount = price + (price * sales_tax_rate)
    print("The total is $", total_amount)

latte_total()

def americano_total():
    price = 4.75
    sales_tax_rate = .10
    total_amount = price + (price * sales_tax_rate)
    print("The total is $", total_amount)

americano_total()
```

---

## Keep it DRY (Don't Repeat Yourself)

But what if we have several drinks at the coffee shop?

With your partner, think about a function that could print the total of any drink if you pass it the price, like this...

```python
def calculate_total(price):
    #your code here

calculate_total(5.5) # This  was the latte
calculate_total(4.75) # This was the Americano
```

Your task: Write this!

**Quick Checks**:

- However, what if we wanted to find the total for every item in the coffee shop, including drinks and baked goods? We don't want to have to create a separate function for each item — that's a lot of work on our end. It will also burden our program with repeated code, which we want to avoid (remember, keep it DRY — Don't Repeat Yourself)."

---

## Latte: Solution

How did it go?

Is this close to yours?

>> ANSWER

```python
def calculate_total(price):
    sales_tax_rate = .10
    total_amount = price + (price * sales_tax_rate)
    print("The total is $", total_amount)

calculate_total(5.5) # This will print 6.05.
calculate_total(4.75) # This will print 5.225.
```

---

## Multiple Parameters: Part 1

What about changing sales tax? We can pass as many values into the function as we want - we can have as many parameters as we want.

Here, we have a second parameter, `taxes`:

```python
def calculate_total(price, taxes):
    total_amount = price + (price * taxes)
    print("The total is $", total_amount)

calculate_total(5.5, .10) # "price" is 5.5; "taxes" is .10. This will print 6.05.
calculate_total(4.75, .12) # "price" is 4.75; "taxes" is .12. This will print 5.32.
```

**Protip:** Use a comma-separated list — (parameter1, parameter2, parameter3, parameter4)

**Note**:

- Arguments are separated by the commas, and the the arguments / parameters are assigned in order  (5.5 is price).

**Quick Checks**:

- "Our shop is getting successful, and we have locations opening all across the country. However, each state has a different sales tax rate. If we want to keep using our function to calculate an item's price, we will now also need provide it with the sales tax rate each time. We can add more parameters and arguments by simply separating them with commas.
- "Let's break this down... would you rather buy a drink in the first state or the second? This is a useful function to help you decide.
- "The first argument that's provided, `5.5`, will correspond with the first parameter we provided for the function, `price`.
- "The second argument, `.10`, will correspond with the second parameter, `sales_tax_rate`.

---

## Multiple Parameters: Part 2

With parameters, order matters! Programs don't automatically understand what should go where - they assign values in order.

**Repl.it Note**: this replit [code](https://repl.it/@SuperTernary/python-programming-batman?lite=true) has

```python
def greet_user(firstName, lastName, year, city):
    print("Hello", firstName, lastName, "born in", year, "from", city,  "!")

greet_user("Bruce", "Wayne", 1939, "Gotham")
greet_user("Bruce", 1939, "Gotham", "Wayne")
```

**Quick Checks**:

- Unlike a human, Python doesn't use the variables' names to figure out what they're for. If you tell it that Bruce's last name is 1939, it will believe you! This is why it's important for parameters to have descriptive names, such as "first_name" and "year" — so that we as the humans running the program can pass the right arguments.

---

## Partner Exercise: Functions With Logic

With the same partner, switch drivers. You can use the same file or start a new one.

Let's go back to our shipping example. Depending on the order amount, our user might get free shipping, so the print statement is different.

Use this starter code, which works for one product. Can you build a function from it that works for any `product` and `order_amount`?

```python
product = "Hanging Planter"
order_amount = 35

print("Thank you for ordering the Hanging Planter.")
if order_amount >= 30:
    print("It's your lucky day! There is no shipping charge for orders over $30.00.")
else:
    print("There will be a $5.00 shipping charge for this order.")
```

- **Hint:** You can put any code you'd like inside a function.
- **Reminder:** Don't forget to indent!

>> ANSWER

- it's [here](https://repl.it/@SuperTernary/python-programming-functions-solutions)

**Quick Checks**:

- Let's return to our shipping example with these conditions added to our functions.

The solution is:

```python
def print_order(product, order_amount):
    print("Thank you for ordering the", product, ".")
    if order_amount >= 30:
        print("It's your lucky day! There is no shipping charge for orders over $30.00.")
    else:
        print("There will be a $5.00 shipping charge for this order.")

print_order("Hanging Planter", 35)
print_order("Shell Mirror", 15)
print_order("Modern Shag Rug", 75)
```

---

## Quick Review: Functions with Parameters

**Parameter:** The variable that's defined in a function's declaration.

**Argument:** The actual value passed into the function when the function is called.

Order matters!

```python
def do_something(parameter1, parameter2):
    # Does something.

do_something(argument1, argument2)
do_something(a_different_argument_1, a_different_argument_2)
```

Next up: Returns.

**Quick Checks**:

- "Notice that we can define the function once and then call it multiple times. This is a huge advantage of functions. Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable, and (most importantly) reusable pieces."

---

## The Return

Sometimes, we want values *back* from functions.

```python
def calculate_total(price, taxes):
    total_amount = price + (price * taxes)
    print 'The total is $', total_amount
    
  # Send the total_amount for the drink back to the main program.
    return total_amount

# This just calls the function -  we've seen this.
calculate_total(5.5, .10)

# This is new! Save the amount of this drink into a variable "latte_total."
latte_total = calculate_total(5.5, .10)

# Now, we can  use that variable.
print('Your order total is', latte_total)
```

- `total_amount` is returned to the main program.

- The value in `total_amount` is saved as `latte_total`.

**Note**:

- The code  is in a repl.it [here](https://repl.it/@SuperTernary/python-programming-functions-two?lite=true") to demo.

**Quick Checks**:

- We now know how to communicate with functions in one direction, by passing values using parameters and arguments. However, functions can also communicate back to you and return values. Sometimes we don't necessarily want to show or log something immediately to the console or update something on a page. When we **return** something, it ends the function's execution and "spits out" whatever we are returning.
- With this function, we are sending the `total_amount` back to the main program using the `return` keyword, and saving the returned value into a variable like `latte_total` or `americano_total`.

---

## We Do: Practicing Returns

Let's fill this in together:

- Define a function, `add_two`, that takes a parameter `number`.
- It adds `2` to `number`,  saving that in a new variable, `total`; print `total` out. Then, return `total`.

**Note**:

- Type out the code, explaining it as you do (see below for the code).
- The `print` is there so they  can see that total is the same as `final_var`.
- Mention that `print` statements are a good way to track what your program is doing.

**Quick Checks**:

- Let's create a new variable, `total`, which is simply `number` plus `2`. We use the `return` keyword to specify that the function will output `total`.
- When we call the function with an input of `3`, the integer is assigned as `number` inside the function. Then, the function's internal code runs, creating the `total` variable and returning it as the output. In this case, the function's output is the integer `5`, which we assign to `final_var`.

**The code is:**

```python
def add_two(number):
    total = number + 2
    print(total)
    return total

final_var = add_two(3)
print final_var
```

---

## Discussion: Return Statements With Logic

The `return` statement *exits a function*, not executing any further code in it. What do you think the following will print?

```python
def mystery():
    return 6
    return 5

my_number = mystery()
print my_number
```

**Note**:

- (The answer is 6)
- Walk through this! Consider opening a blank replit and demoing it, if you see head scratching. [Here is one](https://repl.it/@SuperTernary/Empty-Replit?lite=true).

---

## Discussion: What Will Happen?

What do you think will print out?

```python
def add_bonus_points(score):
    if score > 50:
        return score + 10
    score += 20
    return score

total_points = add_bonus_points(55)
print(total_points)
```

**Quick Checks**:

- The code that's below the `return` statement will never be executed and will be ignored completely.
- The function stopped executing at the first `return` statement it hit.
- "Since the score in this case is greater than 50, we will hit the `return` statement `return score + 10`, and the function stops running."

>> ANSWER
>> 65

---

## Exiting a Function

We can also use `return` by itself as a way to exit the function and prevent any code that follows from running.

```python
def rock_and_roll(muted):
    song = "It's only Rock 'N' Roll"
    artist = "Rolling Stones"

    if (muted == True):
        return
        # Here, we use return as a way to exit a function
        # We don't actually return any value.
    print("Now playing: ", song, " by ", artist)

rock_and_roll(True)
```

**Note**:

- [Here  is a replit to show that](https://repl.it/@SuperTernary/python-programming-returns?lite=true). Show changing true to false.

**Quick Checks**:

- "Here, we use `return` as a way to exit the function instead of returning any value. When we call the function and pass in `True` as an argument for `muted`, this statement will never run: `print "Now playing: ", song, " by ", artist`."

---

## Quick Knowledge Check

Looking at this code, where will the function stop if `x` is `10`?

```python
def categorize(x):
    if (x < 8):
        return 8
    x += 3
    if (x < 15):
        return x
  return 100
```

1 minute.

**Quick Checks**:

- After they guess, walk through it. Here's an explanation:
- `x` is greater than `8`
- The first `if` condition is false.

- Adding `3` to `x` with `x += 3`, `x` will be `12`, which is less than `15`.

- This means that the second `if` statement condition is true, and Python will run the line `return x` and then stop running.

---

## Another Knowledge Check

Take this simple `adder` function:

```python
def adder(number1, number2):
    return number1 + number2
```

Which of the following statements will result in an error?

A. `adder(10, 100.)`
B. `adder(10, '10')`
C. `adder(100)`
D. `adder('abc', 'def')`
E. `adder(10, 20, 30)`

1 minute.

**Quick Checks**:

- After they guess, walk through it. Here's an explanation:

- `adder(10, '10')` is incorrect because it tries to combine a string and an integer.

- `adder(100)` will result in an error because it only provides one value.

- `adder(10, 20, 30)` provides too many.

---

## Quick Review: Return Statements

Return statements allow us to get values back from functions:

```python
def add_two(number):
    total = number + 2
    print(total)
    return total

final_var = add_two(3)
print final_var
```

Return statements also exit the function - no further code in the function happens!

```python
def add_bonus_points(score):
    if score > 50:
        return score + 10
    score += 30
    return score

total_points = add_bonus_points(55)
print(total_points) # 65
total_points = add_bonus_points(10)
print(total_points) # 40
```

---

## Partner Exercise: Building a Copy

Get with a partner. Decide who will drive and who will navigate.

In a new local file, write a function, `copy_list`, that takes in a list, `original_list`, as a parameter. Your function should create a new list, `my_new_list` with the contents of the original list.  Your function should return `my_new_list`.

Example:

```python
my_list = [1, 2, 3]
my_new_list = copy_list(my_list)
print(my_new_list)
# Will print [1, 2, 3]
```

**Hint:** you'll need to declare `my_new_list` above (outside of) your `for` loop.

Make sure you run your function to check!

5-10 minutes.

**Quick Checks**:

- When is this useful? If you ever need to copy a list and manipulate it without making changes to the original list.

---

## Partner Exercise: Reversing a List

With the same partner, switch driver and navigator.

In a local file (it can be the same one, if you'd like), write a function, `reverse_list`, that takes in a list, `my_list`, as a parameter. Your function should reverse the list in place and return it.

Example:

```python
my_list = [1, 2, 3]
reversed_list = reverse_list(my_list)
print(reversed_list)
# Will print [3, 2, 1]
```

Make sure you run your function to check!

5-10 minutes.

**Quick Checks**:

- "Awesome job! Let's try a harder one. Switch driver and navigator, and take a few minutes to try and solve this one."

---

## You Do: Reversing a List

Now, work on your own.

In a local file, write a function, `check_list_equality`, that takes in two lists, `first_list` and `second_list`, as parameters. Your function should return  `True` if the two lists contain the same elements in the same order. Otherwise, it returns `False`.

Example:

```python
list_one = [1, 2, 3]
list_two = [1, 2, 3]
list_three = [3, 2, 1]
print(check_list_equality(list_one, list_two)) # True
print(check_list_equality(list_one, list_three)) # False
```

**Hint:** Start by just making sure the lists have the same length!
**Hint**: You'll only need one `for` loop.

5-10 minutes.

---

## Summary + Q&A

Can you now:

- Identify when to use a function?
- Create and call a function with arguments?
- Return a value from a function?

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
