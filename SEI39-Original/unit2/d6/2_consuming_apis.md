[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to AJAX and HTTP Service

## Prerequisites

- React
- Components
- State and props
- Working with useEffect

**Note:** If you haven't yet done so [request a FREE api key from OMDB](http://www.omdbapi.com/apikey.aspx)

## Learning Objectives

- Describe what is AJAX
- Describe what are 3rd Party APIs and how they are used
- Describe what are API keys and how to use them
- Review Query Parameters and how they can be used in 3rd Party API requests
- Set up fetch and make API request in a React App
- Learn to work with ES8 Async/Await as a way to handle Promises used in fetch
- Working with the useEffect hook

## What We Are Building

Here is a working version of the [OMBd Movie App](https://jmk0w.csb.app/) we will be building together.

## Framing

The web is filled with data. Lots and lots of data. We make use of this data every time we perform a Google search or find ourselves on Amazon searching for a product.

This need for applications to query and then retrieve a set of results are the premise for working with API (Application Programing Interface) servers.

Were you ever curious how that data looks under the hook before it's been placed into _HTML_ elements and beautifully styled?

I'm sure you have so let's take a look.

---

### :alarm_clock: Activity - 5min

Take a moment to examine raw data sent from an API

- First install the [JSON Formatter Chrome Extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
- Now paste the following url into your browser - [https://randomuser.me/api](https://randomuser.me/api)

If successful we should see something similar to the following, provided the `Parsed` button is clicked.

```json
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sedef",
        "last": "Çetiner"
      },
      "location": {
        "street": {
          "number": 8501,
          "name": "Vatan Cd"
        },
        "city": "Yalova",
        "state": "Kars",
        "country": "Turkey",
        "postcode": 50672,
        "coordinates": {
          "latitude": "70.8019",
          "longitude": "155.4623"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "sedef.cetiner@example.com",
      "login": {
        "uuid": "ee5cdff7-777a-4dfa-b90e-47d46fdf13bd",
        "username": "tinyfish544",
        "password": "1dragon",
        "salt": "DCP39NnJ",
        "md5": "9aa315940ab619a9381298f9af2c1ffb",
        "sha1": "38da058e1b82d308d4b58c88dfda26438b955767",
        "sha256": "49d603e1d18fa1411caa1d3b5ccaba71c327b5224591c949223940acacfa52dd"
      },
      "dob": {
        "date": "1991-09-11T01:20:05.540Z",
        "age": 30
      },
      "registered": {
        "date": "2007-05-29T01:10:24.413Z",
        "age": 14
      },
      "phone": "(989)-017-8002",
      "cell": "(130)-008-4256",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "TR"
    }
  ],
  "info": {
    "seed": "8edae13740225664",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

Now click on the `Raw` button. In reality the data that is received is in a raw string format and it's up to the receiver to convert it back into it's true javascript data types.

```txt
{"results":[{"gender":"female","name":{"title":"Mrs","first":"Sedef","last":"Çetiner"},"location":{"street":{"number":8501,"name":"Vatan Cd"},"city":"Yalova","state":"Kars","country":"Turkey","postcode":50672,"coordinates":{"latitude":"70.8019","longitude":"155.4623"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"sedef.cetiner@example.com","login":{"uuid":"ee5cdff7-777a-4dfa-b90e-47d46fdf13bd","username":"tinyfish544","password":"1dragon","salt":"DCP39NnJ","md5":"9aa315940ab619a9381298f9af2c1ffb","sha1":"38da058e1b82d308d4b58c88dfda26438b955767","sha256":"49d603e1d18fa1411caa1d3b5ccaba71c327b5224591c949223940acacfa52dd"},"dob":{"date":"1991-09-11T01:20:05.540Z","age":30},"registered":{"date":"2007-05-29T01:10:24.413Z","age":14},"phone":"(989)-017-8002","cell":"(130)-008-4256","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/36.jpg","medium":"https://randomuser.me/api/portraits/med/women/36.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/36.jpg"},"nat":"TR"}],"info":{"seed":"8edae13740225664","results":1,"page":1,"version":"1.3"}}
```

Go back and view the data as `Parsed` and take a moment to examine the results

:question: - Try and answer the following questions:

- What is the most top level JS datatype that contains all the data
- Which key contains the user data we are looking for?

---

### What is Serialized Data?

As we just saw all data sent via _HTTP_ are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes). Thus, native data structures can be **serialized** into a string representation of the data.

This string can be transmitted and then **parsed** back into data by another web agent.

There are **two** major serialized data formats...

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

```json
{
  "users": [
    {
      "name": "Bob",
      "id": 23
    },
    {
      "name": "Tim",
      "id": 72
    }
  ]
}
```

> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It remains a major format, however, due to its legacy usage across the web. You'll probably always favor using a JSON API, if available.

```xml
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

**Many APIs publish data in multiple formats, for example...**

- [http://app.quotemedia.com/data/getQuotes.json?symbols=AAPL](http://app.quotemedia.com/data/getQuotes.json?symbols=AAPL)
- [http://app.quotemedia.com/data/getQuotes.xml?symbols=AAPL](http://app.quotemedia.com/data/getQuotes.xml?symbols=AAPL)

### Parsing JSON

You've seen a few examples of _JSON_ and how data can be organized. Here is some data for the Apple.

```json
{
  "description": "Apple Inc. (Apple) designs",
  "endDate": "2020-09-30",
  "exchangeCode": "NASDAQ",
  "startDate": "1980-12-12",
  "name": "Apple Inc",
  "ticker": "AAPL"
}
```

## Tools Of The Trade

jQuery was one of the first libraries to provide an easy way to make AJAX requests. Over time, new libraries were introduced, and with the introduction of ES6 the `fetch` api.

Some top choices

- [$.ajax] (<https://api.jquery.com/jquery.ajax/>)
- [axios] (<https://www.npmjs.com/package/axios>)
- [fetch] (<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>)

## Third Party APIs

Many web sites have their own data which they make available to developers either for free or a small fee, while others charge quite a bit and are very expensive.

Below is a non-exhaustive list of some free API's you can use. There are _many_ API's out there, however, so if you find one not on this list that you'd like to use, feel free! Please note that some may require signing up for an API key (e.g. the Marvel API).

### No Key Required

1. Pokemon: <http://pokeapi.co/>
1. Card Deck: <https://deckofcardsapi.com/>
1. Google Books: <https://developers.google.com/books/>
1. City of Chicago: <https://data.cityofchicago.org/>
1. Beer: <https://www.brewerydb.com/developers>
1. Chuck Norris: <http://www.icndb.com/>
1. Rick and Morty: <https://rickandmortyapi.com/documentation/#rest>
1. Star Wars: <https://swapi.co/>

#### Key Required

1. Marvel: <https://developer.marvel.com/>
1. Weather: <https://openweathermap.org/api>
1. Giphy: <https://developers.giphy.com/>
1. News: <https://newsapi.org/>

---

#### :alarm_clock: API Activity - 5min

- Let's take a moment and examine a few of the [public API's](https://github.com/toddmotto/public-apis) available.
- Pick a topic of interest and examine the API's for that category.

Let's capture some of the APIs you've discovered and their category.

#### Category Name

- API url

---

## API

As we've seen so far API's provide access to the data via a url. Let's take a look at the [RandomUser API](https://randomuser.me/) specifically.

```url
https://randomuser.me/api
```

This returns a single random user.

```json
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sedef",
        "last": "Çetiner"
      },
      "location": {
        "street": {
          "number": 8501,
          "name": "Vatan Cd"
        },
        "city": "Yalova",
        "state": "Kars",
        "country": "Turkey",
        "postcode": 50672,
        "coordinates": {
          "latitude": "70.8019",
          "longitude": "155.4623"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "sedef.cetiner@example.com",
      "login": {
        "uuid": "ee5cdff7-777a-4dfa-b90e-47d46fdf13bd",
        "username": "tinyfish544",
        "password": "1dragon",
        "salt": "DCP39NnJ",
        "md5": "9aa315940ab619a9381298f9af2c1ffb",
        "sha1": "38da058e1b82d308d4b58c88dfda26438b955767",
        "sha256": "49d603e1d18fa1411caa1d3b5ccaba71c327b5224591c949223940acacfa52dd"
      },
      "dob": {
        "date": "1991-09-11T01:20:05.540Z",
        "age": 30
      },
      "registered": {
        "date": "2007-05-29T01:10:24.413Z",
        "age": 14
      },
      "phone": "(989)-017-8002",
      "cell": "(130)-008-4256",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "TR"
    }
  ],
  "info": {
    "seed": "8edae13740225664",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

### URL

- **URL** stands for **Uniform Resource Locator**.

- It informs the server of what resource the client wants to GET. create (POST), DELETE, etc.

- Here's the complete anatomy of a URL:

![URL breakdown](https://i.imgur.com/w1igQx0.png)

- Developers often refer to just the **path** (incorrectly) as a URL.

## Query String

This API has also been constructed to allow us to request multiple users in one call. This is done by using a `query string` that includes the search parameters.

The `query string` is placed at the end of the url and starts with a `?` followed by a `key=value` pair.

Here are a few examples of API's using a `query string` to include additional parameters in the request:

## Random User

Here we request five :five: users

```url
https://randomuser.me/api/?results=5
```

We can also add multiple search queries using the `&` symbol and the additional query values.

```url
https://randomuser.me/api/?results=5&gender=female
```

### Swapi (Star Wars)

```url
https://swapi.dev/api/people/?search=r2
```

## API Keys

Some API's require keys in order to request data. The keys are added to url along with any additional query parameters.

Here is an example of a request to OMDB (open movie data base), for a movie with the title `Eraserhead` and and `apikey`. The apikey may or may not work depending on if it is still active.

```url
http://www.omdbapi.com/?t=Eraserhead&apikey=98e3fb1f
```

The order of the parameters is not important and we could have written it as follows:

```url
http://www.omdbapi.com/?apikey=98e3fb1f&t=Eraserhead
```

The name of query parameter for the api key may be different depending on the API.

The below example uses `apiKey` as the key query param name.

## News API

```url
http://newsapi.org/v2/everything?q=bitcoin&apiKey=5d74ff271abd4bd3b2109d14d74c7d0b
```

While this API uses `api_key`

## Giphy API

```url
http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CqhoGv4lcfGV4wOpxPVfbn0bXhmpHB9c&limit=5"
```

---

### :alarm_clock: Activity - 10min

Perform the following:

- Sign up for API keys for the API's listed below
- Using your browser confirm that you are able to retrieve data from the API's

API's

- [http://api.giphy.com](http://api.giphy.com)
- [Open Weather Map](https://home.openweathermap.org/users/sign_up)

---

## A Note On JSON

`JSON` stands for JavaScript Object Notation and is a subset of the object literal notation of JavaScript. It is primarily used to transfer data between client and server when requesting or sending data using an API.

When sending data the API server first converts the JS into a string and then its the responsibility of the client to convert it back into the original JS data type.

There are 2 rules that govern _JSON_.

- all keys/values must use double quotes
- trailing commas are forbidden (don't include a comma after the last `key:value` pair)

Below is an example of some of the _JSON_ returned by OMDB. Notice how all key:value pairs include double quotes. Also make note that the last key:value pair do not have a trailing comma.

```js
const movie = {
  Title: "Eraserhead",
  Year: "1977",
  Website: "N/A",
  Response: "True",
};
```

There are also online tools that can help you validate JSON and confirm that it follow the above rules such as: [jsonlint.com](https://jsonlint.com/)

_JSON_ includes two :two: methods that allow us to either convert an object to a string or parse it back into an object:

- `JSON.stringify()` - converts JS to a string
- `JSON.parse()` - converts a JS string back into its original format

The OMDB API first uses `JSON.stringify()` to convert the data into a string and then the JSON Formatter Chrome Extension converts it back into a object.

We can use these _JSON_ methods in our own JS code when needed.

---

### :alarm_clock: Activity - 3min

Let's test them out in DevTools and see what they return.

## Our Data

```js
const movie = {
  Title: "Eraserhead",
  Year: "1977",
  Website: "N/A",
  Response: "True",
};
```

## Data Stringified

```js
const stringifiedMovie = JSON.stringify(movie);
// this is now one long string of text
console.log(stringifiedMovie);
```

## Data Parsed

```js
const parsedMovie = JSON.parse(stringifiedMovie);
console.log(parsedMovie);
```

---

## Mini Movie App

We're going to build a tiny React single page app that has a text input, a button and when a user inputs a movie, they will get a set of movies that match from OMDB.

---

### :alarm_clock: Activity - 2min

### Setup

- Use the starter codes in `consuming_apis_starter_codes`.
- Pass the `handleSubmit` method in `App` down to the `Form` Component and call it the same name.
- Confirm that the console log is outputting the captured value

---

### React Architecture

Our React architecture will look like the following:

```mermaid
flowchart
  App --> Form
  App --> MovieInfo
```

---

### Making Our API Call

We're going to be making requests to OMDB using `fetch`. We'll be viewing those results in Chrome's Console. Once we build out the functionality, we'll start incorporating our data into our web page.

Let's build our first fetch request.

`fetch` is a function and it returns a JS Promise. A `Promise` is used to allow developers to structure code based on how JS runs code all its code asynchronously.

```js
fetch(someUrl);
```

`fetch` will retrieve the data and `.then()` will work with returned data once the `Promise` is resolved.

```js
fetch(someUrl).then((res) => res.json());
```

`fetch` requires 2 `.then()` methods. The first will parse the data from a string back into its js data type and the second will then allow us to work with the actual data.

```js
fetch(someUrl)
  .then((res) => res.json())
  .then((data) => someFunction(data));
```

### Using Fetch in App

Lets test that the ombd api and our key works to fetch the data we need.

```url
http://www.omdbapi.com/?apikey=98e3fb1f&t=Eraserhead
```

If successful then we should see the following:

```json
{
  "Title": "Eraserhead",
  "Year": "1977",
  "Rated": "Not Rated",
  "Released": "03 Feb 1978",
  "Runtime": "89 min",
  "Genre": "Fantasy, Horror",
  "Director": "David Lynch",
  "Writer": "David Lynch",
  "Actors": "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates",
  "Plot": "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
  "Language": "English",
  "Country": "USA",
  "Awards": "2 wins & 1 nomination.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.4/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "90%"
    },
    {
      "Source": "Metacritic",
      "Value": "87/100"
    }
  ],
  "Metascore": "87",
  "imdbRating": "7.4",
  "imdbVotes": "103,505",
  "imdbID": "tt0074486",
  "Type": "movie",
  "DVD": "10 Aug 2016",
  "BoxOffice": "N/A",
  "Production": "American Film Institute",
  "Website": "N/A",
  "Response": "True"
}
```

## The `useEffect` Hook

Now it's time to use the `useEffect` Hook lets us perform the `side effects` of making the initial API call.

> A side effect is any application state change that is observable outside the called function other than its return value.

Several examples of `side effects` are:

- Logging to the console
- Making an API call
- Calling setInterval/setTimeout

As we pointed out in the last lecture on React lifecycle, `useEffect` and be run in one of 3 ways:

- `useEffect(() => {}, [])` - empty [] means this will only run once when the Component mounts
- `useEffect(() => {})` - no [] means this will run on every render/re-render
- `useEffect(() => {}, [someValueToMonitor])` - run on mount and then only if the value has changed

### ComponentDidMount

Let's configure `useEffect` to run only once when the component mounts and fetch a movie of our choice.

In order for this to work properly we must make sure that `movieTitle` contains an initial value.

```js
const [movieTitle, setMovieTitle] = useState("star wars");
```

And now we will setup `useEffect` as `ComponentDidMount`.

```js
useEffect(() => {}, []);
```

Lets retrieve our data using the `fetch` API.

```js
useEffect(() => {
  const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;

  const makeApiCall = () => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("movieData", data);
        setMovieData(data);
      });
  };
  makeApiCall();
}, []);
```

We should see the following results in the console.

```js
{
  Title: "Eraserhead",
  Year: "1977",
  Rated: "Not Rated",
  Released: "03 Feb 1978",
  Runtime: "89 min",
  Genre: "Fantasy, Horror",
  Director: "David Lynch",
  Writer: "David Lynch",
  Actors: "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates",
  Plot:
    "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
  Language: "English",
  Country: "USA",
  Awards: "2 wins & 1 nomination.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.4/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "90%",
    },
    {
      Source: "Metacritic",
      Value: "87/100",
    },
  ],
  Metascore: "87",
  imdbRating: "7.4",
  imdbVotes: "103,505",
  imdbID: "tt0074486",
  Type: "movie",
  DVD: "10 Aug 2016",
  BoxOffice: "N/A",
  Production: "American Film Institute",
  Website: "N/A",
  Response: "True",
}
```

<!-- ![](https://i.imgur.com/ADtTqUz.png) -->

## Rendering our response in the Browser

Let's update the MovieInfo component to include the elements for the data we want to render.

```jsx title="MovieInfo.jsx" live
function MovieInfo(props) {
  return (
    <div>
      <h1>Title: </h1>
      <h2>Year: </h2>
      <img src="movie url" alt="movie" />
      <h3>Genre: </h3>
      <h4>Plot: </h4>
    </div>
  );
}
```

---

### :alarm_clock: Props Activity - 10min

Examine the props that have been passed down and render the corresponding data for the element placeholders we've assigned.

---

### Conditionally Rendering The MovieInfo Component

Finally, let's add some conditional logic that will either render `MovieInfo` and pass in our movie data as props or render nothing at all.

```jsx title="App.js" {5}
return (
  <div className="App">
    <div>Best Movie App Ever</div>
    <Form handleSubmit={handleSubmit} />
    {movieData.Title ? <MovieInfo movie={movieData} /> : null}
  </div>
);
```

### ComponentDidUpdate

Since our `Form` is responsible for capturing the user input and using that input as our search criteria let's make sure it updates `movieTitle`.

```jsx title="App.js" {3}
const handleSubmit = (title) => {
  console.log("App - makeApiCall - title", title);
  setMovieTitle(title);
};
```

As we can see no movie data is being fetched when the user submits a new query.

So let's configure `useEffect` to re-run anytime the `movieTitle` has been updated.

To do this we will add a watch variable to `useEffect`.

```jsx title="App.js"
useEffect(() => {
  const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;

  const makeApiCall = () => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("movieData", data);
        setMovieData(data);
      });
  };
  makeApiCall();
}, [movieTitle]);
```

## Bonus - Async Functions

Up to this point we've covered quite a few ES6 features however many more features have been introduced with ES7, ES8, ES9 and the most recent, ES10.

This [article](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) provides a synopsis of all the new features released up to ES9.

- Let's take a look at the ES6 section
- Browse down the article until you hit the `ECMAScript 6(2015)` section
- How many of those features have you already been introduced to?
- When asked slack your response in a thread created by the instructor

The newest feature will be working with today is `ES8 - Async Functions`

### Async / Await

The keyword `await` makes JavaScript wait until a line of code completely finishes executing. However, you can only use `await` inside of an `async` function. How do we turn a function into an `async` function?

Easy! We just put the word `async` in front of the word `function`. With arrow functions, we just write `async` before the parenthesis, like this: `async () => { etc...}`. So, if we use `async` and `await` we can refactor our code and remove the `.then()` methods.

In order to force the code to run asynchronously we then add the keyword `await` before and statement that returns a `Promise`. In the example below both `fetch` and `res.json()` return `Promises` and must be preceded by the keyword `await`

```js
useEffect(() => {
  const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;

  const makeApiCall = async () => {
    const res = await fetch(movieUrl);
    const json = await res.json();
    setMovieData(data);
  };

  makeApiCall();
}, [movieTitle]);
```

## Resources

- [David Walsh's Blog - The Fetch API](https://davidwalsh.name/fetch)
- [JS Promises](https://javascript.info/promise-basics)

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
