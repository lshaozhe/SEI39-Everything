[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Express - Delete

## Lesson Objectives

1. Create a Delete Route
1. Make the index page send a DELETE request

## Delete

|   #   |   Action    |        URL         | HTTP Verb  |
| :---: | :---------: | :----------------: | :--------: |
|   1   |    Index    |      /fruits/      |    GET     |
|   2   |    Show     |   /fruits/:index   |    GET     |
|   3   |     New     |    /fruits/new     |    GET     |
|   4   |   Create    |      /fruits/      |    POST    |
|   5   |    Edit     |                    |            |
|   6   |   Update    |                    |            |
|   7   | **Destroy** | **/fruits/:index** | **DELETE** |

### Create a Delete Route

Inside our server.js file, add a DELETE route:

```javascript
app.delete('/fruits/:index', (req, res) => {
 fruits.splice(req.params.index, 1); //remove the item from the array
 res.redirect('/fruits');  //redirect back to index route
});
```

Test it using:

```bash
curl -X DELETE localhost:3000/fruits/1
```

See our `index.ejs` has only two list item fruits, apple, banana

```bash
curl localhost:3000/fruits/
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
