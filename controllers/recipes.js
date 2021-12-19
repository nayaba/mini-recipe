const Recipe = require('../models/recipe')

module.exports = {
    index,
    create
}

// callback function
function index(req, res) {
    Recipe.find({}, function (err, recipes) {
        // rendering recipes/index from views directory
        res.render('recipes/index', {
            title: "All Recipes", recipes
        })
    })
}

function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function (err) {
       if (err) {
           console.log(err)
           return res.redirect('/recipes/index')
       }
       console.log(recipe)
       res.redirect('/recipes/index')
    })
}