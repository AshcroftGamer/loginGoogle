
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '235715095816-g7c1qglfud2isfnbnmukifsuddvn2ubc.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

const cookieParser = require('cookie-parser')


exports.logado = (res, req, next) => { 

    console.log('req inicio');

    console.log(req.cookies);
    console.log('req fim');

    let token = req.cookie['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }
    verify()
        .then(() => {
            req.user = user;
            next();
        })
        .catch(err => {
            res.redirect('/rotalogin')
        })

}