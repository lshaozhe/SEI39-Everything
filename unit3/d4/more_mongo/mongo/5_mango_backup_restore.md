[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Mongo - Backing Up

## Lesson Objectives

1. Explain mongodump
1. Explain mongorestore

## Explain mongodump

1. `mongodump -o ~/Desktop/mongo_db/export`
1. `mongodump --db learn -o ~/Desktop/mongo_db/export`
1. `mongodump --db learn --collection employees -o ~/Desktop/mongo_db/export`

## Explain mongorestore

1. `mongorestore --db learn --collection employees backup/learn/employees.bson`

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
