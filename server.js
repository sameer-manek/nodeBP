const http = require('http')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const server = http.createServer(app)
server.listen(8000, ()=> {
        console.log('The server is running on port 8000');
});

// bring in other routes from the application

require('./mods/routes')(app);

app.get('*', (req, res)=> res.status(200).send({
    message: "welcome to somewhere amazing."
}))

module.exports = app;
