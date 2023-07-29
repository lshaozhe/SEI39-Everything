[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Recreating WeatherIcons in React

In this exercise, you will practice creating reusable React Components.

## Starter Codes

Found in the starter_codes directory.

In `src/index.html` you will find five weather elements that generate the output you are seeing now.

- Use 'npm start' to see how the completed app should look like
- Comment out the five weather elements in the HTML file ("section" segment)

## Instructions

### Creating The Data

- Create a new file called `weatherData.js` that contain an array of five objects with the following properties: `img`, `conditions` and `time`.
- Populate the objects based on the values from those elements in the HTML
- Export the file and import into `App.js`

### Creating The `WeatherIcons` Component

- Look over the HTML structure used to create the weather icons
- Create a `WeatherIcons` Component based on the HTML structure
- Make sure to set the Component up to accept props and update the JSX to work with those props

### Rendering The `WeatherIcons` Component

- Import the `WeatherIcons` Component into `App`
- Pass the props it needs for `img`, `conditions`and`time`.
- App will then render those `WeatherIcons` Components

### Bonus

- Use a loop to loop over the weatherData array data and create a `WeatherIcons` Component for each element passed
- In the loop pass the element the props it needs for `img`, `conditions`and`time`.

- Try creating the following additional Components:

* WeatherIcon - contains only the `img`
* WeatherData - contains both the `conditions` and `time`

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
