[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to REST

## Lesson Objectives

1. Describe REST and list the various routes
1. Create an Index route
1. Install JSONView to make viewing JSON easier
1. Create a Show route
1. Enhance the data in your data array

## URI Patterns

We want to build maintainable, scalable applications.

To do that, we want to have a plan on how we name our URLs.

Let's say we want to make an app that tracks bookmarks for us.

We want to be able to

- Create a bookmark
- See a list of our bookmarks
- See the details of one bookmark
- Update a bookmark
- Delete a bookmark

Let's take ~5 minutes to answer:
How should we organize our URLs?

## Good URIs shouldn't change

When you provide a link, it should always work.

[resource](https://www.w3.org/Provider/Style/URI)

Some URI Pain points

- version 2.0, reorganization to make the app better (while the app should improve, the URIs should be able to stay constant, if they were designed well)
- confidential/valid/up to date/out of date - how to organize?
- moving files - you should be able to move files without changing the URI
- making the name too specific/have too many details ie putting `/jane` in the URL because she worked on it. Then John takes over part of Jane's work. Yikes.

## Describe REST and list the various routes

Lucky for us, some brilliant minds have developed a URI pattern that solves a lot of the above problems. If we follow the pattern, we can alleviate a lot of pain points.

- REST stands for Representational state transfer
- It's just a set of principles that describe how networked resources are accessed and manipulated
- We have [7 RESTful routes](https://gist.github.com/alexpchin/09939db6f81d654af06b) that allow us basic operations for reading and manipulating a collection of data:

| **URL**          | **HTTP Verb** | **Action** |
| ---------------- | ------------- | ---------- |
| /photos/         | GET           | index      |
| /photos/:id      | GET           | show       |
| /photos/new      | GET           | new        |
| /photos          | POST          | create     |
| /photos/:id/edit | GET           | edit       |
| /photos/:id      | PATCH/PUT     | update     |
| /photos/:id      | DELETE        | destroy    |

## Create an Index route

## Setup our app

1. `mkdir fruits`
1. `cd fruits`
1. touch `server.js`
1. `npm init -y`
1. `npm install express`
1. require express and set up a basic server that logs listening when you start the app
1. start the app with nodemon and make sure it is working

Let's have a set of resources which is just a javascript array. To create an **index** (index = like table of contents, lists all the items) route, we'd do the following:

```javascript
// DEPENDENCIES
const express = require("express");
// CONFIGURATION
const app = express();
const PORT = 3000;

// 'DATA'
const fruits = ["apple", "banana", "pear"];

// ROUTES
// index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// Listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
```

Now go to <http://localhost:3000/fruits/>

Success?

```js
[
  "apple", 
  "banana", 
  "pear"
]
```

**Thought question:** What happens when you go to <http://localhost:3000> ?
Why?

## Install JSON Formatter to make viewing JSON easier

- JSON stands for Javascript Object Notation
- It's just a way to represent data that looks like a Javascript object or array
- JSON Formatter extension just makes it easier to view JSON data.

Install it:

1. Go to <https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa>
1. Click on "Add To Chrome"

## Create a Show route

To create a show route, we'd do this:

```javascript
// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3000;

// 'DATA'
const fruits = ["apple", "banana", "pear"];

// ROUTES
// index route
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

//add show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
```

Now go to <http://localhost:3000/fruits/1>

## Enhance the data in your data array

- Right now are data array `fruits` is just an array of strings
- We can store anything in the array, though.
- Let's enhance our data a bit:

```javascript
// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3000;

// 'DATA'
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

// ROUTES
// index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

// Listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
