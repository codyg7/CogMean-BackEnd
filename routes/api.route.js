var express = require('express')

var router = express.Router()
var cogmeans = require('./api/cogmean.route')


router.use('/cogmean', cogmeans);


module.exports = router;