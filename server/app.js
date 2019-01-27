require('dotenv').config();

const express = require('express');
const routes = require('./../routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.use('/api', routes);

module.exports = app;
