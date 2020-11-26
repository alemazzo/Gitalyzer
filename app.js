// Modules
const express = require('express');
const ejs = require('ejs');
// Routes
const apiUserRoutes = require('./routes/api/user');
const apiRepoRoutes = require('./routes/api/repo');
// Express app
const app = express()

// View engine setup 
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('static'));


app.use('/api/', [apiUserRoutes, apiRepoRoutes]);

app.get('/', (req, res) => {
    res.render('home');
})
app.use('/user/:nickname/', (req, res) => {
    res.render('user', {
        nickname: req.params.nickname
    })
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))