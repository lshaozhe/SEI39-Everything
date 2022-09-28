[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Static Files

## Lesson Objectives

1. Create a static files folder for CSS/JS

## Create a static files folder for CSS/JS

- CSS/JS code doesn't change with server-side data
- We can toss any static files into a 'public' directory
  - static means unchanging
  - dynamic means changing depending on data

Let's set up a directory for our static code:

1. Create a directory called `public`
1. Inside the `public` directory create a directory called `css`
1. Inside the `css` directory, create an `app.css` file
1. Put some CSS in the `app.css` file
1. Inside server.js place the following near the top:

```javascript
// tells express to try to match requests with files in the directory called 'public'
app.use(express.static("public")); 
```

1. In your html, you can now call that css file

```html
<link rel="stylesheet" href="/css/app.css">    
```

Let's try some CSS

```css
@import url("https://fonts.googleapis.com/css?family=Comfortaa|Righteous");

body {
  background: url(https://images.clipartlogo.com/files/istock/previews/8741/87414357-apple-seamless-pastel-colors-pattern-fruits-texture-background.jpg);
  margin: 0;
  font-family: "Comfortaa", cursive;
}

h1 {
  font-family: "Righteous", cursive;
  background: antiquewhite;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 1em;
  text-align: center;
}

a {
  color: orange;
  text-decoration: none;
  text-shadow: 1px 1px 1px black;
  font-size: 1.5em;
  background: rgba(193, 235, 187, 0.9);
  /* padding: .25em;
  margin: .5em; */
}

a:hover {
  color: ghostwhite;
}

li {
  list-style: none;
}

li a {
  color: mediumseagreen;
}

input[type="text"] {
  padding: 0.3em;
}

input[type="submit"] {
  padding: 0.3em;
  color: orange;
  background: mediumseagreen;
  font-size: 1em;
  border-radius: 10%;
}
```

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
