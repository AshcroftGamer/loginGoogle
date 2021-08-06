require('dotenv').config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '797033371325-ke9if86o4o3t18lnbo9s96jhbbkmjli2.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

app.use(express.static(__dirname + '/pages'))

const PORT = 5000;

// Middleware

const rotaHome = require('./route/home')

app.get('/home', rotaHome)

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', (req,res)=>{
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('success')
      })
      .catch(console.error);

})

app.get('/profile',  (req, res)=>{
    let user = req.user;
    res.render('profile', {user});
})

app.get('/protectedroute',  (req,res)=>{
    res.send('This route is protected')
})

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})