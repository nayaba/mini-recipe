const MealPlan = require('../models/mealplan')

module.exports = {
    create
}



// handle form - post request
function create(req, res) {
    const mealplan = new MealPlan(req.body)
    mealplan.save(function (err) {
       if (err) {
           console.log(err)
           return res.redirect('/calendars/show')
       }
       console.log(mealplan)
       res.redirect('/calendars/show')
    })
}