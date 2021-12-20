// const moon = require('../config/moon')
let moon = new XMLHttpRequest()

module.exports = {
    index,
}


var timestamp = Math.round(new Date().getTime() / 1000); //Returns a unix timestamp ie. 1572958651

// Make request to Farmsense API to retrieve moon phase
;
;

// callback function
function index(req, res) {
    const moonPhase = moon.open('GET', 'http://api.farmsense.net/v1/moonphases/?d='+timestamp, true)
    // Recipe.find({}, function (err, recipes) {
    //     // rendering recipes/index from views directory
    //     res.render('recipes/index', {
    //         title: "All Recipes", recipes
    //     })
    // })

    console.log(moonPhase)
}

