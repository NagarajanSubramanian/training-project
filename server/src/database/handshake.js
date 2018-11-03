const MongoClient = require('mongodb').MongoClient;
const { prefix, host, port, dbName } = require('../../properties.json').database;
const url = `mongodb://${host}:${port}/${dbName}`;


MongoClient.connect(url, function(err, db){
	global['dbClient'] = db; 
});
