[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Mongo - Performance

## Lesson Objectives

1. Explain indexes
1. Explain text indexes
1. Explain replication
1. Explain sharding

## Explain indexes

1. `db.employees.ensureIndex({name: 1});`
1. `db.employees.dropIndex({name: 1});`
1. `db.employees.ensureIndex({name: 1}, {unique: true});`
1. indexes on embedded fields
1. indexes on arrays
1. `db.employees.ensureIndex({name: 1, salary: -1});`

## Explain text indexes

1. `db.articles.createIndex({ subject : "text", content : "text" })`
1. drop text index

- `db.articles.getIndexes()`
- `db.articles.dropIndex('index_name')`

1. `db.articles.find( { $text: { $search: "coffee" } } )`
1. `db.articles.find( { $text: { $search: "leche", $language: "es" } } )`

- stop words (a, the, and, etc)

1. `db.articles.find( { $text: { $search: "bake coffee cake" } } )`
1. `db.articles.find( { $text: { $search: "\"coffee cake\"" } } )`
1. `db.articles.find( { $text: { $search: "bake coffee -cake" } } )`
1. `db.articles.find( { $text: { $search: "cake" } }, { score: { $meta: "textScore" } } )`

```js
db.articles
  .find({ $text: { $search: "cake" } }, { score: { $meta: "textScore" } })
  .sort({ score: { $meta: "textScore" } });
```

## Explain replication

1. Writes sent to secondary DBs asynchonously
1. Reads can happen on secondaries

- although data may be stale

1. If primary goes down, a secondary is chosen to be new primary

## Explain sharding

1. split data across multiple servers

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
