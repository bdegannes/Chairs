var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

app.listen(port);
console.log('server listening on port ' + port + '...');
