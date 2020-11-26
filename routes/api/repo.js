const GitHub = require('github-api');
const apiKey = require('../../config').apiKey;

const routes = require('express').Router();
// basic auth
const github = new GitHub({
    token: apiKey
});

function getRepo(user, repo) {
    return github.getRepo(`${user}`, `${repo}`);
}


// GET user
routes.get('/user/:nickname/repos/:repoName/', (req, res) => {
    const repo = getRepo(req.params.nickname, req.params.repoName);
    repo.getContents().then(({
        data
    }) => {
        res.send(data);
    })
});

routes.get('/user/:nickname/repos/:repoName/details/', (req, res) => {
    const repo = getRepo(req.params.nickname, req.params.repoName);
    repo.getDetails().then(({
        data
    }) => {
        res.send(data);
    })
});


module.exports = routes