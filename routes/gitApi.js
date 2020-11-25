const GitHub = require('github-api');
const apiKey = require('../config').apiKey;

const routes = require('express').Router()

routes.get('/', (req, res) => {

    // basic auth
    const gh = new GitHub({
        token: apiKey
    });

    const user = gh.getUser('alemazzo');
    user.listStarredRepos()
        .then(function ({
            data: reposJson
        }) {
            res.send(reposJson);
        });
});

module.exports = routes