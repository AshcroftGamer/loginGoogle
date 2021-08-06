require('dotenv').config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const PORT = 5000;

app.use(express.static(__dirname + "/public"));


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());

global.__basedir = __dirname;


// Middleware

const rotaHome = require('./route/home')
const rotalogin = require('./route/routelogin')
const rotapro = require('./route/rotapro')
// const rotalogout = require('./route/rotalogout')
const rotaperfil = require('./route/rotaperfil')

app.use('/rotahome', rotaHome);
app.use('/rotapro', rotapro);
app.use('/rotalogin', rotalogin);
app.use('/rotaperfil', rotaperfil)
// app.use('/logout', rotalogout)


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})


// app.get('/profile',  (req, res)=>{
//     let user = req.user;
//     res.render('profile', {user});
// })

// app.get('/protectedroute',  (req,res)=>{
//     res.send('This route is protected')
// })

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/rotalogin')

})

// app.get('/rotapro', (req,res)=>{
//     res.send('ok')
//     // res.sendFile(__dirname + '/public/rotapro.html');
// })


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})