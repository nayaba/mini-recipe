const Recipe = require('../models/recipe')

module.exports = {
    index
}


// callback function
function index(req, res) {
    const year = req.query.year || 2021
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    res.render('/calendar/index', {
        calendar: calendar(year), months, year
    })
}