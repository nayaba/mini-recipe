var express = require('express');
var router = express.Router();
const calendarCtrl = require('../controllers/calendars')
const calendarCtrl = require('../controllers/calendars')


router.get('/', calendarCtrl.index)
router.get('/show', calendarCtrl.show)

module.exports = router