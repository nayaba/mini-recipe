var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes')

router.post('/', recipesCtrl.create)

/* GET users listing. */
router.get('/', recipesCtrl.index)
module.exports = router
