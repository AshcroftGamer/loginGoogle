const route = require('express').Router();

route.get('/', (req,res)=>{
    res.sendFile(__basedir + '/public/rotapro.html');
 
})

module.exports = route;
