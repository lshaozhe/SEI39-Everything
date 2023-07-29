[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# MVC

## Lesson Objectives

1. Define MVC and explain why it matters
1. Move our data into a separate file

## Define MVC and explain why it matters

- One of the core tenants of good programming is to compartmentalize your code
- Already our code is getting a little messy
  - we have data, app instantiation (listening), and routes all in one file
- One way to organize the code is to separate it out into three sections:
  - **M** odels
    - data (javascript variables)
  - **V** iews
    - how the data is displayed to the user (HTML)
  - **C** ontrollers
    - the glue that connects the models with the views
- This allows various developers to divide up a large code base
  - minimizes likelihood of developers overwriting each others code
  - allows developers to specialize
    - one can focus just on getting good with dealing with data
    - one can focus just on getting good with html
    - one can focus just on getting good with connecting the two
- Think of MVC as a restaurant
  - Models are the cook
    - prepares food/data
  - Views are the customer
    - consumes food/data
  - Controllers are the waiter
    - brings food from cook to customer
    - has no idea how food/data is prepared
    - has no idea how the food/data is consumed

## Move our data into a separate file

1. `mkdir models`
1. `touch models/fruits.js`
1. Put your fruits variable in there

```ascii
fruits
  | -> models (folder)
    | -> fruits.js (file)
  | -> node_modules (folder)
  | -> package-lock.json (file)
  | -> package.json (file)
  | -> server.js (file)
```

```javascript
const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  {
    name: "pear",
    color: "green",
    readyToEat: false,
  },
  {
    name: "banana",
    color: "yellow",
    readyToEat: true,
  },
];
```

1. We now require that file in the original `server.js`

```javascript
const fruits = require("./models/fruits.js"); //NOTE: it must start with ./ if it's just a file, not an NPM package

// Test that we have our data
console.log(fruits);
```

1. Empty object! We could have multiple variables in our `/models/fruits.js` file.

    - How does javascript know which variable in `/models/fruits.js` to assign to the fruits const in `server.js` (the result of the `require()` statement)?
    - We must tell javascript which variable we want to be the result of the `require()` statement in `server.js`

```js
//at the bottom of /models/fruits.js
module.exports = fruits
```

Now you should see your fruits data console logged in terminal!

A common error - if you misspell `module.exports` (ie `module.export`) - you will get an empty object. Spelling matters!


### Use postman to view the endpoints

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
