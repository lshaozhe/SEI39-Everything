[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# MVC

## Lesson Objectives

1. Define MVC and explain why it matters
1. Move our data into a separate file
1. Move our presentation code into an EJS file

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

## Move our presentation code into an EJS file

Now we want to move our **View** code (HTML) into a separate file just like we did with the data

1. Install the NPM package EJS (Embedded JavaScript)

- `npm install ejs`
  - this is a templating library that allows us to mix data into our html
  - the HTML will change based on the data!
  - `npm install ejs`
  - [EJS Documentation](https://ejs.co/)

1. `mkdir views`
1. `touch views/show.ejs`
   - this will be the html for our show route
1. Put some html into `show.ejs`
1. html boilerplate `html tab`
1. Add title
1. Add h1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Fruits Show</title>
  </head>
  <body>
    <h1>Fruits show page</h1>
  </body>
</html>
```

1. Now, in `server.js` instead of `res.send(fruits[req.params.indexOfFruitsArray])`, we can call `res.render('show.ejs')`

- express will 'know' to look inside the `/views` directory
- it will send the html in the `show.ejs` file as a response

## Combining HTML and Data

### Part 1 - send the data to the file

Now lets mix our data into our HTML

1. Our route is acting like the controller now (Remember model is the data, view is what the user sees - the controller handles the logic of getting the data and presenting it to the user). Let's pass the data to the view
1. `res.render` is a function, it takes two arguments:

- the first is which file to render - always a string
- the second is which data should be sent to the file - always an object

```javascript
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("show.ejs", {
    //second param must be an object
    // the key property is the name of the variable we will access the data in our file
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});
```

### Part 2 Using & Rendering the Data in the file

1. In the second argument for our `res.render` function we named a key `fruit`
1. We can access our data in our file by using the same name
1. We can also add JavaScript to our HTML, for example let's use an `if` statement:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Fruit Show</title>
  </head>
  <body>
    <h1>Fruits show page</h1>
    <p>
      The <%= fruit.name %> is <%= fruit.color %>.
      <% if (fruit.readyToEat === true) { %>
        <span> It is ready to eat </span>
      <% } else { %>
        <span> It is not ready to eat </span>
      <% } %>
    </p>
  </body>
</html>
```

1. Note that there are two types of new tags
    - `<% %>` run some javascript
    - `<%= %>` run some javascript and insert the result of the javascript into the HTML

## Update Index Route

Update the index route in `server.js`:

```javascript
app.get("/fruits/", (req, res) => {
  res.render("index.ejs", {
    allFruits: fruits,
  });
});
```

Create an `index.ejs` file

- `touch views/index.ejs`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Fruits Index</title>
  </head>
  <body>
    <h1>Fruits Index Page</h1>
    <ul>
      <% for (let i = 0; i < allFruits.length; i++) { %>
      <li>
        <a href="/fruits/<%=i%>">
          <%= allFruits[i].name %>
        </a>
      </li>
      <% } %>
    </ul>
  </body>
</html>
```

Add a link back to the index route in `show.ejs`:

```html
<a href="/fruits">Back to Index</a>
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
