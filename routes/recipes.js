var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index)

router.post('/', recipesCtrl.create)

router.get('/new', recipesCtrl.new)

module.exports = router
