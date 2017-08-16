'use strict';
require('colors');
const express = require('express'),
  bodyParser = require('body-parser'),
  winston = require('winston'),
  path = require('path'),
  expressWinston = require('express-winston'),

  app = express(),
  logger = new(winston.Logger)({
    level: 'server',
    levels: { server: 0 },
    colors: { server: 'green' },
    colorize: true,
    transports: [
      new(winston.transports.Console)({ 'timestamp': true, 'prettyPrint': true, colorize: true })
    ]
  });

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(expressWinston.logger({
  transports: [new winston.transports.Console({ 'timestamp': true, colorize: true })],
  expressFormat: true,
  meta: false,
  colorize: true
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('pages/clock');
});

app.get('*', (req, res) => {
  res.render('pages/error', {
    title: '404',
    errMsg: 'Whoops! Looks like that page got a little lost on its way to you'
  });
});

app.listen(1059, () => {
  logger.server('Berkeley Clock is listening on port 1059!\n'.rainbow + 'http://localhost:1059');
});