[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# CRUD App with Mongoose - Delete and Update

## Lesson Objectives

Deletion:

1. Create a DELETE Route
1. Make the DELETE Route Delete the Model from MongoDB

Edit/Update:

1. Create a link to the edit route
1. Create an edit route
1. Create an PUT route
1. Make the PUT Route Update the Model in MongoDB

## Create a Delete Route

```javascript
app.delete("/fruits/:id", (req, res) => {
  res.send("deleting...");
});
```

## Make the Delete Route Delete the Model from MongoDB

Also, have it redirect back to the fruits index page when deletion is complete

```javascript
app.delete("/fruits/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.send("deleted"); //redirect back to fruits index
  });
});
```

## Create an PUT route

```javascript
app.put("/fruits/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  res.send(req.body);
});
```

## Make the PUT Route Update the Model in MongoDB

```javascript
app.put("/fruits/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.send(updatedModel);
    }
  );
});
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
