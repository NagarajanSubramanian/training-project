const express = require('express');
const userControlRouter = express.Router();
const { dbClient } = global;

console.log('2'); 
userControlRouter.post('/login', function (req, res) {
	res.send('Router');
});

userControlRouter.put('/reset-password', function (req, res) {
	res.send('Router Put ');
});

//userControlRouter.get('/:id', function (req, res) {
//	res.send('Router Get ');
//});

userControlRouter.get('/', function (req, res) {
	console.log('--------------',dbClient);
	res.send('Router Get ');
});

userControlRouter.post('/signup', function (req, res) {
	res.send('Router Post ');
});


userControlRouter.delete('/', function (req, res) {
	res.send('Router Delete');
});


module.exports = userControlRouter;