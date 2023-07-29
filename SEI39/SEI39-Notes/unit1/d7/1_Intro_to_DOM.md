[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to the _DOM_

## Lesson Objectives

- Define the _DOM_
- Explain what role the _DOM_ plays in a web page
- Relate _HTML_ elements as Parents, Children and Siblings
- Identify common _DOM_ manpipulation patterns:
  - query for an element
  - edit an element
  - add an element
  - remove an element
- Use _DOM_ commands to interact with a page

## Set Up

### Part 1

**`script.js`:**

1. `console.log('stranger things are coming!')`

**`index.html`**

1. `html tab` - to insert _HTML_ boiler plate
1. set title to `Hawkins` inside the head

**`index.html` => `body`:**

1.`<h1>` - with the text 'Welcome to Hawkins'
1.`<div>` with a class of `container`

**`index.html` => `body` => `div.container`:**

1. `<img>` with a `src` of `https://londontheinside.com/wp-content/uploads/2017/11/StrangerThings2.png` and an `alt` of `Welcome to Hawkins`
1. `<h2>` with text `Featuring`
1. `<ul>`

```html
<ul>
  <li>Hawkins National Laboratory</li>
  <li>Hawkins Police Station</li>
  <li>Bradly's Big Guy Supermarket</li>
  <li>Melvad's General Store</li>
  <li>The Palace Arcade</li>
</ul>
```

1. Inside the `body` tag add `script` tag to add a `src`
link the `script.js`.

```html
<script src="script.js" charset="utf-8"></script>
```

1. Load `index.html` in the browser
1. Open the Chrome Developer Console

- Our _HTML_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hawkins</title>
    <script src="script.js" charset="utf-8"></script>
  </head>
  <body>
    <h1>Welcome to Hawkins</h1>
    <div class="container">
      <img
        src="https://londontheinside.com/wp-content/uploads/2017/11/StrangerThings2.png"
        alt="Welcome to Hawkins"
      />
      <h2>Featuring</h2>
      <ul>
        <li>Hawkins National Laboratory</li>
        <li>Hawkins Police Station</li>
        <li>Bradly's Big Guy Supermarket</li>
        <li>Melvad's General Store</li>
        <li>The Palace Arcade</li>
      </ul>
    </div>
  </body>
</html>
```

- Expected appearance:

![hawkins site](https://i.imgur.com/AO2eyzc.png)

- We can also draw our _HTML_ as a tree, with the `document` as the parent, and then have relations of parent and children relationships and sibling relationships

![tree](https://i.imgur.com/mnx7TLM.png)

- The `head` and `body` are children of the `document`
- The `body` is the parent element to `h1` and the `div` with a class of `container`
- The `h1` element and the `container` element are siblings
- Additionally the `li` elements are also siblings or each other
- what relationship does the image have with the `h3`? What about the image and the `div` with the class of `container`?

Being able to relate the different elements in this way is often referred to as 'traversal' and there are JavaScript methods that will help you access the element you want. Oftentimes you'll want to target the child elements or the parent element, rather than the element itself. This will become more apparent as you start to build more complex things.

### _DOM_

The _DOM_ stands for Document Object Model.
When we send _HTML_ to a browser, like we did with our mini Hawkins site, the browser renders the _HTML_ (displays it in a window) and it also creates a giant object that represents the web page. If you are a fan of Stranger Things, you could almost think of the _DOM_ as The Upside Down, a parallel world that is only visible to some (and also, not evil).

As web developers, we can interact with this object (_DOM_) and we can make changes to the _DOM_, the browser will then redraw the web page to reflect the changes we made to the _DOM_.

Open the console in Chrome.

![Chrome console](https://i.imgur.com/p3y5hjr.png)

All web pages start with the root of `document`.

As we start to type `document` in the Chrome console, we see it can be autocompleted because it exists

![document autocomplete in chrome console](https://i.imgur.com/xRBmZGk.png)

We can go one deeper into the body (don't forget to press the up :arrow_up: key to get your previous line)

![body autocomplete in chrome console](https://i.imgur.com/9HCZEeF.png)

And deeper

We can see that the children of the `body` are an `h1`, `element`, a `div` with a class of container:

> document.body.children
>
> > HTMLCollection(2) `[h1, div.container]`

We can keep going deeper and deeper...

> document.body.children[1].children[1].innerText
>
> > `"Featuring"`

This way of accessing elements in the document requires a LOT of typing and always mapping out your web page. And if you change anything one around on your page, the route will likely break (great example of fragile code). So if you moved the `h2` element above the image it would be

```js
document.body.children[1].children[0].innerText
```

Instead of hard-coding our access to different elements, the browser has some built in methods to find the element we are looking for. It's called `querying`

 So we can query the `document` for the `h1` element and change the text inside (referred to as a key-value property of `innerText`) this element. When we change it in the _DOM_ it will also update the browser view.

```js
document.querySelector("h1").innerText = "Welcome to the Upside Down";
```

![update the _DOM_](https://i.imgur.com/cFnMRAm.png)

As we can see as we've updated the _DOM_ in the console, it has also updated our view in the web page.

**Bonus**
We can go to any website, like cnn, look for a specific header and change it to say `Everyone agrees, General Assembly is the Best!` - however, will our changes be permanent? Will we get in trouble with CNN? You could also think about how a Chrome extension could target(query for) ads and hide them.

Let's refresh our page (remember: `command r` also, sometimes you need a `hard` (clears some cached things) refresh you can do that with `command shift r`) and see that we've switched back to Hawkins. Whatever changes we make in the Chrome console, aren't permanent.

We can also manipulate the _DOM_ from a `js` file

Let's grab that code from above and put us back in the upside down:

```js
document.querySelector("h1").innerText = "Welcome to the Upside Down";
```

Uh oh! It didn't work:

![inner Text error](https://i.imgur.com/WkpCyO8.png)

This is because the document is being read from top to bottom and our JavaScript is running before our `h1` has loaded.

There are a couple ways to solve it. For now, let's move our link to our `app.js` to be right before the closing body tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hawkins</title>
    
  </head>
  <body>
    <h1>Welcome to Hawkins</h1>
    <div class="container">...</div>
    <script src="app.js" charset="utf-8"></script>
  </body>
</html>
```

Now, when we refresh our page, we should see our updated `h1`.

### _DOM_ Manipulation

- JavaScript was built to manipulate the _DOM_
- Early JavaScript was challenging to use for complex projects, and although all the basic functionality was built in, creating solutions could be verbose and clunky
- jQuery is a JavaScript library that was created to make manipulating the _DOM_ easier. It built a lot of useful functions and made JavaScript for the _DOM_ easier to write. Later today, we'll learn to use jQuery instead of 'vanilla' JavaScript
- JavaScript has been changing and a lot of better functionality has been built in. Some people would argue that now 'vanilla' JavaScript is a superior solution over jQuery. My personal opinion: use the right tools for the job

Because we're only using 'vanilla' JavaScript for this lesson, and for the rest of the unit we'll be using jQuery - truly don't worry about memorizing the methods for this lesson. Focus on the big concepts. You'll see the same concepts in jQuery.

#### Querying and storing the queried element

It is a common pattern to query for an element and then store it in a variable for reuse

- Let's query for the image

```js
const image = document.querySelector("img");
```

Instead of querying over and over again, we now have our image stored in a variable. Let's console.log it!

```js
console.log(image);
```

![our image element, console logged](https://i.imgur.com/ckCMrWB.png)

#### Changing _CSS_ with JavaScript

Sometimes you want to add or remove a class to change the appearance. Sometimes you want to do it inline with JavaScript - for now let's do it inline:

We can now manipulate our image:

Let's make it disappear!

```js
image.style.display = "none";
```

Let's make it reappear!

```js
image.style.display = "block";
```

Let's make it black and white

```js
image.style.filter = "grayscale(100%)";
```

Let's set the width to 95%

```js
image.style.width = "95%";
```

Finally, let's make it color again

```js
image.style.filter = "";
```

There are tons of different things you can do. The important thing to note is how easy it is to reuse a queried element and manipulate it when you store it to a variable.

#### Creating an element

We can create a new element

Let's create a new image

```js
const eggos = document.createElement("img");
```

Where is it?

In Chrome console:

> eggos
>
> `<img>`

Although we created the element, we haven't appended it anywhere to the _DOM_.

Let's add those eggos to the `div` with a class `container`.

```js
document.querySelector('.container').appendChild(eggos)
```

Yeah, wait! Where is our image? We can see the tag is appended after the `ul` in Chrome console:

![appended image with no src](https://i.imgur.com/QWvbwLS.png)

But it has no attributes. We have to give it a `src` attribute with an image

#### Set an attribute

Many elements have attributes, you can add, edit and remove them  using JavaScript as well.

```js
eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);
```

Oh! They are huge! Let's shrink them down a bit

```js
eggos.style.width = "100%";
```

you could also target this element and style it in a _CSS_ file

#### Remove an element

Getting rid of an element is easy!

```js
eggos.remove();
```

#### Working with a Collection

What if we have more than one element of the same kind?

We have a few list items let's grab them!

```js
document.querySelector("li");
```

Oh snap! We only got our first element!

> document.querySelector("li")
>
> `<li>Hawkins National Laboratory</li>`

To get all of our elements, we have to use a different method

```js
document.querySelectorAll("li");
```

Now we get a `NodeList`

> NodeList(5) [li, li, li, li, li]

This list is like an array - So we can access the first `li` ("Hawkins Laboratory") and change its text to be `"Demo Dog Hangout"`

```js
document.querySelectorAll("li")[0].innerText = "Demo Dog Hangout";
```

![change first list item](https://i.imgur.com/ndSkQEo.png)

Hopefully all those drills of accessing objects and things within the objects is helping us understand how we can access the _DOM_

Let's try a different one

```js
document.querySelectorAll("li")[4].style.color = "hotpink";
```

What did we change there?

Last one: Let's remove Melvad's

When we remove it, will The Palace Arcade lose it's new color?

```js
document.querySelectorAll("li")[3].remove();
```

### Appendix

#### Common 'Vanilla' JavaScript _DOM_ Commands

_DOM_ commands fall into a few broad categories:

- Search / retrieval of elements on the page
- Creating new elements
- Editing the _DOM_
- Traversal (related to search) - navigating the _DOM_

We will only need a small handful of these commands for now. Here is a sample:

- **Search**
  - document.querySelector()
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByName()

- **Creation**
  - document.createElement()
  - node.style
- **DOM editing**
  - node.appendChild()
  - node.removeChild()
  - node.innerText
  - node.setAttribute()
  - node.innerHTML
  - node.id
  - node.classList
- **Traversal**
  - node.childNodes
  - node.children
  - node.firstChild

You might be asking: what is a **node**?

A node is the generic name for any type of object in the _DOM_ hierarchy. A node could be one of the built-in _DOM_ elements such as document or document.body, it could be an _HTML_ tag specified in the _HTML_ such as `<input>` or `<p>` or it could be a text node that is created by the system to hold a block of text inside another element. So, in a nutshell, a node is any _DOM_ object.

Information about nodes was gathered from [here](https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object)

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
