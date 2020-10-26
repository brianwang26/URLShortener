const express = require('express') // Express server 
const mongoose = require('mongoose')
const shortURL = require('./models/shortURL')
const app = express()
const AuthRoute = require('./routes/auth')

/**
 * Connect to instance of Mongoose
 */
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/URLShortner', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.set('view engine', 'ejs') // "Front-end" in index.ejs
app.use(express.urlencoded({extended: false}))

/**
 * Retrieves all short URL's for table 
 */
app.get('/', async (req, res) => {
    const shortURLs = await shortURL.find()
    res.render('index', {shortURLs: shortURLs})
})

/**
 * Shortens URL given a Long URL 
 */
app.post('/shortURLs', async (req, res) => {
    await shortURL.create({longURL: req.body.longURL })
    res.redirect('/')
})

/**
 * Redirects user to ShortURL given LongURL
 */
app.get('/:shortURL', async (req, res) => {
    const foundURL = await shortURL.findOne({shortURL: req.params.shortURL})
    if (foundURL == null){ // This is not a shortened link 
        return res.sendStatus(404)
    }
    foundURL.visits++
    foundURL.lastAccessed = Date() 
    foundURL.save()
    res.redirect(foundURL.longURL)
})

app.listen(process.env.PORT || 5000); 