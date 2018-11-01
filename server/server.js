const express = require('express');
const server = express();

/* Routers import */
const userControlRouter = require('./src/routers/userControlRouter.js');

server.listen(2020);

/* Static folder */
//server.use(express.static(''));

server.get('/', function(req, res){
  res.send('Node Server');
});

/* Config Routers Middleware */
server.use('/user',userControlRouter);