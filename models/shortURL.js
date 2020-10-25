const mongoose = require('mongoose')
const shortId = require('shortid')

const shortURLSchema = new mongoose.Schema({
    longURL: { // original URL
        type: String, 
        required: true 
    },
    shortURL : {
        type: String, 
        required: true, 
        default: shortId.generate // Generate short ID 
    }
})

module.exports = mongoose.model('ShortURL', shortURLSchema)