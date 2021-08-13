const route = require('express').Router();
const login = require('../mid/login');
const cookieParser = require('cookie-parser');

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '235715095816-sr5jafmcb0g29j2336fe7ms6t27e2mn8.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);







route.get('/', (req,res)=>{
    res.sendFile(__basedir + '/public/login.html');
 
})

route.post('/', (req,res)=>{
    let token = req.body.token;
    console.log(req.body.token)

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
module.exports = route;