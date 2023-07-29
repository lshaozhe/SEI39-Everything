[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# DOM EVENTS

## LESSON OBJECTIVES

_after this lesson, students will be able to:_

1. Describe what a browser event is
1. Create a click event
1. Use a named, referenced function as the click handler for the listener

## Describe what a browser event is

Every kind of interactivity in the browser is an event: clicks, mouseovers, key presses, scrolling, resizing, loading the page, and more.

When you interact with the browser it checks to see if there is a _listener_ for that interaction.

If there is a _listener_ present, the browser will try to run any _handlers_ for those interactions.

A _handler_ is just a function that runs a desired procedure.

## Create a click event

How can we set up a _click_ event?

We need:

1. An element to set it on
2. A _listener_ that listens for the event: on _which element_ should the event take place
3. A _handler_ that runs the procedure we want to have happen when the event is triggered

Make a button in the html:

```html
<button id="btn">Click me<button>
```

Grab the button in the _JS_ (_DOM_ element):

```javascript
$(()=>{
  const $btn = $('#btn');
  console.log($btn);
})
```

### Event listener

Set an event listener:

Use `.on()` [.on() documentation](http://api.jquery.com/on/)

```javascript
$btn.on('click');
```

The event listener takes a string as an argument. There are just a few strings that it will recognize as valid events, and `'click'` is one of them.

[List of events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Event handler

Add a _function_ that runs what we want to have happen. This function is what _handles_ the event and is called an _event handler_:

```javascript
$btn.on('click', () => {
 console.log('button was clicked!!');
});
```

Notice that we have supplied a function as an argument. The jargon for using a function as an argument to another function is `callback`.

pseudo code for an event listener

```javascript
elem.on(STRING, CALLBACK);
```

### Add Text to the Page on Click

```javascript
$btn.on('click', () => {

 $('body').append("It seems as if it has been clicked!");

});
```

## Use a named, referenced function as the click handler for the listener

The _handler_ that we used for our click was _anonymous_. It was a function that had no name. We just told the listener to run an _anonymous_ function. We can give our function a name and thereby reuse that function with other event listeners.

### Named Function

We can abstract the anonymous function out and give it a name:

Separate function, not inside the listener:

```javascript
const addText = () => {
 $('body').append("It seems as if it has been clicked!");
}
```

We can then reference it in the event Listener:

```javascript
$btn.on('click', addText);
```

With a named function, we can use the same handler for more than one _DOM_ element.

### Referenced Function

Note that we do not invoke the function with parentheses. We do not want to invoke the function right away, we merely want to _reference_ it to be invoked when the listener runs it.

* The function should be defined before it is used in the event listener
* When the function is invoked inside the event listener **leave out the parentheses**. We do not want to invoke the function right away! We merely want to reference that function in the listener.

Here the function is invoked and will run immediately:

```javascript
$btn.on('click', addText());
```

We don't want this! We only want the function to run when the user has clicked on the :black_square_button: button.

Complete code:

```javascript
const $btn = $('#btn');

const addText = () => {
 $('body').append("It seems as if it has been clicked!");
}

$btn.on('click', addText);
```

Let's do something fancier, and toggle the background-color of the page using `.toggleClass()`

```javascript
const changeClass = () => {
  $('body').toggleClass('black');
}

$('#btn').on('click', changeClass);
```

_CSS_:

```css
.black {
  background-color: black;
}
```

---

*Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
