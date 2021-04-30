const facebookSecret = require('./facebook');

module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : 'mongodb://localhost:27017/nucampsite',
    'facebook': {
        clientId: '1178224932693689',
        clientSecret: facebookSecret
    }
}