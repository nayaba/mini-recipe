const Recipe = require('../models/recipe')

module.exports = {
    index,
    create,
    new: newRecipe
}

// callback function
function index(req, res) {
    Recipe.find({}, function (err, recipes) {
        console.log(recipes)
        res.render('recipes/index', {
            title: "All Recipes",
            recipes
        })
    })
}

// view form - get request
function newRecipe(req, res) {
    res.render('recipes/new', {
        title: "New Recipe"
    })
}

// handle form - post request
function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function (err) {
       if (err) {
           console.log(err)
           return res.redirect('/recipes')
       }
       console.log(recipe)
       res.redirect('/recipes')
    })
}