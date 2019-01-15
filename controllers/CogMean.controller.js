// We need to be able to access the Service 
//that we just created so let's pull that in

var TService = require('../services/cogmean.service.js');

// Make sure to save the context of 
//this module inside the _this variable

_this = this

exports.getCogmeans = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
        
            var cogmeans = await CogmeanService.getCogmeans({}, page, limit)
            
    // Return the todos list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: cogmeans, message: "Succesfully Cogmeans Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
    }

    exports.createCogmean = async function(req, res, next){

        // Note: Req.Body contains the form submit values.
    
        var cogmean = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        }
    
        try{
            
    // Calling the Service function 
    //with the new object from the Request Body
        
            var createdCogmean = await CogmeanService.createCogmean(cogmean)
            return res.status(201).json({status: 201, data: createdCogmean, message: "Succesfully Created CogMean"})
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
    return res.status(400).json({status: 400, message: "Cogmean Creation was Unsuccesfull, I am sorry :( "})
        }
    }

    exports.updateCogmean = async function(req, res, next){

        // Id is necessary for the update
    
        if(!req.body._id){
            return res.status(400).json({status: 400, message: "Id must be present"})
        }
    
        var id = req.body._id;
    
        console.log(req.body)
    
        var cogmean = {
            id,
            title: req.body.title ? req.body.title : null,
            description: req.body.description ? req.body.description : null,
            status: req.body.status ? req.body.status : null
        }
    
        try{
            var updatedCogmean = await CogmeanService.updateCogmean(cogmean)
            return res.status(200).json({status: 200, data: updatedCogmean, message: "Succesfully Updated Tod"})
        }catch(e){
            return res.status(400).json({status: 400 , message: e.message})
        }

    }

    exports.removeCogmean = async function(req, res, next){

        var id = req.params.id;
    
        try{
            var deleted = await CogmeanService.deleteCogmean(id)
            return res.status(204).json({status:204, message: "Succesfully Cogmean Deleted"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    
    }