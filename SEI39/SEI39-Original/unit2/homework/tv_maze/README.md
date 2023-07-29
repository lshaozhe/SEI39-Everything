[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# React TVMaze

## Deployed App

https://git.generalassemb.ly/pages/ga-wdi-exercises/react-tvmaze/

## [Start with a Mock](https://facebook.github.io/react/docs/thinking-in-react.html#start-with-a-mock)

First step in creating a React app is to start with a mock and some sample data.
These are the two views for our app:

### The Search Page

![search page](./images/search.png)

I've identified two components on the search page.

1. The top level component, which we'll call `Home`, is boxed in magenta.
2. The search input, a sub-component of `Home`, in yellow we'll call `Search`.

### The Results Page

![results page](./images/results.png)

I've identified three components on this page.

1. The same `Home` top level component.
2. A `results` components which contains results and an option to search again.
3. The individual results

### Component Hierarchy

Given these breakdowns we have a component hierarchy that looks like:

- `Home`
  - `Search`
  - `Results`
    - `Result`

#### Sample Data

Use `results.js` as the result you would get back from any search.

## [Build a Static Version of the App](https://facebook.github.io/react/docs/thinking-in-react.html#step-2-build-a-static-version-in-react)

First we will build a static version of the app passing all of our data by `props`.
This makes it much easier to avoid getting bogged down in tricky details of functionality while implementing the visual appearance of the UI.

## [Identify the Minimal Representation of UI State](https://facebook.github.io/react/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state)

For our app to work we need:

- `movies` (movies to show)
- `query` (title being searched)
- `hasSearched` (boolean determining wether to show the search input or the results)

All of these are subject to change over time and so each must be kept in state.

## [Identify Where Your State Should Live](https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)

Central to considering where state lives is the idea of **one way data flow**.
The react documentation describes this step as "often the most challenging part for newcomers to understand".

Our task here is to look for the component for each aspect of state that could be the one place where that state is managed.

In our app, `query` is needed to keep track of what is going on in the search box, as well as to make the actual query.
This request will return the movies to the same component which managed the query so `movies` should be managed by the same component.
Finally, we have our `hasSearched` flag which we need to set when we make the request so these should all live in the same place.

Currently, the parent to the `Results` and `Search` components is `Home`.
We don't want to clutter our top level component as our app grows so this segues nicely into the idea of Container and Presentational Components.

### [Container & Presentational Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

The above workflow has led to the currently very popular component architecture of distinguishing container and presentational components.

Presentational components are components that render themselves based solely on the information that they receive from props. At this point, all of our components are presentational.

Container components are components whose job it is to exclusively manage state and as props any data needed by its presentational components.

This leads to a very nice division where state management and presentation are cleanly separated.

We are going to create a `SearchContainer` to manage `query`, `shows`, and `hasSearched`.

## [Add Inverse Data Flow](https://facebook.github.io/react/docs/thinking-in-react.html#step-5-add-inverse-data-flow)

The last step is passing callbacks through props to presentational components to provide behavior.
We will need three functions defined on the `SearchContainer` component to provide necessary behavior to `Search` and `Results`:

1. `handleSearchInput` for managing changes to the input field
2. `onSubmitQuery` for kicking of the ajax request
3. `onSearchAgain` to set state back to render the search bar

<!--- > What is the point of all of these `.bind(this)` statements? --->

### Further

Create the ability to sort on different fields.

### Further

Use AJAX (fetch / axios) to get live data for your app, using `https://api.tvmaze.com/search/shows?q=`. 
<!--- Remember to use the `componentDidMount` method for your AJAX calls. --->

### Further

Link the show result to another part of the TVmaze api. For example actors or schedule.

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
