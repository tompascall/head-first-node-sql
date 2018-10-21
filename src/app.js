const express = require('express');
const renderer = require('express-react-views');
const app = express();
const bodyParser = require('body-parser');
const aliens = require('./routes/aliens');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', renderer.createEngine());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/aliens', aliens);

app.use('/', aliens);

module.exports = app;