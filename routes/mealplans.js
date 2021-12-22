var express = require('express');
var router = express.Router();
const calendarCtrl = require('../controllers/calendars')
const mealplanCtrl = require('../controllers/mealplans')

router.get('/', calendarCtrl.index)
router.post('/', mealplanCtrl.create)

module.exports = router