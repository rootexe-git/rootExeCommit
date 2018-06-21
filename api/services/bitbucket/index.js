const core = require('./../../core');

var getAccessToken = (req, res) => {
    var dataString = 'grant_type=authorization_code&code=' + req.query.code;

    var options = {
        url: 'https://bitbucket.org/site/oauth2/access_token',
        method: 'POST',
        body: dataString,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            'user': 'X4NKKSP2eyaPCcRGK9',
            'pass': 'mfkJMR52EMgGqN7jzFYq3XRkkZKstcCh'
        }
    };

    core.request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            return res.Ok(body);
        }

        return res.Error(error, 500);
    });

    
}

module.exports = {
    getAccessToken
}