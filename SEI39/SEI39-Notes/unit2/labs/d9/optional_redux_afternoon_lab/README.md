[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Light Levels Refactor For Redux

## Working Version

Here is a [working version](https://r73sr.csb.app/) of the app so you have a reference of the base functionality that you are being asked to implement.

It does not contain `Redux`

<img src="https://i.imgur.com/yx9Z8M0.png" width=500/>

## Starter Codes

Found in the starter_codes directory.

## Instructions

For this exercise you will do the following:

### App Component

- Install redux toolkit packages
- Add Redux to our App by importing `createSlice` and `configureStore` from `@reduxjs/toolkit`
- Move the reducer and initial state to as separate file and refactor to work with Redux
- Import the reducer back into App
- Create a `store` and pass it the imported reducer
- Wrap the child components in `Provider`
- Remove any props being passed down to the child components as they will consume state value from the global store directly

#### Controls Component

- Subscribe component to the redux store
- Create a `mapStateToPropsMap` function that maps state values to their corresponding prop values
- Update the component to use any new mapping names (if needed)
- Dispatch actions

#### Light Component

- Subscribe component to the redox store
- Create a `mapStateToPropsMap` function that maps state values to their corresponding prop values
- Dispatch actions

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
