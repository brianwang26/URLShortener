const express = require('express') // Express server 
const mongoose = require('mongoose')
const shortURL = require('./models/shortURL')
const app = express()
const AuthRoute = require('./routes/auth')


mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/URLShortner', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    const shortURLs = await shortURL.find()
    res.render('index', {shortURLs: shortURLs})
})

app.post('/shortURLs', async (req, res) => {
    await shortURL.create({longURL: req.body.longURL })
    res.redirect('/')
})

// finds shortURL
app.get('/:shortURL', async (req, res) => {
    const foundURL = await shortURL.findOne({shortURL: req.params.shortURL})
    if (foundURL == null){
        return res.sendStatus(404)
    }
    foundURL.visits++
    foundURL.lastAccessed = Date() 
    foundURL.save()
    res.redirect(foundURL.longURL)
})

app.listen(process.env.PORT || 5000);

app.use(AuthRoute)