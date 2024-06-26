[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# cURL, Create & Middleware

## Lesson Objectives

1. Review RESTful routes
1. Describe what cURL is
1. Describe when we might use cURL
1. Use cURL to test a GET request
1. Use cURL to test a POST request
1. Pass parameters to the server using cURL

### Restful Routes

So far we've been able to see a list of all of our fruits (get index) and we've been able to see one fruit (get show).

Next, we want to be able to create a new fruit. Let's review our 7 restful routes:

|   #   |   Action   |      URL       | HTTP Verb | EJS view filename |
| :---: | :--------: | :------------: | :-------: | :---------------: |
|   1   |   Index    |    /fruits/    |    GET    |     index.ejs     |
|   2   |    Show    | /fruits/:index |    GET    |     show.ejs      |
|   3   |    New     |                |           |                   |
|   4   | **Create** |  **/fruits/**  | **POST**  |     **none**      |
|   5   |    Edit    |                |           |                   |
|   6   |   Update   |                |           |                   |
|   7   |  Destroy   |                |           |                   |

Our create route will require the HTTP action POST. We can't make POST requests through our browser's URL.

Rather, we'll start out by using cURL. cURL will let us test our route. Once we have it working, we can build out some EJS. Always try to build as little as possible and test it.

## Describe what is cURL

- Is a command line tool that acts like a browser's requests
- cURL stands for `client for URL` [Docs](https://curl.haxx.se/docs/)
- You can use it to make requests to a website [Handy resource of flags and commands with an express server](https://gist.github.com/subfuzion/08c5d85437d5d4f00e58)
- All it does is send a request and then take the response and write it to the terminal
  - no formatting

## Describe when we might use cURL

- You want to create a route and test that it works
  - with a GET request, you can just type the route into the URL bar in the browser and see if it works. No muss no fuss  
  - Separate the functionality of EJS from your routes so you build more iteratively and you can isolate bugs better
- In order to test routes like POST:
  - you can't just make the request in the browser by entering the path in the URL bar like you would with a GET request
    - the only way to test a POST request in the browser is via forms
    - if you have to create a form first there is a lot more code to write, before you can test it:
      1. create a /new route
      1. create a `new.ejs` file with forms
      1. have the forms point to the correct POST route
      1. go to the /new route in the browser
      1. fill out the form
      1. click submit
- With cURL, we can make a POST request directly to the server without needing to go through all the set up

## Use cURL to test a GET request

Within the terminal execute the following:

```bash
curl https://generalassemb.ly
```

Neat!

## Use cURL to test a POST request

Set up the following route handler in our fruits app:

```javascript
app.post("/fruits", (req, res) => {
  console.log("Create route accessed!");
  res.send("This route works");
});
```

To make a POST request, we'll need to add some arguments to the terminal command

Open a new terminal tab (command t) - you have to keep nodemon/express app running and run cURL

```bash
curl -X POST localhost:3000/fruits
```

The `-X POST` argument tells curl to make a POST request to the server

## Pass parameters to the server using cURL

Using the above command, the body of the request will be empty

```javascript
app.post("/products", (req, res) => {
  console.log("Create route accessed!");
  console.log("Req.body is: ", req.body);
  res.send(req.body);
});
```

If we want to send in data we need to do so like this:

```bash
curl -X POST -d name="dragon fruit" localhost:3000/fruits
```

or

```bash
curl -X POST -d name="dragon fruit" -d color="pink" localhost:3000/fruits
```

For each new key/value pair, add a new `-d property="value"` argument

```bash
curl -X POST -d name="kiwi" -d color="green" -d readyToEat="on" localhost:3000/fruits
```

### Middleware

We know how to create functionality for each route. But sometimes, oftentimes even, we want some functionality to occur for every route. We can do this by adding `middleware`

```javascript
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
```

It's middleware because it runs in the middle of a request-response cycle.

**GOTCHA** middleware code must be above your routes in order to be run before your routes. Once your route runs the middleware is unreachable/unused.

Most of the time (especially in this course) you won't be creating your own middleware, but rather using a library that will run some code for you.

### Body Parser

Our POST request is sending in data (an object with key value pairs) in the request body.

However, the HTTP protocol just sends ( url encoded) strings. Our express app has no idea what to do with this string.

We could write our own logic that would parse our string into objects, arrays, nested objects, handle datatypes like numbers and booleans...so we'd have a useable data source coming in our POST request.  and then write that logic for every single express app.

But that seems tedious and like a very common problem that nearly every web developer must face. Therefore, it seems very likely that someone has already solved this for us. And indeed, express has a build in function we can use.

There is a bit of a history with body-parser. Express strives to be a minimalist framework. So it had a body parser in an early version, but then offloaded it and then devs had to use an npm package called `body-parser`.  Then the powers that build and maintain express brought it back. Currently it is a built in function

[From the docs](https://expressjs.com/en/api.html#express.urlencoded)

```javascript
// near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));
```

This will take incoming strings from the body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body.  

`extended: false` - has to do with how the data is being parsed (and what kind can be parsed). For this unit, we'll just set this to false.

We can now return to our `post route`

```javascript
app.post("/products", (req, res) => {
  console.log("Create route accessed!");
  console.log("Req.body is: ", req.body);
  res.send(req.body);
});
```

and try again

```bash
curl -X POST -d name="dragon fruit" -d color="pink" -d localhost:3000/fruits
```

We should now get back our updated array.

### Working with Data

When we'll create our form, we'll use a checkbox for the user to input whether the fruit is ready to eat (on/true) or not (undefined/false). Check boxes have values of `on` or `off`.

We want our property of `readyToEat` to be a Boolean - either `true` or false. Let's write some logic to udpate this.

```javascript
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.send(req.body);
});
```

### Fun Times

```bash
curl -L http://bit.ly/10hA8iC | bash
```

```bash
nc towel.blinkenlights.nl 23
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
