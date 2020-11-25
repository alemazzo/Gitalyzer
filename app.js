const express = require('express')

const gitApiRoutes = require('./routes/gitApi');

const app = express()



const port = 3000

app.use('/', gitApiRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))