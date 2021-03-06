var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var data = require('./routes/data');

var app = express();

app.use(cors({ origin: ['http://localhost:4200', 'https://earthii.github.io'], credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/data', data);

module.exports = app;
