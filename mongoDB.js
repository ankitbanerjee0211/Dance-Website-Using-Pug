// Step-1
// ----------------------------
// Open Windows powershell(admin)
// use mongod command

// Step-2
// ----------------------------
// Open another Windows powershell(admin)
// use mongo command

//// Some commands:
// -----------------------------
// 1) To know the current database:
> db
test
(test by default)

// 2) To switch database
> use ankit
switched to db ankit

// 3) To show the databases:
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB

// 4) To show the collections in the database:
> show collections

// 5) To write some collection
> db.text.insert({})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
ankit   0.000GB
config  0.000GB
local   0.000GB
> show collections
text
> db
ankit
> db.text.insert({"name":"Ankit"})
WriteResult({ "nInserted" : 1 })
// In MongoDB
collection == table
// Use right click to paste in db command panel

// creating or selecting database
use ankitKart

// Inserting data in mongo db
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})
// here items is the data collection

// To visualize the data in a collection
db.items.find()
// a type of query this is

// Inserting many data at once
db.items.insertMany([{name: "Moto s1", price: 2000, rating: 4, qty: 13, sold: 8}, {name: "Redmi 6", price: 8000, rating: 4.8, qty: 233, sold: 980}]) // it is input as a array
// there can be more attributes added 


////// Searching/Querying data from the Mongo Database
db.items.find({rating: 4.8}) //(filter object)
db.items.find({rating: {$gte: 4}})
db.items.find({rating: {$gt: 4}})
// $gte == greater than or equal to
// $gt == greater than
// $lte == less than or equal to
// $lt == less than
// Logical operators
// AND Operator
db.items.find({rating: {$gt: 4}, price: {$gt: 10000}})
// OR operator
db.items.find({$or:[{rating: {$gt: 4}}, {price: {$gt: 10000}}]})
//// Projection
// so only rating will be shown
db.items.find({rating: {$gt: 4}}, {rating:1})
// which are given value 1 ie true is shown
db.items.find({rating: {$gt: 4}}, {rating:1, qty:1})


////// Deleting data from the Mongo Database
// delete the first matching entry or document from the db
db.items.deleteOne({price: 22000})
// for multiple delete or delete all matching documents
db.items.deleteMany({price: 22000})


////// Updating data from the Mongo Database
db.items.updateOne({name: "Moto s1"}, {$set: {price: 2, rating: 1}}) 
// db.items.updateOne(finding object, {operation: update attribute and value}) 
db.items.updateMany({name: "Moto s1"}, {$set: {price: 3, rating: 0}}) 
// db.items.updateMany(finding object, {operation: update attributes and value}) 