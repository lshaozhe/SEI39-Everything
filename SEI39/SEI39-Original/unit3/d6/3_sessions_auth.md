[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Express - Bcrypt, Sessions & Environmental Variables

## Lesson Objectives

1. Explain what is Bcrypt
1. Explain what are environmental variables
1. Explain why we need environmental variables
1. Explain what a session is
1. Use express-session package as middleware
1. Save user information on the session object
1. Retrieve user information saved on the session object
1. Update user information saved on the session object
1. Destroy the session

## Explain what a session is

Cookies are little strings of data that get stored on your computer so that, when you return to a web page, it will remember what you did the last time you were there. You can specify how long a cookie will stay around on a browser before it "expires" or is deleted. This can be a specific date, or it can end as soon as the user closes their browser.

The problem with cookies is that if you store sensitive information in them (usernames, etc), someone could take the computer and view this sensitive information just by opening up the web browser. Sessions are basically cookies, but the server stores the sensitive info in its own memory and passes an encrypted string to the browser, which gets stored in the cookie. The server then uses this encrypted string to know what was saved on the user's computer.

Sessions typically only last for as long as the user keeps their window open, and aren't assigned a specific date to expire. **BE CAREFUL: IF YOU RESTART YOUR SERVER, IT WILL LOSE ALL MEMORY OF THE SESSIONS IT CREATED, AND USERS' SESSIONS WILL NOT WORK**

## Set up environmental variables

We need a way to protect our sensitive information and a way to store environmental variables that are specific to our computer (in contrast to a co-workers computer or the environment in a cloud service).

In our class repo, at the route we have a `.gitignore` file. This file tells git which files to never track. In there it states to never track `node_modules` nor `.env` - that way our values stay safely on our machines.

- make sure you are on the same level as your `package.json`
- `npm install` (install dependencies - for this project)
- `touch .env`
- `npm install dotenv`
- in `.env` let's set up the environmental variables for your port and mongo connection string

![](https://i.imgur.com/AcaWX7j.png)

**IMPORTANT** this is NOT a JavaScript file.

- No spaces!
- No semi-colons!
- No quotes!

- In `server.js`
- `require('dotenv').config()`

```js
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODB_URI
```

## Use express-session package as middleware

Install

```bash
npm install express-session
```

Require in `server.js`

```javascript
const session = require("express-session");
```

Use

```javascript
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
  })
);
```

## Save user information on the session object

For each of the routes you create, the `req` variable will now have a session property which is itself an object. You can put things on this.

```javascript
app.get("/any", (req, res) => {
  //any route will work
  req.session.anyProperty = "any value";
});
```

## Retrieve user information saved on the session object

Once you add a property onto the session object, you can retrieve it when a user navigates to any other route. Then you can use it to make decisions based on the design of your application. Remember though, this session will end when the user closes their browser, or you restart your sever app.

```javascript
app.get("/retrieve", (req, res) => {
  //any route will work
  if (req.session.anyProperty === "something you want it to") {
    //test to see if that value exists
    //do something if it's a match
    console.log("it matches! cool");
  } else {
    //do something else if it's not
    console.log("nope, not a match");
  }
  res.redirect("/");
});
```

## Update user information saved on the session object

You can overwrite a session value somewhere else too, just like any other property on a normal JS object.

```javascript
app.get("/update", (req, res) => {
  //any route will work
  req.session.anyProperty = "changing anyProperty to this value";
  res.redirect("/");
});
```

## Destroy the session

Lastly, you can forcibly destroy a session before a user closes their browser window.

```javascript
app.get("/destroy-route", () => {
  //any route will work
  req.session.destroy((err) => {
    if (err) {
      //do something if destroying the session fails
    } else {
      //do something if destroying the session succeeds
    }
  });
  res.redirect("/");
});
```

## Express - Authentication Continued

## Lesson Objectives II

1. Explain what bcrypt does
1. Include bcrypt package
1. Hash a string using bcrypt
1. Compare a string to a hashed value to see if they are the same

## Explain what bcrypt does

bcrypt is a package that will encrypt passwords so that if your database gets hacked, people's passwords won't be exposed

## Include bcrypt package

Standard install

```bash
npm install bcrypt
```

and require

```javascript
const bcrypt = require("bcrypt");
```

## Hash a string using bcrypt

bcrypt does this thing called "salting" a string. It requires you to generate a salt which is used in the encryption process. This must be generated each time you hash a string. If you don't do this, the same string will get hashed to the same value each time. If this were to happen, someone with a common password could hack the database and see whose hashed password had the same value as theirs and know that they have the same password as them.

```javascript
const hashedString = bcrypt.hashSync("yourStringHere", bcrypt.genSaltSync(10));
```

## Compare a string to a hashed value to see if they are the same

Because the same string gets encrypted differently every time, we have no way of actually seeing what the value of the string is. We can compare it to another string and see if the two are "mathematically" equivalent.

```javascript
bcrypt.compareSync("yourGuessHere", hashedString); //returns true or false
```

[Bcrypt in a little more depth - Thanks Eric Lewis!](https://www.dailycred.com/article/bcrypt-calculator)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
