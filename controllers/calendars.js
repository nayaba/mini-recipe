// import our calcTable function from config file
const calendar = require('../config/calendar')
const MealPlan = require('../models/mealplan')

module.exports = {
    index,
    show
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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
function show(req, res) {
    const year = req.query.year || 2022
    // will update to take info from req
    const month = 3
    const showMonth = months[month]

    res.render('calendars/show', {
        calendar: calendar(year),  
        year,
        month,
        title: `${showMonth} ${year}`
    })
}