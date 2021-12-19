const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    prepTime: {
        type: String
    },
    cookTime: {
        type: String
    },
    // reviews: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)