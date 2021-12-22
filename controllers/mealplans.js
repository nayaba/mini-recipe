const MealPlan = require('../models/mealplan')

module.exports = {
    create
}



// handle form - post request
async function create(req, res) {
    console.log('req body: ', req.body)
    const mealplan = new MealPlan(req.body)
    mealplan.save(function (err) {
       if (err) {
           console.log(err)
           return res.redirect('/calendars/show')
       }
       console.log('mealplan: ', mealplan)
       res.redirect('/calendars/show')
    })
}