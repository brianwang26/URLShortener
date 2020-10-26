const User = require ('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    console.log(req.body.name)
    bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {
        if (err) {
            res.json({
                message: err.message
            })
        }
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(user => {
        res.json({
            message: "User Registered!"
        })
        }).catch(error => {
            res.json({
                message: "Error! Please try again."
            })
        })
    }); 
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    User.findOne({$or: [{email:username}]}).then(user => {
        if(user){
            bcrypt.compare(password, user.password, function (err, result) {
                if(err) {
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'encryptedValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token
                    })
                } else{
                    res.json({
                        message: 'Password Invalid'
                    })
                }
            })
        }
        else{
            res.json({
                message: "Invalid User!"
            })
        }
    })
}

module.exports = {
    register, login
}