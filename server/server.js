const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');
const { host, port, dbName } = require('./properties.json').database;

const server = express();
const url = `mongodb://${host}:${port}/${dbName}`;

/* Routers import */
const userControlRouter = require('./src/routers/userControlRouter.js');


server.listen(2020);

/*Middleware to connect to database and store it in request object asdb*/
server.use(expressMongoDb(url));

server.use(bodyParser.urlencoded({extended: true}))

/* Static folder */
//server.use(express.static(''));


server.get('/', function(req, res){
  res.send('Node Server');
});

/* Config Routers Middleware */
server.use('/user',userControlRouter);
