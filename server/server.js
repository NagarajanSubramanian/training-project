const express = require('express');
const bodyParser = require('body-parser');
const server = express();

/*Need to use after the db client object without multipleconnections*/
//require('./src/database/handshake.js');

/* Routers import */
const userControlRouter = require('./src/routers/userControlRouter.js');

server.listen(2020);
server.use(bodyParser.urlencoded({extended: true}))
/* Static folder */
//server.use(express.static(''));

server.get('/', function(req, res){
  res.send('Node Server');
});

/* Config Routers Middleware */
server.use('/user',userControlRouter);