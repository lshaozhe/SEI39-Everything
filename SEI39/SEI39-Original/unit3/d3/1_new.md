[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# New

## Lesson Objectives

1. Create a new route and page
1. Add interactivity to your site with forms
1. Redirect the user to another page

Next, we want to be able to create a new fruit. Let's review our 7 restful routes:

|   #   | Action  |       URL       | HTTP Verb | 
| :---: | :-----: | :-------------: | :-------: | 
|   1   |  Index  |    /fruits/     |    GET    | 
|   2   |  Show   | /fruits/:index  |    GET    |
|   3   | **New**  | **/fruits/new** |  **GET**  | 
|   4   | Create  |    /fruits/     |   POST    |
|   5   |  Edit   |                 |           | 
|   6   | Update  |                 |           | 
|   7   | Destroy |                 |           | 

## Create a new route

1. Let's create a page that will allow us to create a new fruit using a form
1. First, we'll need a route for displaying the page in our server.js file **IMPORTANT: put this above your show route, so that the show route doesn't accidentally pick up a /fruits/new request**

```javascript
// put this above your show.ejs file
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});
```

### Polishing

Right now, on successful POST, our data is just rendered as JSON.

```js
// create
app.post("/fruits", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect("/fruits");
});
```



---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
