[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Express - Update

## Lesson Objectives

1. Create an edit route
1. Create a link to the edit route
1. Create an update route
1. Make the edit page send a PUT request

## Edit

|   #   |   Action   |       URL       | HTTP Verb |
| :---: | :--------: | :-------------: | :-------: |
|   1   |   Index    |    /fruits/     |    GET    |
|   2   |    Show    | /fruits/:index  |    GET    |
|   3   |    New     |   /fruits/new   |    GET    |
|   4   |   Create   |    /fruits/     |   POST    |
|   5   | **Update** | **/fruits/:id** |  **PUT**  |
|   6   |  Destroy   | /fruits/:index  |  DELETE   |

## Update

### Create an update route

In order to UPDATE, we use the http verb PUT.

Inside server.js add the following:

```javascript
app.put("/fruits/:index", (req, res) => {
  // :index is the index of our fruits array that we want to change
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
  res.redirect("/fruits"); //redirect to the index page
});
```

Test with cURL

```bash
curl -X PUT -d name="tomato" -d color="red" localhost:3000/fruits/2
```

```bash
curl localhost:3000/fruits
```

Our last fruit (banana) should now be a tomato

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
