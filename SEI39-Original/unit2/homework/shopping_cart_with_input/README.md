[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Shopping Cart

So far you've learned the following about React:

- Creating and nesting Components
- Passing props and how to using them in JSX
- Importing and setting up state
- Updating state and re-rendering the Component
- Adding and calling event listeners
- Capturing user input

Now it's time to put it all together.

## Working Version

Here is a [working version](https://cmix9.csb.app/) of the app so you have a reference of the base functionality that you are being asked to implement.

## Starter Codes

Found in the starter_codes directory.

## Instructions

For this exercise you will do the following:

#### Form Component

- Create a new Form Component that provides the user the following inputs:
  - product name
  - price
  - submit button
- The inputs will be `controlled` and only when the user submits will the values be captured
- The Component will pass the data captured to it's parent (App)

#### App Component

- Examine the working live solution and look over the HTML elements
- Will pass down a function to the child that will allow it to pass it the product value back up
- Update state to include the value which will then update the UI to show that item

#### Bonuses

- Show the new product at the top of the list
- Refactor the `uncontrolled` form to be `controlled`

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
