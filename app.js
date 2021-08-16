const express  = require('express');
const cookieParser = require('cookie-parser');
const app = express();
global.__basedir = __dirname;


app.use(express.json());
app.use(cookieParser());



const rotalogin = require('./route/routelogin');
const rotalogout = require('./route/rotalogout');
const rotaperfil = require('./route/rotaperfil');
const rotapro = require('./route/rotapro');
const rotahome = require('./route/rotahome');

app.use('/home', rotahome);
app.use('/pro', rotapro);
app.use('/perfil', rotaperfil);
app.use('/logout', rotalogout);
app.use('/login', rotalogin);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

module.exports = app;
