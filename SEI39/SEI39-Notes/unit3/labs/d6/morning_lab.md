[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# The Captain's Log

![Insert Pun Image here](https://i.imgflip.com/2174sq.jpg)

#### Learning Objectives

- Full CRUD app with a mongo database

#### Prerequisites

- JavaScript
- Express / Node 
- Mongo / Mongoose

---

## Multi-part Lab

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:
 - to align with the content of lecture
 - to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

If you finish lab early consider:
  - adding some CSS and practice styling your app
  - try working with the date object! Try to make it look human readable in HTML. It's tricky! [A Hint](https://momentjs.com/)
  - try working through the next section of the lab before it is covered in lecture - see what you can figure out
  - **SUPER BONUS** - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do you own research of how to set up a `one-to-many` relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google, or [Matt's Notes](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Stan-Lee/tree/master/unit_2/w07d01/instructor_notes) - note we will not have class time to teach a second, related model. 

### Set up

Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

#### Restful Routes
|#|Action|URL|HTTP Verb|mongoose method|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1| Show | /logs/ | GET | Log.find()|
|2| Create | /logs/ ||||
|3| Update |||||
|4| Destroy ||||||

1. In your `student_labs` folder
1. `mkdir captains_log`
1. `cd catpains_log`
1. create a new express app

### Create
1. create a `create` route in your `server.js` - be sure to follow the Restful convention
1. this would accept title (string), entry (string), shipIsBroken (boolean) 
1. use and configure `body-parser` in your `server.js` (note, this package was once separate, but has been added back in to express [more details](https://expressjs.com/en/4x/api.html#express.urlencoded)
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to

### Mongo
1. install mongoose and configure it in your `server.js`

### Logs Model
1. `mkdir models`
1. `touch models/logs.js`
1. Create the logs schema
  - title: string
  - entry: string
  - shipIsBroken: Boolean (bonus: set a default to true)
    - Super bonus:
      - as a second argument to mongoose.Schema(), add `{ timestamps: true }`

### Upgrade your Create Route
1. Stretch: make a seed file and seed it

### Show Route
1. Fill out your Restful table
1. In `server.js` make a show route, be sure to follow the Restful convention
1. create a mongo query and `res.json` your data as an object
 - title
 - entry
 - whether the ship is broken or not
 - bonus:
  - if you had added time stamps to your model, display the date the entry was created
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to

### Destroy Route
1. Fill out your Restful table
1. make your delete route in your `server.js`
1. make your delete route delete your log and display the deleted log
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to


### Update Route
1. Fill out your Restful table
1. create your edit route in your `server.js`
1. test it to make sure it works as expected (be sure to populate your form with your log's data)
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to

### Router
1. `mkdir controllers`
1. `touch controllers/logs.js`
1. work on refactoring your code so your logs routes are in your controller file, rather than in `server.js`

### Bonuses
1. The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
  1. build out the 4 restful routes for foodlogs, include a new model with whatever properties make sense
1. create a seed file and seed your database
1. if you have timestamps, figure out how to edit/display the edited date

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
