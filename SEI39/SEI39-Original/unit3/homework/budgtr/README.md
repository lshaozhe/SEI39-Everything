[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Budgtr

Build an express app that lets you create, show and read.

#### Learning Objectives

- Practice building an express app
- Practice making an index route
- Practice making a show route
- Practice making create routes

#### Prerequisites

- Express Basics (Create/Read/Static Assets)

---

## Deliverables

You'll be creating a server that can let you
- show you a list of your income and expenditures
- show you one income/expenditure item
- create a new income/expenditure item

## Technical Requirements
1. Must be able to run without syntax errors
2. Must have index, show, create routes, using REST
3. Must have basic MVC structure (more details below)


## App Description

## Data
You are provided a `budget.js` file with data for you to use to populate your index and show routes

## Routes
- Index
  - GET `/budgets`
- Show
  - GET `/budgets/:index`
- Create
  - POST `/budgets`

## MVC
Models, Views, Controller

We only have one model, so it may seem all these folders are overkill. As we start building with more complexity these folders will gain utility

- Your app should follow the MVC format
- Models
  - `budget.js` - the data we provided

At the root of your project:
- `server.js`
- `package.json` created with `npm init`

### Commits
The order doesn't matter, but this will help you check your progress of completing this homework:
##### commit at least each time you get a route and/or view working

#### Getting Started

#### Show
- A show all route
  - some of the details (you decide)

<hr>

#### Details
- A details route
  - the rest of the details of the item

<hr>

#### New
- A new route that is a post route
- it will accept a name, date, amount, from and save it into an array

## Innovation Time!

Remember, this is just JavaScript, so you can write as much JS logic as you want to make the app more useful beyond just showing the data as is. Be sure you solve this on your own.

- Add a variable 'bankAccount'
    - display it when show is invoked
    - have this value update based on each item

- Tips
    - pseudocode on your own, figure out YOUR way of solving it
    - have a code graveyard
    - talk it through with the TA/IA
    - link to helpful articles on stack overflow/elsewhere
    - collaborate - have a friend help you solve it your way or help a friend solve it their way

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
