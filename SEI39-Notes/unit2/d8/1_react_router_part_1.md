---
unit: 2
tags: ["react"]
published: true
---

# React Router

![React Router logo](https://i.imgur.com/UcmwbaK.png)

## Learning Objectives

- Use React Router's `BrowserRouter`, `Link`, `Route`, `Redirect`, and `Switch`
  components to add navigation to a React application
- Review the React component lifecycle and use component methods to integrate
  with API calls
- Talk about SPAs

## Framing

Up to this point, our React applications have been limited in size, allowing us
to use basic control flow in deciding what components to render. However, as our React applications grow in size and scope, we need an easier and more robust way of rendering different components.

We will replace standard conditional logic with the ability to render components based on the url.

React Router is the most commonly-used routing library for React. It is relatively straightforward to configure and integrates with the component architecture nicely (since it's just a collection of components).

We will configure it as the root component in a React application. Then we'll
tell it to render other components within itself depending on the path in the
url. This way we don't have to reload the entire page to swap out some data.

### React Bitcoin Prices

Here is what we are looking to build:  [Bitcoin Solution Code](https://9esbr.csb.app/)

### Provider/Consumer Model

During the introduction of `useContext` we first took a look at the `Provider/Consumer` model that was happening under the hood of a React app that was using React Router.  

Let's take a minute once again to open the solution code and view that model again in React DevTools.

> BrowserRouter
>> Router
>>> Router.Provider
>>>> App
>>>>>> Link `ForwardRef`
>>>>>>> Router.Consumer
>>>>>>>> LinkAnchor `ForwardRef`
>>>>>> Link `ForwardRef`
>>>>>>> Router.Consumer
>>>>>>>> LinkAnchor `ForwardRef`
>>>>>>>>> Switch
>>>>>>>>>> Route.Consumer

## React Router Setup

Here is our [Starter Code](https://codesandbox.io/s/bitcoin-starter-swwzg)

<https://codesandbox.io/s/bitcoin-starter-swwzg>

Let's bring in React Router and set it up to allow us to display
multiple components.

---

### :alarm_clock: Activity - 2min

Lets take a look at the [React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start) first before we get started.

---

### Importing Dependencies

First, we need to install the following:

- `react-router`
- `react-router-dom@5` **Note: @5**

:::note

In 2021, React Router v6 was released. As most companies would not have updated to v6, the notes will concentrate on v5 BUT v6 differences will be highlighted.
To install React Router v6 install `react-router-dom`

:::

### Setting Up React Router

There are several Components that will need to make use of from the React Router library.  

### `Router`

React Router first provides us the `Router` component. It talks to the browser and allows us to create `history` (the ability to use the forward/back buttons) with our app, even though we are still on a single-page app.  It also provides us the ability to update the URL to redirect by updating the history object.

As with a components `render()` method the `Router` component also expects to receive only one child element.  The child element can have routes defined or those routes could be even nested further.  

### `Route`

The React Router `Route` component allows us to define a URL endpoint and describe what should load on the page at that point.

### Import and Setup Router

We need to import the `Router` into `index.js` and place it as the root component of our application. `Router` will,
in turn, render `App` through which all the rest of our components will be rendered:

The actual Component name is called `BrowserRouter` however we will take the liberty of renaming it `Router`

#### index.js

```jsx title="index.js"
import { BrowserRouter as Router } from "react-router-dom";
```

And now we wrap it around the `App` Component so that we can make full use or routing.

```jsx title="index.jsx"
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

By making `Router` the root component of our app, it will pass down several
router-specific objects to any components that rendered via `Router`.

Things like current location and url can be accessed or changed. Additionally, in order to use the other
routing components provided by React Router, a `Router` parent component is necessary.

### Working With Route

#### App.js

Next, in `App.js` let's import the `Route` Component

A `Route` has defined props that tell it what route to look for but also what to do once that route has been matched.

Here are the props available to `Route`:

- `path` - the url that should be matched
- `component` - the component that should be rendered
- `render` - jsx that is rendered directly in the route

Let's first import `Route`

```jsx title="App.js"
import { Route } from "react-router-dom";
```

And now configure it to render the default route of `Home`.  

```jsx title="App.js"
return (
  <div>
    <nav>
      <a href="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </a>
      <a href="/currencies">Currencies</a>
    </nav>
    <main>
      <Home />
      <Route path="/">
        <Home />
      </Route>
    </main>
  </div>
);
```

If we leave both references to `Home` then React will render both of those Components.  One is hard coded to render and the other is being rendered via the route defined in `path`.

So let's comment out `<Home />` for now.

```jsx title="App.js"
<main>
  {/* <Home /> */}
  <Route path="/">
    <Home />
  </Route>
</main>
```

#### React Router v6

```jsx title="App.js"
import { Routes, Route } from "react-router-dom";

<main>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</main>
```

<!-- > **Link** - a component for setting the URL and providing navigation between
> different components in our app without triggering a page refresh. It takes a
> `to` property, which sets the URL to whatever path is defined within it. Link
> can also be used inside of any component that is connected to a `Route`.

> **Route** - a component that renders a specified component (using either
> `render` or `component`) based on the current url (`path`) we're at. `path`
> should probably match a `<Link to="">` defined somewhere. -->

Great! But this doesn't do anything because we're already on the homepage.

This does however pass down to several new props to `Home` which we can see in DevTools.

![React Devtools](https://i.imgur.com/JkYy2Uf.png)

#### Location and Match

Both `location` and `match` display info about the route.

> location: { hash: "", pathname: "/", search: "", state: undefined}
>> hash: ""
>>
>> pathname: "/"
>>
>> search: ""
>>
>> state: undefined
>
> match: { isExact: true, params: {...}, path: "/", url: "/"}
>> isExact: true
>>
>> params: {}
>>
>> path: "/"
>>
>> url: "/"

#### History

 But `history` provides us with several useful methods to manipulate the route.

> history: { isExact: true, params: {...}, path: "/", url: "/"}
>> action: "POP
>>
>> block: f block() {}
>>
>> createHref: f createHref() {}
>>
>> go: f go() {}
>>
>> goBack: f goBack() {}
>>
>> goForward: f goForward() {}
>>
>> length: 1
>>
>> listen: f listen() {}
>>
>> location: { hash: "", pathname: "/", search: "", state: undefined}
>>
>> push: f push() {}
>>
>> replace: f replace() {}

### Adding The `Currencies` Route

First let's import the `Currencies` Component

```jsx title="App.js"
import Currencies from "../Currencies/Currencies";
```

And now we add the route

```jsx title="App.js"
return (
  <div>
    <nav>
      <a href="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </a>
      <a href="/currencies">Currencies</a>
    </nav>
    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
    </main>
  </div>
);
```

#### React Router v6 example

```jsx title="App.js"
return (
  <div>
    <nav>
      <a href="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </a>
      <a href="/currencies">Currencies</a>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </main>
  </div>
);
```

Now we've got two components and two route and both have be activated by clicking on the links in the nav. Two things to note however are:

- the page refreshes every time we toggle between the links
- both the Home and Currencies components are being displayed simultaneously

Let's first deal with the first issue  import and use the  `<Link>` Component.

### Using `<Link>`

Let's first import `Link`

```jsx title="App.js"
import { Route, Link } from "react-router-dom";
```

And now we replace the anchor tags with `<Link>` and were all set.

```jsx title="App.js"
return (
  <div>
    <nav>
      <Link to="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </Link>
      <Link to="/currencies">Currency List</Link>
    </nav>
    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
    </main>
  </div>
);
```

#### React Router v6 - there is no change in the use of `<Link>`

```jsx title="App.js"
return (
  <div>
    <nav>
      <Link to="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </Link>
      <Link to="/currencies">Currency List</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </main>
  </div>
);
```

### Using Exact Keyword

Now we will resolve the second issue by including the exact keyword in the default route.

```jsx title="App.js"
<main>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/currencies">
    <Currencies />
  </Route>
</main>
```

#### React Router v6 matches exactly, therefore there is no `exact`

```jsx title="App.js"
<main>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/currencies" element={<Currencies />} />
  </Routes>
</main>
```

## Redirects

Redirects using react router are incredibly easy. Redirect is just another
component we can import and use by passing it a few props.

Let's create a route to handle if/when a user manually types in a route that doesn't exist.

```jsx title="App.js"
<main>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/currencies">
    <Currencies />
  </Route>
  <Redirect to="/" />
</main>
```

### There is NO `<Redirect>` in React Router v6

it is recommended to do a redirect in the API stack before sending the react app to the browser. Below is the example taken from [Handling Redirects in React Router v6](https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb) using `Express API`

```jsx title="App.js"
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";

function handleExpressRequest(req, res) {
  // Handle redirects *before* you render and save yourself some time.
  // Bonus: Send a HTTP 302 Found status code so crawlers don't index
  // this page!
  if (req.url === "/") {
    return res.redirect("/home");
  }

  // If there aren't any redirects to process, go ahead and render...
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  // ...and send a HTTP 200 OK status code so crawlers index the page.
  res.end(html);
}
```

And it looks like we are done for now.

### Resources

- [Route Props](https://reacttraining.com/react-router/web/api/Route/route-props)
- [Upgrading from React Router v5](https://reactrouter.com/docs/en/v6/upgrading/v5)
