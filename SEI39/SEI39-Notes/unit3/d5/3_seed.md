[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Creating a Seed Route

## Lesson Objectives

1. Create a Seed Route

## Create a Seed Route

Sometimes you might need to add data to your database for testing purposes.  You can do so like this:

```javascript
app.get("/fruits/seed", (req, res) => {
  Fruit.create(
    [
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ],
    (err, data) => {
      res.redirect("/fruits");
    }
  );
});
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
