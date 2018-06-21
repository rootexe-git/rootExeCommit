const core = require('./../../core');

core.app.get('/bitbucket/getToken', core.services.bitbucket.getAccessToken);