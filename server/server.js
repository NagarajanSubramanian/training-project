const express = require('express');
const server = express();

//Static folder
server.use(express.static(''));

server.get('/', function(req, res){
  res.send('Node Server');
});

server.listen(2020);