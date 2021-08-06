const route = require('express').Router();
const login = require('../mid/login')

route.get('/', login.puta, (req, res) => {
    res.sendFile(__basedir + '../')
})

module.exports = route;