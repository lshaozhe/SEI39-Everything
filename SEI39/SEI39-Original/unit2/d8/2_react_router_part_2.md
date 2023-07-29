---
unit: 2
tags: ["react"]
published: true
---

# React Router II

![React Router logo](https://i.imgur.com/UcmwbaK.png)

## Learning Objectives

### React Bitcoin Currency

Here is what we are looking to build:  [Bitcoin Solution Code](https://9esbr.csb.app/)

Here is our [Starter Code](https://codesandbox.io/s/rctr-router-p2-bitcoin-starter-8e2vp?file=/src/components/App/App.js)

<https://codesandbox.io/s/rctr-router-p2-bitcoin-starter-8e2vp?file=/src/components/App/App.js>

## Currencies component

If we look at this component we see a long list of links. Note that the links are using regular `<a>` tags.

What happens if we click on a link? It works, but the whole page reloads which is a poor choice of UI.

Lets go ahead and replace the `a` tag with a `<Link>` component. Make the `to` prop value equal to the `href` value.

```jsx title="Currencies.jsx"
// src/Components/Currencies/Currencies.jsx
import { Link } from "react-router-dom";

//...

render() {
  const list = listOfCurrencies.map((item) => {
    return (
      <div className="currency" key={item.currency}>
        <p>
          <Link to={"/currencies/" + item.currency}>{item.currency}</Link>:
          {item.country}
        </p>
      </div>
    );
  });
}
```

Great! Now go back to the page and click the link again, what happens?

It changes the route for us (notice the URL changing) but we don't have any
routes set up to match that url so it `Redirects` us back to the home page.

### Currency Component

If we take a moment to examine the `Currency` Component we will see that there is the following variable with the url to the `conidesk` api.

```jsx title="Currency.jsx"
const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";
```

If we copy/paste the url into the browser and append a bitcoin currency we should see that it returns the data.

```url
https://api.coindesk.com/v1/bpi/currentprice/AFN
```

```json
{
    "time": {
        "updated": "Mar 18, 2021 14:32:00 UTC",
        "updatedISO": "2021-03-18T14:32:00+00:00",
        "updateduk": "Mar 18, 2021 at 14:32 GMT"
    },
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "bpi": {
        "USD": {
            "code": "USD",
            "rate": "57,734.7699",
            "description": "United States Dollar",
            "rate_float": 57734.7699
        },
        "AFN": {
            "code": "AFN",
            "rate": "4,517,612.7172",
            "description": "Afghan Afghani",
            "rate_float": 4517612.7172
        }
    }
}
```

This is the data we will use to render the info dynamically for the currency each time the user clicks to see a currency.

### Currency Route

In order to active this route we need  add another `<Route>` component in `App`.

This time though we want to include a `parameter`.

Look at the URL that we're on after clicking on a currency and we should see the following:

```url
https://vthmi.csb.app/currencies/AFN
```

It seems as though the info we need to make the API call is already in the route. We can use that as part of our routing logic.

Let's create a new route that includes a `url parameter`. This is done by appending a `:paramName` after the path.

```jsx title="App.js"
<Route path="/currencies/:currency">
  <Currency />
</Route>
```

#### React Router v6

```jsx title="App.js"
<Route path="/currencies/:currency" element={<Currency />} />
```

Clicking on a currency should take us to the following:

![Screenshot for path](https://i.imgur.com/orCqpXN.png)

And if we examine the `Currency` Component in React DevTools we should see the following:

![Currency in React Devtools](https://i.imgur.com/EVfxNzn.png)

So it looks like `props.match.params.currency` contains the value that we need to make the API call.

## Adding useState and useEffect to Currency Component

Knowing that we need to make the API call and then update state with the data means we need both `useState` and `useEffect` so let's import them into the `Currency` Component

```jsx title="Currency.jsx"
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
```

Let's setup our state and use params from the react router hook

```jsx title="Currency.jsx"
const [currency, setCurrency] = useState(null);
const params = useParams();
```

The Currency component will be responsible for making the API call to `coindesk` to retrieve the current price of the currency.

We will make the call when the component first mounts, `componentDidMount`,  and will do so within `useEffect`.

```jsx title="Currency.jsx"
useEffect(() => {
  const currency = params.currency;
  const url = `${coindeskURL}${currency}.json`;

  const makeApiCall = async () => {
    const res = await fetch(url);
    const json = await res.json();
    const currencyPrice = json.bpi[currency].rate;
    setCurrency(currencyPrice);
  };
  makeApiCall();
}, []);
```

The last edits required are to update the JSX to include the required info.  

```jsx title="Currency.jsx"
<h1>Bitcoin price in {params.currency}</h1>
<div className="price">Price: {currency}</div>
```

## New Feature Request

The client has just asked that we now include a new feature.  They would like to display the currency name in the header.  The header will look like this when no currency is selected:

![Header with No Currency](https://i.imgur.com/guMrAJb.png)

And then update to include the currency name when a currency is active.

![Header with Currency](https://i.imgur.com/ukBuPSI.png)

First take a look at `App` to at least add the `>` to the existing JSX.

```jsx title="App.js"
<Link to="/currencies">Currencies ></Link>
```

---

### :alarm_clock: Activity - 5min

Based on your current knowledge of React, and limited knowledge of React Router,  think of 1 or possibly 2 different ways to implement this logic.  

- Take 2 minutes to think about ways to do this
- The instructor will ask you to post your answers in a slack thread

---

## Lifting State

In order to show that value in `App` we need to pass, or better yet lift, the currency name from `Currency` to `App`.  In order to to this we need to pass down a function.  In order to keep our design simple we will pass `setCurrency` down from `App`.

### App.js

```jsx title="App.js"
const [currency, setCurrency] = useState("");
```

This requires that we use change the component in the route and pass down the props.

```jsx title="App.js"
<Route path="/currencies/:currency">
  <Currency setCurrency={setCurrency} />
</Route>
```

Let's see if that works.  

### Update Navigation

Add the following in `App`

```jsx title="App.js"
<Link to="/currencies">
  {currency ? `Currencies List > ${currency}` : `Currencies List > `}
</Link>
```

### Clear Previous Value

If we click the links a few times we will see that our new feature doesn't yet clear the previous value when we are on `/currencies` or the `/` home route.  

For that we need to add an `onClick` event to both of those `Link`'s

```jsx title="App.jsx"
<>
  <Link onClick={() => setCurrency("")} to="/">
    <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
    <h1>Bitcoin prices</h1>
  </Link>
  <Link onClick={() => setCurrency("")} to="/currencies">
    {currency ? `Currencies List > ${currency}` : `Currencies List`}
  </Link>
</>
```

Now uncomment out the code in `Currency` Component and we should be good to go.  

We still have some weird issue where both the `currencies` and `currencies/:currency` routes display at the same time.

![Both routes display at the same time](https://i.imgur.com/3EQxfuL.png)

 Let's make use of a new React Router Component called `Switch` that will help fix this.  

## Using Switch

:::caution

Note that react-router-dom 6 has no `<Switch>` as `<Routes>` and `<Route>` has taken over the role

:::

Switch works just like the switch/case statements in javascript. We're comparing
string values (in this case, routes) and executing conditions (rendering
components) based on what matches turn out true.

Since we're not using switch right now the two components are stacked on top of each other! The Home and the
Currencies component. That's silly.

> Why does this happen?

There are two ways to handle this: using the Switch component, or specifying
`exact` on routes.

Let's look at our routes in `App.js` again:

```jsx title="App.js"
<>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/currencies/:currency">
    <Currency setCurrency={setCurrency} />
  </Route>
  <Route path="/currencies">
    <Currencies />
  </Route>
</>
```

Try putting `exact` on the `/` path route component.

```jsx title="App.js"
<Route exact path="/">
  <Home />
</Route>
```

> Note: this is equivalent to putting `exact=true`

Beautiful! this is a great solution, unless we have many different routes.

If we had a list of routes like:

- `/currencies`
- `/currencies/new`
- `/currencies/:id` etc

we would have to put `exact` on `/currencies` or else, any time we went to
`/currencies/something` it would match both the root (`/currencies`) AND the
`/currencies/something` routes and both would be rendered.

We can avoid all this by just using `<Switch />`.

Back in `App.js`, let's import the `<Switch />` component and then wrap all of
our routes in it.

```jsx title="App.js"
import { Route, Link, Switch } from "react-router-dom";

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
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/currencies/:currency">
          <Currency setCurrency={setCurrency} />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
      </Switch>
    </main>
  </div>
);
```

## Redirects Revisited (Navigate - React Router v6)

Redirects using react router are incredibly easy. `Redirect` is just another
component we can import and use by passing it a few props.

Let's add another Redirect to account for users who manually type in `currency` instead of `currencies`

```jsx title="App.js"
<Route path="/currency">
  <Redirect to="/currencies" /> 
</Route>
```

### React Router v6 - `<Navigate>`

```jsx title="App.js"
import { Routes, Route, Navigate } from "react-router-dom"

<Route path="/currency" element={<Navigate replace to="/currencies">} />
```

Redirect only requires a `to` prop which tells it what path to redirect to.

React Router v5 vs v6

| v5                             | v6                                |
| ------------------------------ | --------------------------------- |
| `<Redirect to="/home" />`      | `<Navigate to="/home" replace />` |
| `<Redirect to="/home" push />` | `<Navigate to="/home" />`         |

## Bonus - Working With `History`

We can make use of the the `history.push` method to push routes into the browsers url.

In the `Currency` Component let's create a button that when called will navigate the user back to the `currencies` route.

Let's add a button and assign it the `handleCLick` function.

```jsx title="Currency.jsx"
import { useHistory } from "react-router-dom";

const history = useHistory();

<button onClick={() => history.push("/")}> Home</button>
```

### React Router v6 with useNavigate

```jsx title="Currency.jsx"
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button onClick={() => navigate("/")}> Home</button>
```

React Router v5 vs v6

| v5                          | v6                                    |
| --------------------------- | ------------------------------------- |
| `history.push('/home');`    | `navigate('/home');`                  |
| `history.replace('/home');` | `navigate('/home', {replace: true});` |
