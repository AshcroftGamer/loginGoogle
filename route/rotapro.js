const route = require('express').Router();
const login = require('../mid/login')

route.get('/', (req,res)=>{
    res.sendFile(__basedir + '/public/rotapro.html');
 
})

module.exports = route;