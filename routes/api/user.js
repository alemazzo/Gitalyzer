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

function getData(func) {
    func().then(({
        data
    }) => {
        return data;
    });
}

// GET user
routes.get('/users/:nickname/', (req, res) => {
    const user = getUser(req.params.nickname);

    res.send(data);
});

// GET repos
routes.get('/users/:nickname/repos/', (req, res) => {
    const user = getUser(req.params.nickname);
    res.send(getData(user.listRepos));
});


// GET followers
routes.get('/users/:nickname/followers/', (req, res) => {
    const user = getUser(req.params.nickname);
    res.send(getData(user.listFollowers));
});

// GET following
routes.get('/users/:nickname/following/', (req, res) => {
    const user = getUser(req.params.nickname);
    res.send(getData(user.listFollowing));
});

// GET starred Repos
routes.get('/users/:nickname/starredRepos/', (req, res) => {
    const user = getUser(req.params.nickname);
    res.send(getData(user.listStarredRepos));
});

module.exports = routes