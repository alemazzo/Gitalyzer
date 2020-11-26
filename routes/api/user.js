const GitHub = require('github-api');
const apiKey = require('../../config').apiKey;

const routes = require('express').Router();
// basic auth
const github = new GitHub({
    token: apiKey
});

function getUser(nickname) {
    return github.getUser(`${nickname}`);
}

// GET user
routes.get('/user/:nickname/', (req, res) => {
    const user = getUser(req.params.nickname);
    user.getProfile().then(({
        data
    }) => {
        res.send(data);
    })
});

// GET repos
routes.get('/user/:nickname/repos/', (req, res) => {
    const user = getUser(req.params.nickname);
    user.listRepos().then(({
        data
    }) => {
        res.send(data);
    })
});


// GET followers
routes.get('/user/:nickname/followers/', (req, res) => {
    const user = getUser(req.params.nickname);
    user.listFollowers().then(({
        data
    }) => {
        res.send(data);
    })
});

// GET following
routes.get('/user/:nickname/following/', (req, res) => {
    const user = getUser(req.params.nickname);
    user.listFollowing().then(({
        data
    }) => {
        res.send(data);
    })
});

// GET starred Repos
routes.get('/user/:nickname/starredRepos/', (req, res) => {
    const user = getUser(req.params.nickname);
    user.listStarredRepos().then(({
        data
    }) => {
        res.send(data);
    })
});

module.exports = routes