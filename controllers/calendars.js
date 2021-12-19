// import our calcTable function from config file
const calendar = require('../config/calendar')

module.exports = {
    index
}


// callback function
function index(req, res) {
    const year = req.query.year || 2021
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    res.render('calendars/index', {
        calendar: calendar(year), months, year
    })
}