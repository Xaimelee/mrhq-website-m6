const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogFoodSchema = new Schema({
    imageurl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps : true});

const DogFood = mongoose.model("dog_food", dogFoodSchema)
module.exports = DogFood;