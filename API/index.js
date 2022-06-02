console.log("Test")

const mongoose = require('mongoose')
const DogFood = require('./models/dog_food.js')

const dbURI = "mongodb://admin:admin@mongo:27017/products?authSource=admin";
mongoose.connect(dbURI, { useNewURLParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected"))
    .catch((err) => console.log(err))

DogFood.find()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err);
    })