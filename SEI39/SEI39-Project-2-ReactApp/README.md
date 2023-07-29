**Project's Title and Description**

A frontend ReactJS application that GET data from FTX's REST API

**Technology/Frameworks/Methods/Hooks Used**

ReactJS, TailwindCSS, ApexChart

In specifics for React: useRef, useState, useEffect, useContext, lifting states, propping, routes

**Installation**

installation of all required node modules (defined in package.json) can be performed thru: 
npm i

**Code Structure**

 * App /
   * Main /
     * Form /
     * Results /
       * Card /
    * Watchlist /
      * Detailedview /
        * Plot /

App / - contains react-router for routing, contains wrapper and declaration of useRef to store data required between different pages

Main / - contains fetching of ftx market API, as well as auto-refresh to fetch and update market data (thru market API)
Form / - contains the 2 search bars for user to search coin pairs
Results / -contains function to manipulate the market data fetched from Main / before displaying
Cards / - populates individual coin pair and renders the data thru proping and mapping each market data (coin pair) from its parent component

Watchlist / -mainly to hold its children components
Detailedview / -fetching of single market price history data when selected by user for display
Plot / -preparation of fetched price history data and passes it to ApexChart for candlestick plotting

Other components are housed in the ./common folder for simple features such as buttons/ navbar and loading spinner
