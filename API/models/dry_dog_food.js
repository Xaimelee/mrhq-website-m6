const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dryDogFoodSchema = new Schema({
    imageurl: {
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

const DryDogFood = mongoose.model("dry_dog_food", dryDogFoodSchema)
module.exports = DryDogFood;