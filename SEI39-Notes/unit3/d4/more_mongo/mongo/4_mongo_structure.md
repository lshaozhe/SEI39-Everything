[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Mongo - Data Modeling

## Lesson Objectives

1. Explain how to relate documents using foreign keys
1. Explain how to use Arrays
1. Explain how to use Embedded Documents
1. Explain what denormalization is and when to use it

## Explain how to relate documents using foreign keys

```js
db.employees.insert({
  _id: ObjectId("4d85c7039ab0fd70a117d730"),
  name: "Leto",
});
db.employees.insert({
  _id: ObjectId("4d85c7039ab0fd70a117d731"),
  name: "Duncan",
  manager: ObjectId("4d85c7039ab0fd70a117d730"),
});
db.employees.insert({
  _id: ObjectId("4d85c7039ab0fd70a117d732"),
  name: "Moneo",
  manager: ObjectId("4d85c7039ab0fd70a117d730"),
});
```

1. to find: `db.employees.find({manager: ObjectId( "4d85c7039ab0fd70a117d730")})`

## Explain how to use Arrays

```js
db.employees.insert({
  _id: ObjectId("4d85c7039ab0fd70a117d733"),
  name: "Siona",
  manager: [
    ObjectId("4d85c7039ab0fd70a117d730"),
    ObjectId("4d85c7039ab0fd70a117d732"),
  ],
});
```

1. to find: `db.employees.find({manager: ObjectId( "4d85c7039ab0fd70a117d730")})`
1. index uses dot notation

- `db.employees.find({ 'manager.0': ObjectId("4d85c7039ab0fd70a117d730")})`

## Explain how to use Embedded Documents

```js
db.employees.insert({
  _id: ObjectId("4d85c7039ab0fd70a117d734"),
  name: "Ghanima",
  family: {
    mother: "Chani",
    father: "Paul",
    brother: ObjectId("4d85c7039ab0fd70a117d730"),
  },
});
```

1. can be queried using dot notation

- `db.employees.find({ 'family.mother': 'Chani'})`

## Explain what denormalization is and when to use it

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
