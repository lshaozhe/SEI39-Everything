[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Route Building

## Setup

- Create a database 'nfl.db'

---

## Deliverables

- Django project (nfl)
- Django application (players)

---

# Code Challenge

## Create tables

- Using the schema.sql, create the models.py file in your app. NOTE: Do not run schema.sql, you need to create the Django model and migrate it.
- Migrate your models

## Add data to database

- Add the data from players.sql to your models. The INSERT statements are adding to players_players table, make sure that is the name of your players table in the database.

## Create views and routes

You are required to create the following views and routes

|   |   |   |
|---|---|---|
| GET | /players/          | List all players (can limit to 20)               |
| GET | /players/team/     | List all players belonging to one team 7         |
| GET | /players/salary/   | List all players with salary lesser than 3000000 |
| GET | /players/position/ | List all players with the position WR            |

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
