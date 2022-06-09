const express = require("express")
const mongoose = require('mongoose')
const DryDogFood = require('./models/dry_dog_food.js')

const server = express()
const port = process.env.PORT || 8999
const url = "mongodb://admin:admin@mongo:27017/dog_food?authSource=admin"

server.use(express.json())

mongoose.connect(url, { useNewURLParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected"))
    .catch((err) => console.log(err))

server.listen(port, () => {
    console.log("Listening: Port", + port)
})

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

server.get("/getDryDogFood", (req, res) => {
    DryDogFood.find()
        .then((result) => {
            res.send(result)
            return result
        })
        .catch((err) => {
            return err
        })
})
