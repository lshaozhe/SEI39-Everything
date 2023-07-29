[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Kingsman: The Secret Service

![](https://imgur.com/UILh3pk.png)

> You've been hired to run the Kingsman Tailor Shop website. To normal, logged out, citizens, the site should appear like a normal website. But to the logged in secret agents, the site should give them access to the secret Fitting Room Three page. There, they should be able to post messages to each other. 

## Activity 

The Kingsman site is still under heavy construction and not yet open to the public, so your main task for now is to just get the sessions and authentication working so that the Fitting Room Three route is only accesible by logged in users.  

### Set Up

- Make sure to pull to get the starter code provided for you in the `kingsman_auth` folder 
  - Read through all the provided code and make sure you understand what's going on
  - We've organized the files using MVC file structure, make sure you understand what goes where and why
- Don't forget to `npm i` before getting started to install all the dependencies 
- Get your app up and running with `nodemon` and `mongod`
  - Remember order matters! In what order should you run those commands?
  - Check the `server.js` file to see what your mongo database will be named
  
### Creating Users 

First things first, we need to be able to create accounts for our agents. Below are the steps required, but not necessarily in order. Read through them and decide what workflow makes the most sense to you! For example, can you create a 'create new user' route without having a user model set up yet? Need help on the workflow? look back at the build notes from this afternoon!

- Create a Users controller in the `controllers` folder
  - The controller should have routes...
    - to get to `users/new` 
    - to create a new user
  - Don't forget to `require` and `app.use` your users controller in `server.js`
- Create a User model in the `models` folder
  - Your User schema should have... 
      - name: string 
      - password: string 
      - messages: array of strings
  - Once you've created the User model, uncomment out the require in `controllers/room.js` (should be around line 4)
  - Require the User model in `server.js`

:red_circle: **Commits:** 
> Commit at least once for each section -- you decide your commit messages!

### Creating Sessions

Now that we can create accounts, we have to create sessions so that only logged in agents can enter Fitting Room 3 

- Remember that we need to install the npm package `express-session` to use sessions with our app
  - After installing it, require it in your `server.js`: `const session = require('express-session')`
  - Don't forget the middleware needed to use it 
    ``` 
    app.use(session({
      secret: "feedmeseymour", //some random string
      resave: false,
      saveUninitialized: false
    }));
    ```
- Create a Sessions controller in the `controllers` folder
  - The controller should have routes...
    - to get to `sessions/new`
    - to create a new session
    - to delete a session 
      - _Think:_ we need to install an npm package for this, what package is it? don't forget to require and use it!
  - Don't forget to `require` and `app.use` your session controller in `server.js`
- Remember! Make sure you add a user to a session when they log in 
   - _Hint:_ you might write something somewhat similar to this in your new session route: `req.session.currentUser = foundUser;`

:red_circle: **Commits:** 
> Commit at least once for each section -- you decide your commit messages!
  
### Encrypting Passwords

Nice work, now we have working users and sessions! But, Fitting Room Three holds classified information, so we want to be as secure as possible. Let's encrypt all our agent's passwords 

- We need to install the `bcrypt` package
  - Require it on `controllers/users.js` and `controllers/sessions.js`
- Update your create a new user route on `controllers/users.js` so that it uses bcrypt to encrypt their password
- Update your create a new session route on `controllers/sessions.js` so that it uses bcrypt to compare passwords and allow login
  
:red_circle: **Commits:** 
> You decide your commit messages!

### Seeding Kingsman Data 

Only the Kingsman Agents should have user accounts. We don't want any regular citizen to be able to enter Fitting Room Three, after all.

- Unless a citizen somehow stumbles upon the `users/new` page, they shouldn't be able to create a new user
  - :footprints: **Stretch Goal 2:** Make it so that even if a logged out citizen stumbled upon the `users/new` page, they are unable to actually see the create new user form or get to the page at all

Now, we need to create the Kingsman Agent's accounts. 

- We've provided you with a seed in the `models/seed.js` file, and connected it in the `server.js` file
  - Take a look at the seed code in the `server.js` file and figure out what route you need to visit in the browser to seed your database
   - *Remember:* You only need to visit the seed route **once**! 
- Check to make sure you've seeded successfully by trying to log in with username `merlin` and password `countryroads`

:red_circle: **Commit:** 
> You decide your commit messages!

### Accessing Fitting Room 3

Now that we have sessions working and our agents have their usernames and passwords -- we can finally work on making Fitting Room 3 an agent-exclusive page. 

- Look at your index `localhost:3000` while logged out. You should not be able to use Fitting Room 3, so let's change that!
 - :footprints: **Stretch Goal:** Make it so that if a logged out user goes to `localhost:3000/room` at all, they cannot access it 
- Sweet, now only agents can enter the fitting room and see the secret messages! 
  - :footprints: **Stretch Goal 2:** Make it so that when a user posts a new message, it shows their username along with the message so that other agents know who posted what

## Hungry for More?

- Do all the stretch goals listed throughout the homework
- Start this all from scratch without using the starter code to practice making a full CRUD app with sessions/authentication

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
