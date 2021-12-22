// import our calcTable function from config file
const calendar = require('../config/calendar')
const MealPlan = require('../models/mealplan')
const Recipe = require('../models/recipe')
// const scriptFile = require('../public/javascripts/calendar')

module.exports = {
    index,
    show
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let today = new Date()

// callback function
function index(req, res) {
    const year = req.query.year || 2022

    res.render('calendars/index', {
        calendar: calendar(year), 
        months, 
        year,
        title: 'Calendar'
    })
}

// show function
async function show(req, res) {
    const year = today.getFullYear() || 2022
    // will update to take info from req
    const month = today.getMonth()
    const showMonth = months[month]

    let recipes = await Recipe.find({})
    
    res.render('calendars/show', {
        calendar: calendar(year),  
        year,
        month,
        recipes,
        title: `${showMonth} ${year}`
    })
}