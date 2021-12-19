var express = require('express');
var router = express.Router();
const calendarCtrl = require('../controllers/calendars')

router.get('/', calendarCtrl.index)

module.exports = router
