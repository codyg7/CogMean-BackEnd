var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var CogMeanController = require('../../controllers/cogmean.controller.js');


// Map each API to the Controller FUnctions

router.get('/', CogMeanController.getCogmeans)

router.post('/', CogMeanController.createCogmean)

router.put('/', CogMeanController.updateCogmean)

router.delete('/:id',CogMeanController.removeCogmean)


// Export the Router

module.exports = router;