const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealPlanSchema = new Schema({
    date: {
        type: Date,
        // required: true
    },
    meal: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack']
    },
    recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('MealPlan', mealPlanSchema)