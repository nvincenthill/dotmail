require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./../routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

app.use(bodyParser.json());
app.use('/api', routes);

app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With',
  );
  res.sendStatus(200);
});

module.exports = app;
