const route = require('express').Router();
const login = require('../mid/login')

route.get('/', login.logado, (req, res) => {
    res.sendFile(__basedir + '../public/rotaperfil.html')
})

module.exports = route;