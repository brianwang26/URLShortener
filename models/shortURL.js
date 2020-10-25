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
        default: shortId.generate
    }, 
    dateCreated: {
        type: Date, 
        required: true,
        default: Date()
    },
    visits :{
        type: Number, 
        required: true, 
        default: 0 
    },
    lastAccessed: {
        type: Date, 
        required: true,
        default: Date()
    }
})

module.exports = mongoose.model('ShortURL', shortURLSchema)