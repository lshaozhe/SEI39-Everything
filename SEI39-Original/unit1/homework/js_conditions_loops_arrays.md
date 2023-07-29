[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Arrays, Loops, and Conditional Reps

#### Learning Objectives

- Practice with Arrays
- Practice with Loops
- Practice with Conditionals

#### Prerequisites

- An introduction to JavaScript

#### Recommendations

- If homework is taking you more than 4 hours to complete:
  - Go to office hours
  - Get on zoom with a classmate
  - Reach out to the instructional team during class time to schedule a 1:1 meeting
  - Don't stress about the Hungry For More section
- If home work is taking you less than 4 hours to complete
  - Work on the Hungry For More section - make the most of your time here and find challenges
  - Help someone who is stuck, teaching is a great way to learn something more in depth
  - Reach out to the instructional team for more challenges/ways to keep growing with your abilities

---

## Getting Started

1. On your computer, create a directory in `sei-##-homework/u1/d2` with your name. e.g. `sei-##-homework/u1/d2/your_name`
1. In directory you created above, create a `answer.js`
1. Keep your answers organized! Included a commented header for each section in your answers file. Something like the following:

```js
////////////////////////////////
// Easy Going
////////////////////////////////

////////////////////////////////
// Get Even
////////////////////////////////

////////////////////////////////
// Fizz Buzz
////////////////////////////////

////////////////////////////////
// Wild Wild Life
////////////////////////////////

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
```

4. TEST YOUR WORK! Make sure that your code works.
5. If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later. You may find some later problems easier or need a break from what you're working on and set some fresh eyes on something you've been stuck on.
6. After each section (even if you're not fully done with it), _add_ and _commit_ your work.

Please use the commit messages that you see at the end of each section (modify it if you need to ie `checkers almost solved`). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.

7. When you are done with your homework, push it to your `origin` (this is your Github) and make an issue on our repo.

**Final note:** You are not alone! Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.

### Part I: HTML & CSS

Prepare yourself for HTML and CSS. Watch the following videos.

Rank you comfort with the following material on a scale of 0 - 5:

0 - I have no idea what it is

1 - I am not sure

2 - I am shakey, I could use a refresher

3 - I almost feel like I've got it

4 - I feel pretty good about the material, but some extra review would help

5 - I got this! I am ready to code

Based on your self-assessed score, watch the appropriate video(s)

The videos are between 5 - 20 minutes long

[Basic HTML](https://www.youtube.com/watch?v=BvJYXl2ywUE)

[Basic HTML Elements](https://www.youtube.com/watch?v=PypMN-yui4Y)

[Advanced HTML Elements](https://www.youtube.com/watch?v=1rbo_HHt5nw)

[HTML Links and Inputs](https://www.youtube.com/watch?v=bFvjE4ZRtSE)

[CSS](https://www.youtube.com/watch?v=1PnVor36_40)

---

### Part II: JavaScript Reps

#### Easy Going

- Write a for loop that will log the numbers 1 through 20.

---

**The commit message should read:** \
"Easy Going answered"

---

#### Get Even

- Write a for loop that will log only the even numbers in 0 through 200.
  > Hint: Think about the increment expression.

---

**The commit message should read:** \
"Get Even answered"

---

#### Fizz Buzz

This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

1. Write a javascript application that logs all numbers from 1 - 100.
1. If a number is divisible by 3 log "Fizz" instead of the number.
1. If a number is divisible by 5 log "Buzz" instead of the number.
1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

---

**The commit message should read:** \
"Fizz Buzz answered"

---

#### Wild Wild Life

Use the following arrays to answer the questions below (name,species ,age, hometown):
You should be modifying the elements by accessing them. It is up to you which methods to use.

```js
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
```

1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
1. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
1. Give D'Art a second hometown by adding "Hawkins".
1. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".

---

**The commit message should read:** \
"Wild Wild Life answered"

---

#### Yell at the Ninja Turtles

1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
1. Use a `for of loop` (not a typo - try it out! Try a `for of` loop) to call `toUpperCase()` on each of them and print out the result.

As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

---

**The commit message should read:** \
"Yell at the Ninja Turtles answered"

---

#### Methods, Revisited

Here is a list of favMovies:

```
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
```

- Console log: the index of `Titanic`

- Do the following and console.log the final results (I have included some _thought_ questions, you don't have to write out an answer for those marked as such):

Note: if you have to add to the array, feel free to add any movie you'd like

1.  use the `.sort` method Thought question: what did this do to the array? Did it permanently alter it?
1.  Use the method `pop`
1.  `push` "Guardians of the Galaxy"
1.  Reverse the array
1.  Use the `shift` method
1.  `unshift` - what does it return?
1.  `splice` "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
1.  `slice` the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
1.  store the value of your `slice` in a variable, console.log it - Thought question: what is going on here?
1.  console.log your final results

- After running the above tasks, console.log the index of "Fast and Furious"

  - Did we remove it from the array? What value do we get when we look for the index of something that is not in the array?

- Thought question: that we declared the variable `favMovies` with `const`, and yet, we were allowed to change the array. Weird? Should we have used `let`?

---

**The commit message should read:** \
"Methods Revisited answered"

---

#### Where is Waldo

- With the following multi-dimensional array

```js
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
```

- Remove Eggbert (hint look at the slice/splice method(s))
- Change "Neff" to "No One"
- Access and console.log "Waldo"

---

**The commit message should read:** \
"Where is Waldo answered"

---

#### Excited Kitten

1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

<details><summary>Hint 1</summary>

Make an array of the kitten's talking points

</details>

<details><summary>Hint 2</summary>

Use bracket notation to access each talking point
`kittyTalk[1];`

</details>

<details><summary>Hint 3</summary>
 Rather than hard-coding the array position number set a variable

```
  let meow = 0;
  kittyTalk[meow]
```

</details>

<details><summary>Hint 4</summary>

You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

</details>

<details><summary>Hint 5</summary>

Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array

</details>

<details><summary>Hint 6</summary>

Then round the number by using another Math method like `Math.floor()` or `Math.ceil()` or `Math.round()`

</details>

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

---

**The commit message should read:** \
"Excited Kittens answered"

---

#### Find the Median

- Find the median number in the following `nums` array, then console.log that number (note: sorting might help).
- _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```

---

**The commit message should read:** \
"Find the Median answered"

---

### Hungry for More?

#### Lab Time Revisited

Choose one that you didn't get to solve in lab

- Fibonnacci
- Checkerboard
- TwoDArray

#### Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
```

#### Alien Attire

1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

#### Dress Us Up

1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

- The commit message should read:  
  "Kristyn and Thom have their outfits ready for class - array practice"

---

#### Dirty Laundry

Continue looking at the closet arrays:

1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

#### Inventory

2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

---

**The commit message should read:** \
"Hungry for More: I tackled..."

---

## Technical Requirements

- A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
- At least one commit message per problem

## Deliverables

There were two parts to the hw, CSS review videos and JavaScript reps and code challenges. Make sure to try and attempt each problem

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
