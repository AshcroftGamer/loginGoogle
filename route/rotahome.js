const route = require('express').Router();
// const login = require('../mid/login')

route.get('/',  (req, res) => {
    res.sendFile(__basedir + '/public/home.html');
})

module.exports = route;
