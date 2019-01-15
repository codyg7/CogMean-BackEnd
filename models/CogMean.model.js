var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var CogMeanSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

CogMeanSchema.plugin(mongoosePaginate)
const CogMean = mongoose.model('Cogmean', CogMeanSchema)

module.exports = CogMean;