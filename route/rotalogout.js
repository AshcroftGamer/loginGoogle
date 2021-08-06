const route = require('express').Router();


route.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')

})
module.exports = route;