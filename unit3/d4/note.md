noSQL
table - collection
row - documents
col - fields/keys

mongoSH commands

## QUERIES

show dbs - show all database

use acme - go into a database named acme

db.dropDatabase() - to get rid of the database youre in

db.createCollection('name') - creating tables

db.lesson.drop()

db.lesson.insertOne({name:'name', array: ['green', 1, {someitem: 'here'}], keyValue: {first: 10, second :20}})

db.lesson.insertMany([
{name: "name 2", "array": ["blue"],keyValue: {first: 30, second: 40}},
{name: "name 3"}
])

db.lesson.find()

db.lesson.find({name: "name"}) - find key name and value name

db.lesson.find().sort({name: 1}) -sort accending

db.lesson.find().sort({name: -1}) -sort deccending

db.lesson.find({name: "name"}).count()

db.lesson.find().limit(2)

db.lesson.findOne()

db.lesson.countDocument({name:"name"})

## UPDATING

db.lesson.updateOne()
db.lesson.updateOne({\_id: ObjectId("634777ccbc74c70f45e7fbdd")}, {something: 'blah blach', alpha: ["a", "b"]})

## DELETING

db.lesson.deleteOne({ name: "name 3"})
db.lesson.deleteMany({})

## AFTN LESSON

db.animals.find({legs: {$gt:2}})

//and statement
db.animals.find({legs: {$gt:4}, animal: "chicken"})

//or statement
db.animals.find({$or: [{legs: {$gt:4}}, {animal: "chicken"}]})

//$gt >, $eq ==, $gte >=, $ne !=, $lt <, $lte <=

db.animals.updateOne({animal: "chicken"}, {$inc: {legs: +10}})

//$inc - increase, $mul - multiply

//remove key value pair - $unset]
... {$unset:{somekey: ""}}

//renaming key value pair (key and value) - $rename
... {$rename:{somekey: somevalue}}

//exact matching
db.animals.find({colour: ['black', 'red', 'yellow']})

//matching
db.animals.find({colour: {$all: ['black', 'red']}})

//exact matching
db.animals.find({size: {from: 10, to: 30}})

//greater than
db.animals.find({"size.from":{$eq:10}})

//pushing one item into arr
db.animals.updateOne({animal: "chicken"}, {$push: {colour: "orange"}})

//pushing more items into arr (see the $each)
db.animals.updateOne({animal: "chicken"}, {$push: {colour: {$each: ["green", "brown"]}}})

db.animals.find({animal: "chicken"})

//replacing one
db.animals.updateOne({animal: "chicken", colour: "white"},
{$set: {"colour.$": "purple"}})

//upsert - insert + update (if can find, update. else insert. notice the upsert usage below)
db.animals.updateOne({animal: "cat"}, {$set: {blah: "something"}}, {upsert: true})

db.animals.updateOne({animal: "cat"}, {$set: {legs:4}}, {upsert: true})

//create + insert
db.inventory.insertMany([
{
\_id: ObjectId("633a537103605041eda63ec7"),
warehouse: 'A',
items: [
{ item: 'paper', qty: 10 },
{ item: 'cardboard', qty: 12 },
{ item: 'tissue', qty: 15 }
],
},
{
\_id: ObjectId("633a537103605041eda63ec8"),
warehouse: 'B',
items: [
{ item: 'paper', qty: 3 },
{ item: 'cardboard', qty: 20 },
{ item: 'tissue', qty: 50 }
]
}
])

//setting some nested values
db.inventory.updateOne({warehouse: "A", items: {$elemMatch: {item: "paper"}}}, 
{$set: {"items.$.qty":60}})

//regex
//string containing letter in //
db.animals.find({animal: /o/})
//word starting with ch
db.animals.find({animal: /^ch/})
//ends with ly
db.animals.find({animal: /ly$/})
