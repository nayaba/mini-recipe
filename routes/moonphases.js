var express = require('express');
var router = express.Router();
const moonPhasesCtrl = require('../controllers/moonphases')



/* GET users listing. */
router.get('/', moonPhasesCtrl.index)
module.exports = router
